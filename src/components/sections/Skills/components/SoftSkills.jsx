import React from "react";

const SoftSkills = ({ title, skills, isMobile, styles, tagClassName }) => {
  if (!skills) return null;

  const defaultTagClassName = isMobile
    ? styles.skillTagMobile
    : styles.skillTagDesktop;

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
            className={tagClassName || defaultTagClassName}
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default SoftSkills;
