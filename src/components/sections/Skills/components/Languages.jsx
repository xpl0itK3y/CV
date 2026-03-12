import React from "react";

const Languages = ({ title, languages, isMobile, styles }) => {
  if (!languages) return null;

  const baseTagClassName = isMobile
    ? styles.skillTagMobile
    : styles.skillTagDesktop;
  const languageLayoutClassName = isMobile
    ? styles.languageLayoutMobile
    : styles.languageLayoutDesktop;

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
            className={`${baseTagClassName} ${languageLayoutClassName}`}
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
