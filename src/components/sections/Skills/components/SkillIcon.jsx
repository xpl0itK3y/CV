import React from "react";
import { getSkillIcon, getSkillColor } from "../helpers/skillsHelpers";

const SkillIcon = ({
  skill,
  skillKey,
  isMobile,
  hoveredSkill,
  setHoveredSkill,
  styles,
}) => {
  return (
    <div
      title={skill.name}
      className={styles.skillIconContainer}
      onMouseEnter={() => setHoveredSkill(skillKey)}
      onMouseLeave={() => setHoveredSkill(null)}
      style={{
        width: isMobile ? "48px" : "56px",
        height: isMobile ? "48px" : "56px",
      }}
    >
      {getSkillIcon(skill.name) ? (
        <img
          src={getSkillIcon(skill.name)}
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

      {hoveredSkill === skillKey && (
        <>
          {[...Array(16)].map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const dist = 40 + Math.random() * 35;
            const size = 3 + Math.random() * 5;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;
            return (
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
                  animationDelay: `${Math.random() * 0.15}s`,
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default SkillIcon;
