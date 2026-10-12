import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/GlassCrystals.module.css";
import {
    bodyTransform,
    createWorld,
    isAtRest,
    releaseVelocity,
    settleWorld,
    stepWorld,
    tether,
    untether,
} from "./jellyPhysics";

// Blob rectangles in % of the container, tilt in degrees, phase offsets the
// CSS morph so the blobs don't pulse in sync
const CRYSTALS = [
    { className: "crystalPrimary", left: 8, top: 16, width: 38, height: 70, tilt: -8, phase: "0s" },
    { className: "crystalSecondary", left: 38, top: 6, width: 29, height: 54, tilt: 7, phase: "-1.1s" },
    { className: "crystalTertiary", left: 64, top: 24, width: 30, height: 58, tilt: 11, phase: "-2.1s" },
];

const LAYOUT = CRYSTALS.map(({ left, top, width, height, tilt }) => ({
    x: left / 100,
    y: top / 100,
    w: width / 100,
    h: height / 100,
    tilt,
}));

const SHELL_STYLES = CRYSTALS.map(({ left, top, width, height, tilt, phase }) => ({
    left: `${left}%`,
    top: `${top}%`,
    width: `${width}%`,
    height: `${height}%`,
    "--tilt": `${tilt}deg`,
    "--phase": phase,
}));

const GlassCrystals = ({ size = 120 }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const containerRef = useRef(null);
    const shellRefs = useRef([]);
    const sizeRef = useRef(size);
    const engineRef = useRef(null);

    useEffect(() => {
        sizeRef.current = size;
    }, [size]);

    useEffect(() => {
        const container = containerRef.current;
        const world = createWorld(LAYOUT);
        const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
        let calm = Boolean(motionQuery?.matches);
        let visible = true;
        let frame = null;
        let lastTime = 0;
        let drag = null;
        const shownLift = [];

        // Written straight to the DOM: a React render per frame isn't needed
        const render = () => {
            world.bodies.forEach((body, index) => {
                const shell = shellRefs.current[index];
                if (!shell) return;

                shell.style.transform = bodyTransform(body);

                // The lift only feeds the shadow, so it's written when it changes
                const lift = Math.round(Math.max(body.lift, 0) * 100) / 100;
                if (lift !== shownLift[index]) {
                    shownLift[index] = lift;
                    shell.style.setProperty("--lift", lift);
                    // A thrown blob stays on top until it has landed
                    shell.style.zIndex = lift > 0 ? "8" : "";
                }
            });
        };

        const tick = (now) => {
            frame = null;
            const elapsed = lastTime ? (now - lastTime) / 1000 : 0;
            lastTime = now;

            stepWorld(world, elapsed, { size: sizeRef.current, calm, drag });

            // With reduced motion there's no idle swimming, so the loop can stop
            if (calm && !drag && isAtRest(world)) {
                settleWorld(world);
                render();
                lastTime = 0;
                return;
            }

            render();

            if (!visible && !drag) {
                lastTime = 0;
                return;
            }
            frame = requestAnimationFrame(tick);
        };

        const wake = () => {
            if (frame !== null || !(visible || drag)) return;
            lastTime = 0;
            frame = requestAnimationFrame(tick);
        };

        const grab = (index, event) => {
            // One blob, one pointer, left button only
            if (drag || (event.pointerType === "mouse" && event.button !== 0)) return;

            const body = world.bodies[index];
            const shell = event.currentTarget;
            const rect = shell.getBoundingClientRect();
            const offset = Math.hypot(body.x, body.y);
            const rawScale = offset > 0 ? untether(offset, sizeRef.current) / offset : 1;

            drag = {
                index,
                pointerId: event.pointerId,
                // Pointer position at which the blob would sit on its spot;
                // it's grabbed where it is now, even mid-flight
                originX: event.clientX - body.x * rawScale,
                originY: event.clientY - body.y * rawScale,
                x: body.x,
                y: body.y,
                leverX: event.clientX - (rect.left + rect.width / 2),
                leverY: event.clientY - (rect.top + rect.height / 2),
                samples: [{ x: body.x, y: body.y, t: event.timeStamp }],
            };

            try {
                shell.setPointerCapture(event.pointerId);
            } catch {
                // Ignore rare pointer-capture edge cases instead of crashing UI.
            }
            setActiveIndex(index);
            wake();
        };

        const release = (event) => {
            if (!drag || event.pointerId !== drag.pointerId) return;

            // The blob carries on at the speed it was thrown with
            const velocity = releaseVelocity(drag.samples, event.timeStamp, sizeRef.current);
            if (velocity) {
                const body = world.bodies[drag.index];
                [body.vx, body.vy] = velocity;
            }

            drag = null;
            setActiveIndex(null);
            wake();
        };

        const move = (event) => {
            if (!drag || event.pointerId !== drag.pointerId) return;

            // The button was let go somewhere pointerup never reached us
            if (event.pointerType === "mouse" && event.buttons === 0) {
                release(event);
                return;
            }

            const rawX = event.clientX - drag.originX;
            const rawY = event.clientY - drag.originY;
            const raw = Math.hypot(rawX, rawY);
            const scale = raw > 0 ? tether(raw, sizeRef.current) / raw : 1;

            drag.x = rawX * scale;
            drag.y = rawY * scale;
            drag.samples.push({ x: drag.x, y: drag.y, t: event.timeStamp });
            if (drag.samples.length > 16) drag.samples.shift();
        };

        const handleMotionChange = () => {
            calm = motionQuery.matches;
            wake();
        };

        // Nothing to animate while the header is scrolled away
        const observer =
            "IntersectionObserver" in window
                ? new IntersectionObserver(([entry]) => {
                      visible = entry.isIntersecting;
                      wake();
                  })
                : null;

        observer?.observe(container);
        motionQuery?.addEventListener?.("change", handleMotionChange);
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", release);
        window.addEventListener("pointercancel", release);
        engineRef.current = { grab };
        wake();

        return () => {
            observer?.disconnect();
            motionQuery?.removeEventListener?.("change", handleMotionChange);
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", release);
            window.removeEventListener("pointercancel", release);
            if (frame !== null) cancelAnimationFrame(frame);
            engineRef.current = null;
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`${styles.container} ${activeIndex !== null ? styles.active : ""}`}
            style={{ width: size, height: size }}
            aria-hidden="true"
        >
            <div className={styles.orbitalGlow} />
            <div className={styles.innerFrame}>
                {CRYSTALS.map((crystal, index) => (
                    <div
                        key={crystal.className}
                        ref={(element) => {
                            shellRefs.current[index] = element;
                        }}
                        className={`${styles.crystalShell} ${
                            activeIndex === index ? styles.shellDragging : ""
                        }`}
                        style={SHELL_STYLES[index]}
                        onPointerDown={(event) => engineRef.current?.grab(index, event)}
                    >
                        <div
                            className={`${styles.floorGlow} ${styles[`${crystal.className}Glow`]}`}
                        />
                        <div
                            className={`${styles.crystalGlow} ${styles[`${crystal.className}Glow`]}`}
                        />
                        <div
                            className={`${styles.crystal} ${styles[crystal.className]}`}
                        >
                            <div className={styles.crystalMotion}>
                                <div className={styles.crystalCore} />
                                <div className={styles.crystalEdge} />
                                <div className={styles.crystalHighlight} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlassCrystals;
