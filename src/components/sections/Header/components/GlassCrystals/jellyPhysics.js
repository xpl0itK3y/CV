// Soft-body physics for the header blobs. Every blob hangs on a spring at its
// spot in the cluster, blobs shove each other out of the way, and the shape
// behaves like jelly: it stretches along its motion, squashes where it's
// pressed and wobbles when it stops. Lengths are px, time is seconds.

const TAU = Math.PI * 2;
const DEG = Math.PI / 180;

// Spring from a response time (s) and a damping ratio, the way Apple tunes them
const spring = (response, damping) => {
    const omega = TAU / response;
    return { k: omega * omega, c: 2 * damping * omega };
};

// Pulls a blob back to its spot; underdamped, so it overshoots a bit like jelly
const HOME = spring(0.62, 0.58);
// Same without the bounce for reduced motion
const HOME_CALM = spring(0.45, 1);
// Shape wobble, around 3 Hz
const STRAIN = spring(0.32, 0.3);
const ROTATION = spring(0.5, 0.42);
const LIFT = spring(0.24, 1);

// Physics runs in fixed steps so it behaves the same at 60 and 120 Hz
const STEP = 1 / 120;
// A long frame (tab switch, jank) is cut short instead of jumping
const MAX_FRAME = 1 / 15;

const CONTACT_STIFFNESS = 900;
const CONTACT_DAMPING = 16;

// How much a blob stretches at full speed and squashes per px it's pressed in
const STRETCH = 0.16;
const PRESS = 1.8;
const MAX_STRAIN = 0.26;
// Speed (in sizes per second) at which the stretch and lean saturate
const SPEED_SCALE = 9;
// Lean into horizontal motion, and swing from being dragged off-centre, in deg
const LEAN = 4;
const SWING = 36;
const MAX_ROTATION = 18;
// Idle swimming amplitude, as a fraction of the size
const SWIM = 0.026;

// The dragged blob follows the pointer freely within this radius, then
// resists more and more, as if tethered (fractions of the size)
const TETHER_FREE = 0.5;
const TETHER_GIVE = 0.45;

// A throw faster than this many sizes per second is capped
const MAX_THROW = 12;
// Release velocity is measured over the last stretch of the drag (ms)
const VELOCITY_WINDOW = 80;
// Holding still this long before letting go means no throw (ms)
const STILL_BEFORE_RELEASE = 50;

// Distance from an ellipse's centre to its edge in the given direction
const radiusAt = (halfW, halfH, angle) =>
    (halfW * halfH) / Math.hypot(halfH * Math.cos(angle), halfW * Math.sin(angle));

const reachAlong = (body, angle) =>
    radiusAt(body.halfW, body.halfH, angle - (body.tilt + body.rotation) * DEG);

/**
 * @param {Array<{x: number, y: number, w: number, h: number, tilt: number}>} layout
 *   blob rectangles as fractions of the size, tilt in degrees
 */
export const createWorld = (layout) => {
    const meanArea =
        layout.reduce((sum, item) => sum + item.w * item.h, 0) / layout.length;

    const bodies = layout.map((item, index) => ({
        // Rest centre and half-axes, in fractions of the size
        cx: item.x + item.w / 2,
        cy: item.y + item.h / 2,
        halfW: item.w / 2,
        halfH: item.h / 2,
        tilt: item.tilt,
        // Bigger blobs are heavier and get pushed around less
        mass: (item.w * item.h) / meanArea,
        // Desyncs the idle swimming between blobs
        seed: index * 2.3 + 0.7,
        held: false,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        rotation: 0,
        spin: 0,
        // Strain as a symmetric traceless tensor [[e1, e2], [e2, -e1]]:
        // unlike a vector, it can pass through round into squashed and back
        e1: 0,
        e2: 0,
        ev1: 0,
        ev2: 0,
        // Squash from contacts in the current step
        press1: 0,
        press2: 0,
        lift: 0,
        liftVelocity: 0,
    }));

    // The blobs overlap a little where they sit, so each pair only starts
    // pushing once it's pressed closer than at rest
    const pairs = [];
    for (let i = 0; i < bodies.length; i += 1) {
        for (let j = i + 1; j < bodies.length; j += 1) {
            const dx = bodies[j].cx - bodies[i].cx;
            const dy = bodies[j].cy - bodies[i].cy;
            const angle = Math.atan2(dy, dx);
            const reach = reachAlong(bodies[i], angle) + reachAlong(bodies[j], angle);
            pairs.push({ i, j, scale: Math.min(1, Math.hypot(dx, dy) / reach) * 0.97 });
        }
    }

    return { bodies, pairs, clock: 0 };
};

