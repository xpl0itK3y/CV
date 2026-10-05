import React from "react";
import SkillIcon from "./SkillIcon";

const SkillGroup = ({
  group,
  groupIndex,
  isLast,
  isMobile,
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
        {group.items.map((skill, index) => (
          <SkillIcon
            key={`${groupIndex}-${index}`}
            skill={skill}
            isMobile={isMobile}
            styles={styles}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
