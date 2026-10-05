import { useEffect } from "react";

// Compact blocks tilt up to this angle...
const MAX_TILT_DEG = 3;
// ...but an edge never comes off the page by more than this, so tall blocks
// barely swing and their text stays put while it's being read
const MAX_EDGE_SHIFT = 12;
const PERSPECTIVE = 900;
const HOVER_LIFT = 3;
// Time constant of the follow: the block trails the cursor a little, like a
// critically damped spring, instead of snapping to it
const SMOOTHING_MS = 110;
const SETTLE_EPSILON = 0.002;

const maxTiltFor = (length) =>
  Math.min(MAX_TILT_DEG, (Math.atan(MAX_EDGE_SHIFT / (length / 2)) * 180) / Math.PI);

const clamp = (value) => Math.max(-1, Math.min(1, value));

// Tilts `blockRef` towards the mouse over `areaRef` and slides the `sheenRef`
// highlight after it. The area is never transformed itself, so its hit box
// stays still and the hover can't flicker on the tilted edges.
export const useTilt = (areaRef, blockRef, sheenRef) => {
  useEffect(() => {
    const area = areaRef.current;
    const block = blockRef.current;
    const sheen = sheenRef.current;
    if (!area || !block || !sheen) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // x/y: pointer position in -1..1, lift: 0..1, sx/sy: sheen position in px
    const target = { x: 0, y: 0, lift: 0, sx: 0, sy: 0 };
    const current = { ...target };
    let maxTiltX = 0;
    let maxTiltY = 0;
    let frame = 0;
    let lastTime = 0;

    const tick = (now) => {
      const dt = lastTime ? now - lastTime : 16;
      lastTime = now;
      const follow = 1 - Math.exp(-dt / SMOOTHING_MS);

      let settled = true;
      for (const key in target) {
        current[key] += (target[key] - current[key]) * follow;
        const scale = key === "sx" || key === "sy" ? 100 : 1;
        if (Math.abs(target[key] - current[key]) > SETTLE_EPSILON * scale) {
          settled = false;
        }
      }

      if (settled && target.lift === 0) {
        // Back at rest: drop the transform so the text renders crisp again
        block.style.transform = "";
        sheen.style.opacity = "0";
        frame = 0;
        lastTime = 0;
        return;
      }

      block.style.transform =
        `perspective(${PERSPECTIVE}px) ` +
        `translate3d(0, ${(-HOVER_LIFT * current.lift).toFixed(2)}px, 0) ` +
        `rotateX(${(-current.y * maxTiltX).toFixed(3)}deg) ` +
        `rotateY(${(current.x * maxTiltY).toFixed(3)}deg)`;
      sheen.style.opacity = current.lift.toFixed(3);
      sheen.style.transform = `translate3d(${current.sx.toFixed(1)}px, ${current.sy.toFixed(1)}px, 0)`;

      frame = settled ? 0 : requestAnimationFrame(tick);
      if (!frame) lastTime = 0;
    };

    const run = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const handleMove = (event) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches) return;

      // Re-measured on every move: the block grows when a job is expanded
      const rect = area.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      maxTiltX = maxTiltFor(rect.height);
      maxTiltY = maxTiltFor(rect.width);

      target.x = clamp((px / rect.width) * 2 - 1);
      target.y = clamp((py / rect.height) * 2 - 1);
      target.lift = 1;
      target.sx = px;
      target.sy = py;

      // The sheen appears where the cursor came in instead of sliding there
      if (current.lift < 0.01) {
        current.sx = px;
        current.sy = py;
      }
      run();
    };

    const handleLeave = () => {
      target.x = 0;
      target.y = 0;
      target.lift = 0;
      run();
    };

    area.addEventListener("pointerenter", handleMove);
    area.addEventListener("pointermove", handleMove);
    area.addEventListener("pointerleave", handleLeave);
    return () => {
      area.removeEventListener("pointerenter", handleMove);
      area.removeEventListener("pointermove", handleMove);
      area.removeEventListener("pointerleave", handleLeave);
      cancelAnimationFrame(frame);
      block.style.transform = "";
    };
  }, [areaRef, blockRef, sheenRef]);
};