const collide = (world, size) => {
    const { bodies, pairs } = world;

    pairs.forEach(({ i, j, scale }) => {
        const a = bodies[i];
        const b = bodies[j];
        const dx = (b.cx - a.cx) * size + b.x - a.x;
        const dy = (b.cy - a.cy) * size + b.y - a.y;
        const distance = Math.hypot(dx, dy) || 0.001;
        const angle = Math.atan2(dy, dx);
        const reach = (reachAlong(a, angle) + reachAlong(b, angle)) * size * scale;
        const depth = reach - distance;
        if (depth <= 0) return;

        const nx = dx / distance;
        const ny = dy / distance;
        const closing = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        // Soft contact: springy push plus damping while they close in, never a pull
        const force = Math.max(0, CONTACT_STIFFNESS * depth - CONTACT_DAMPING * closing);

        if (!a.held) {
            a.ax -= (nx * force) / a.mass;
            a.ay -= (ny * force) / a.mass;
        }
        if (!b.held) {
            b.ax += (nx * force) / b.mass;
            b.ay += (ny * force) / b.mass;
        }

        // Both flatten against each other along the contact normal
        const squash = depth / size;
        const press1 = squash * (nx * nx - ny * ny);
        const press2 = squash * 2 * nx * ny;
        a.press1 += press1;
        a.press2 += press2;
        b.press1 += press1;
        b.press2 += press2;
    });
};

const substep = (world, h, env) => {
    const { size, calm, drag } = env;
    const home = calm ? HOME_CALM : HOME;
    const swim = calm ? 0 : size * SWIM;
    const speedScale = size * SPEED_SCALE;
    const time = world.clock;

    world.bodies.forEach((body) => {
        body.ax = 0;
        body.ay = 0;
        body.press1 = 0;
        body.press2 = 0;
    });

    collide(world, size);

    world.bodies.forEach((body) => {
        const { seed } = body;
        const speed = Math.hypot(body.vx, body.vy);

        if (!body.held) {
            // The spot drifts slowly, so idle blobs swim around it
            const homeX =
                swim * (0.62 * Math.sin(0.83 * time + seed) + 0.38 * Math.sin(1.37 * time + seed * 1.9));
            const homeY =
                swim * (0.62 * Math.sin(0.71 * time + seed * 1.3) + 0.38 * Math.sin(1.19 * time + seed * 2.7));

            body.ax += -home.k * (body.x - homeX) - home.c * body.vx;
            body.ay += -home.k * (body.y - homeY) - home.c * body.vy;
            body.vx += body.ax * h;
            body.vy += body.ay * h;
            body.x += body.vx * h;
            body.y += body.vy * h;
        }

        let strain1 = 0;
        let strain2 = 0;
        let rotation = 0;

        if (!calm) {
            // Stretch along the motion; cos/sin of the doubled angle, no trig needed
            if (speed > 0.001) {
                const stretch = (STRETCH * Math.tanh(speed / speedScale)) / (speed * speed);
                strain1 = stretch * (body.vx * body.vx - body.vy * body.vy);
                strain2 = stretch * 2 * body.vx * body.vy;
            }
            strain1 -= PRESS * body.press1;
            strain2 -= PRESS * body.press2;
            // Slow breathing
            strain1 += 0.022 * Math.sin(1.05 * time + seed * 1.7);
            strain2 += 0.016 * Math.sin(0.77 * time + seed * 0.6);

            rotation = LEAN * Math.tanh(body.vx / speedScale) + 1.8 * Math.sin(0.53 * time + seed * 2.1);

            // Dragged by an off-centre point, the far side lags and the blob swings
            if (body.held && drag) {
                const swing =
                    (drag.leverX * body.vy - drag.leverY * body.vx) / (size * speedScale);
                rotation += SWING * Math.tanh(swing);
            }
            rotation = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, rotation));
        }

        body.ev1 += (STRAIN.k * (strain1 - body.e1) - STRAIN.c * body.ev1) * h;
        body.ev2 += (STRAIN.k * (strain2 - body.e2) - STRAIN.c * body.ev2) * h;
        body.e1 += body.ev1 * h;
        body.e2 += body.ev2 * h;

        body.spin += (ROTATION.k * (rotation - body.rotation) - ROTATION.c * body.spin) * h;
        body.rotation += body.spin * h;

        const lift = body.held ? 1 : 0;
        body.liftVelocity += (LIFT.k * (lift - body.lift) - LIFT.c * body.liftVelocity) * h;
        body.lift += body.liftVelocity * h;
    });
};

/**
 * Advances the world by one animation frame.
 * @param {{size: number, calm: boolean, drag: null | {index: number, x: number, y: number, leverX: number, leverY: number}}} env
 *   drag holds the dragged blob's target offset and where it was grabbed relative to its centre
 */
