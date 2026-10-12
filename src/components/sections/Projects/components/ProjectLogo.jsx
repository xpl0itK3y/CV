import { useRef } from "react";
import styles from "../styles/Projects.module.css";

const DROPS = 12;
const SWING_MS = 900;
const SPLASH_MS = 650;

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
const flight = (angle, reach) =>
  Array.from({ length: 11 }, (_, i) => {
    const t = i / 10;
    const out = 10 + reach * ((1 - Math.exp(-3 * t)) / (1 - Math.exp(-3)));
    const x = Math.cos(angle) * out;
    const y = Math.sin(angle) * out + 22 * t * t;
    return {
      transform: `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${(1 - 0.6 * t).toFixed(2)})`,
      opacity: t === 0 ? 0 : t < 0.55 ? 1 : (1 - t) / 0.45,
    };
  });

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ProjectLogo = ({ src }) => {
  const tileRef = useRef(null);
  const dropRefs = useRef([]);
  const playing = useRef(false);

  // Plays to the end even if the pointer leaves, and a second hover
  // mid-swing doesn't restart it with a jump
  const splash = () => {
    if (playing.current || prefersReducedMotion()) return;
    playing.current = true;

    const swing = tileRef.current.animate(SWING, {
      duration: SWING_MS,
      easing: "linear",
    });
    swing.onfinish = swing.oncancel = () => {
      playing.current = false;
    };

    // Fanned out upwards, a little different every time
    dropRefs.current.forEach((drop, i) => {
      const spread = (i + 0.5) / DROPS;
      const angle =
        (-165 + 150 * spread + (Math.random() - 0.5) * 16) * (Math.PI / 180);
      drop.animate(flight(angle, 18 + Math.random() * 14), {
        duration: SPLASH_MS,
        delay: Math.random() * 40,
        easing: "linear",
      });
    });
  };

  return (
    <span className={styles.logo} onPointerEnter={splash}>
      <span className={styles.splash} aria-hidden="true">
        {Array.from({ length: DROPS }, (_, i) => (
          <span
            key={i}
            ref={(el) => (dropRefs.current[i] = el)}
            className={styles.drop}
          />
        ))}
      </span>
      {/* The name stands next to it, so the icon itself says nothing */}
      <span ref={tileRef} className={styles.logoTile}>
        <img src={src} alt="" decoding="async" />
      </span>
    </span>
  );
};

export default ProjectLogo;
