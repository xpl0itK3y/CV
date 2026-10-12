import React, { useRef, useState } from "react";
import { getSkillIcon, getSkillColor } from "../helpers/skillsHelpers";

const PARTICLE_COUNT = 16;

// A fresh random splash per hover, built in the event handler so render stays pure
const createParticles = () =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
    const dist = 40 + Math.random() * 35;
    return {
      tx: Math.cos(angle) * dist,
      ty: Math.sin(angle) * dist,
      size: 3 + Math.random() * 5,
      delay: Math.random() * 0.15,
    };
  });

// The icon wiggles side to side and settles, evenly spaced keyframes
const WIGGLE = [-10, -10, 10, -10, 10, -5, 5, -3, 3, 0, 0].map((deg) => ({
  transform: `rotate(${deg}deg)`,
}));

const SkillIcon = ({ skill, isMobile, styles }) => {
  // Hover state lives here so entering an icon re-renders just this icon.
  // The id remounts the particles, so every splash plays from the start
  const [splash, setSplash] = useState(null);
  const iconRef = useRef(null);
  const iconSrc = getSkillIcon(skill.name);

  const play = () => {
    setSplash((previous) => ({
      id: (previous?.id ?? 0) + 1,
      particles: createParticles(),
    }));
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      iconRef.current?.animate(WIGGLE, { duration: 800, easing: "ease-in-out" });
    }
  };

  return (
    <div
      title={skill.name}
      className={styles.skillIconContainer}
      // A mouse plays it on hover; touch has no hover, so a tap plays it
      // instead of a fake hover that sticks until the next tap elsewhere
      onPointerEnter={(event) => event.pointerType === "mouse" && play()}
      onPointerLeave={(event) => event.pointerType === "mouse" && setSplash(null)}
      onPointerDown={(event) => event.pointerType !== "mouse" && play()}
      style={{
        width: isMobile ? "48px" : "56px",
        height: isMobile ? "48px" : "56px",
      }}
    >
      {iconSrc ? (
        <img
          ref={iconRef}
          src={iconSrc}
          alt={skill.name}
          className={styles.skillIcon}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML =
              '<span style="font-size: 36px">💻</span>';
          }}
        />
      ) : (
        <span ref={iconRef} style={{ fontSize: "36px" }}>💻</span>
      )}

      {splash?.particles.map(({ tx, ty, size, delay }, i) => (
        <div
          key={`${splash.id}-${i}`}
          className={styles.splashParticle}
          style={{
            backgroundColor: getSkillColor(skill.name),
            "--tx": `${tx}px`,
            "--ty": `${ty}px`,
            width: `${size}px`,
            height: `${size}px`,
            left: "50%",
            top: "50%",
            margin: `-${size / 2}px 0 0 -${size / 2}px`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SkillIcon;