export const stepWorld = (world, frameTime, env) => {
    const dt = Math.min(frameTime, MAX_FRAME);
    if (!(dt > 0)) return;

    const { drag } = env;
    world.bodies.forEach((body, index) => {
        body.held = drag !== null && drag.index === index;
    });

    const held = drag ? world.bodies[drag.index] : null;
    const fromX = held ? held.x : 0;
    const fromY = held ? held.y : 0;

    if (held) {
        // Smoothed so pointer event jitter doesn't flicker the stretch
        const blend = 1 - Math.exp(-dt / 0.045);
        held.vx += ((drag.x - fromX) / dt - held.vx) * blend;
        held.vy += ((drag.y - fromY) / dt - held.vy) * blend;
    }

    const steps = Math.max(1, Math.round(dt / STEP));
    for (let step = 1; step <= steps; step += 1) {
        // The dragged blob follows the pointer exactly, spread over the steps
        if (held) {
            held.x = fromX + ((drag.x - fromX) * step) / steps;
            held.y = fromY + ((drag.y - fromY) * step) / steps;
        }
        world.clock += dt / steps;
        substep(world, dt / steps, env);
    }
};

export const isAtRest = (world) =>
    world.bodies.every(
        (body) =>
            !body.held &&
            Math.abs(body.x) < 0.25 &&
            Math.abs(body.y) < 0.25 &&
            Math.hypot(body.vx, body.vy) < 4 &&
            Math.abs(body.rotation) < 0.05 &&
            Math.abs(body.spin) < 0.5 &&
            Math.hypot(body.e1, body.e2) < 0.002 &&
            body.lift < 0.003,
    );

// Puts every blob exactly at rest; the remaining distance is under a pixel
export const settleWorld = (world) => {
    world.bodies.forEach((body) => {
        Object.assign(body, {
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            rotation: 0,
            spin: 0,
            e1: 0,
            e2: 0,
            ev1: 0,
            ev2: 0,
            lift: 0,
            liftVelocity: 0,
        });
    });
};

const round = (value, digits) => {
    const factor = 10 ** digits;
    return Math.round(value * factor) / factor;
};

export const bodyTransform = (body) => {
    const magnitude = Math.hypot(body.e1, body.e2);
    const strain = Math.min(magnitude, MAX_STRAIN);
    // Axis of the strain as cos/sin of twice its angle
    const cos2 = magnitude > 1e-6 ? body.e1 / magnitude : 1;
    const sin2 = magnitude > 1e-6 ? body.e2 / magnitude : 0;

    // Stretched by s along the strain axis and by 1/s across it, so the area
    // stays the same; a lifted blob comes a little closer
    const along = 1 + strain;
    const across = 1 / along;
    const scale = 1 + body.lift * 0.05;
    const mean = ((along + across) / 2) * scale;
    const spread = ((along - across) / 2) * scale;

    const a = round(mean + spread * cos2, 4);
    const b = round(spread * sin2, 4);
    const d = round(mean - spread * cos2, 4);

    return `matrix(${a}, ${b}, ${b}, ${d}, ${round(body.x, 2)}, ${round(body.y, 2)}) rotate(${round(
        body.tilt + body.rotation,
        2,
    )}deg)`;
};

// Offset of the dragged blob for the pointer's raw offset from where it was
// grabbed: 1:1 near its spot, then smoothly tapering off
export const tether = (distance, size) => {
    const free = size * TETHER_FREE;
    const give = size * TETHER_GIVE;
    if (distance <= free) return distance;
    return free + give * Math.tanh((distance - free) / give);
};

// Inverse of tether, so grabbing a blob mid-flight doesn't make it jump
export const untether = (distance, size) => {
    const free = size * TETHER_FREE;
    const give = size * TETHER_GIVE;
    if (distance <= free) return distance;
    return free + give * Math.atanh(Math.min((distance - free) / give, 0.999));
};

/**
 * Velocity at release from the recent drag samples, in px/s.
 * @param {Array<{x: number, y: number, t: number}>} samples blob offsets with event timestamps (ms)
 * @returns {[number, number] | null} null when there isn't enough history to tell
 */
export const releaseVelocity = (samples, releaseTime, size) => {
    const last = samples[samples.length - 1];
    if (!last) return null;
    if (releaseTime - last.t > STILL_BEFORE_RELEASE) return [0, 0];

    let first = last;
    for (let index = samples.length - 2; index >= 0; index -= 1) {
        if (last.t - samples[index].t > VELOCITY_WINDOW) break;
        first = samples[index];
    }

    const span = (last.t - first.t) / 1000;
    if (span < 0.008) return null;

    let vx = (last.x - first.x) / span;
    let vy = (last.y - first.y) / span;
    const speed = Math.hypot(vx, vy);
    const maxSpeed = size * MAX_THROW;
    if (speed > maxSpeed) {
        vx *= maxSpeed / speed;
        vy *= maxSpeed / speed;
    }
    return [vx, vy];
};
