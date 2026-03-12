import React from "react";

const SoftSkills = ({ title, skills, isMobile, styles }) => {
  if (!skills) return null;

  return (
    <>
      <h3
        className={
          isMobile ? styles.sectionTitleMobile : styles.sectionTitleDesktop
        }
      >
        {title}
      </h3>
      <div className={styles.skillTags}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className={
              isMobile ? styles.skillTagMobile : styles.skillTagDesktop
            }
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default SoftSkills;
