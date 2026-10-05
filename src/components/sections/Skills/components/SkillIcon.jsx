import React, { useState } from "react";
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

const SkillIcon = ({ skill, isMobile, styles }) => {
  // Hover state lives here so entering an icon re-renders just this icon
  const [particles, setParticles] = useState(null);
  const iconSrc = getSkillIcon(skill.name);

  return (
    <div
      title={skill.name}
      className={styles.skillIconContainer}
      onMouseEnter={() => setParticles(createParticles())}
      onMouseLeave={() => setParticles(null)}
      style={{
        width: isMobile ? "48px" : "56px",
        height: isMobile ? "48px" : "56px",
      }}
    >
      {iconSrc ? (
        <img
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
        <span style={{ fontSize: "36px" }}>💻</span>
      )}

      {particles?.map(({ tx, ty, size, delay }, i) => (
        <div
          key={i}
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
