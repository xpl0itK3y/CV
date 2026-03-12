import React from "react";
import SkillIcon from "./SkillIcon";

const SkillGroup = ({
  group,
  groupIndex,
  isLast,
  isMobile,
  hoveredSkill,
  setHoveredSkill,
  styles,
}) => {
  return (
    <div
      className={styles.skillGroup}
      style={{
        paddingBottom: isLast ? "0" : "2rem",
      }}
    >
      <div
        className={styles.timeline}
        style={{
          bottom: isLast ? "auto" : "0",
          height: isLast ? "100%" : "auto",
        }}
      />
      <div className={styles.timelineDot} />

      <h3 className={isMobile ? styles.categoryMobile : styles.categoryDesktop}>
        {group.category}
      </h3>

      <div
        className={isMobile ? styles.iconGridMobile : styles.iconGridDesktop}
      >
        {group.items.map((skill, index) => {
          const key = `${groupIndex}-${index}`;
          return (
            <SkillIcon
              key={key}
              skill={skill}
              skillKey={key}
              isMobile={isMobile}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
              styles={styles}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillGroup;
