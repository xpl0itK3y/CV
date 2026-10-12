import { useRef } from "react";

const SWING_MS = 900;
const SPLASH_MS = 650;

// The icon size the motion was tuned on; bigger icons splash further
const BASE_SIZE = 36;

// A damped swing on the icon's base, each sway smaller than the last, like a
// toy the cursor knocked. 2.5 sways end exactly at rest
const SWING = Array.from({ length: 41 }, (_, i) => {
  const t = i / 40;
  const angle = 16 * Math.exp(-5 * t) * Math.sin(2 * Math.PI * 2.5 * t);
  const lift = 1 + 0.07 * Math.sin(Math.PI * Math.min(t / 0.3, 1));
  return {
    transform: `rotate(${angle.toFixed(2)}deg) scale(${lift.toFixed(3)})`,
  };
});

// One drop's flight: it bursts out from behind the icon, the air slows it
// and gravity pulls it back down while it shrinks and fades
const flight = (angle, reach, k) =>
  Array.from({ length: 11 }, (_, i) => {
    const t = i / 10;
    const out = 10 * k + reach * ((1 - Math.exp(-3 * t)) / (1 - Math.exp(-3)));
    const x = Math.cos(angle) * out;
    const y = Math.sin(angle) * out + 22 * k * t * t;
    return {
      transform: `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${(1 - 0.6 * t).toFixed(2)})`,
      opacity: t === 0 ? 0 : t < 0.55 ? 1 : (1 - t) / 0.45,
    };
  });

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Knocks an icon: `iconRef` rocks on its base and the `dropRefs` fly out of
// it, fanned upwards. It plays to the end even if the pointer leaves, and a
// second hover mid-swing doesn't restart it with a jump. While it plays the
// icon's parent carries `data-splashing`, so it can be lifted over its
// neighbours
export const useSplash = (size = BASE_SIZE) => {
  const iconRef = useRef(null);
  const dropRefs = useRef([]);
  const playing = useRef(false);

  const splash = () => {
    const icon = iconRef.current;
    if (!icon || playing.current || prefersReducedMotion()) return;
    playing.current = true;
    const host = icon.parentElement;
    host.dataset.splashing = "";

    const swing = icon.animate(SWING, { duration: SWING_MS, easing: "linear" });
    swing.onfinish = swing.oncancel = () => {
      playing.current = false;
      delete host.dataset.splashing;
    };

    // A little different every time
    const k = size / BASE_SIZE;
    const drops = dropRefs.current.filter(Boolean);
    drops.forEach((drop, i) => {
      const spread = (i + 0.5) / drops.length;
      const angle =
        (-165 + 150 * spread + (Math.random() - 0.5) * 16) * (Math.PI / 180);
      drop.animate(flight(angle, (18 + Math.random() * 14) * k, k), {
        duration: SPLASH_MS,
        delay: Math.random() * 40,
        easing: "linear",
      });
    });
  };

  return { iconRef, dropRefs, splash };
};
