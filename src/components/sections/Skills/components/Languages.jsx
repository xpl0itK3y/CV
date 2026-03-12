import React from "react";

const Languages = ({ title, languages, isMobile, styles }) => {
  if (!languages) return null;

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
        {languages.map((language, index) => (
          <div
            key={index}
            className={
              isMobile ? styles.languageTagMobile : styles.languageTagDesktop
            }
          >
            <div className={styles.languageName}>{language.name}</div>
            <div className={styles.languageLevel}>{language.level}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Languages;
