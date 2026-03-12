import React, { useState } from "react";
import styles from "../styles/LanguageSwitcher.module.css";

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: "ru",
      label: "Русский",
      flag: "https://flagcdn.com/ru.svg",
    },
    {
      code: "en",
      label: "English",
      flag: "https://flagcdn.com/us.svg",
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.triggerButton} ${isOpen ? styles.open : ""}`}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.code}
          className={styles.flagIcon}
        />
        <span>{currentLanguage.code.toUpperCase()}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className={`${styles.arrowIcon} ${isOpen ? styles.open : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />

          <div className={styles.dropdown}>
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`${styles.optionButton} ${currentLang === lang.code ? styles.active : ""
                  }`}
              >
                <img
                  src={lang.flag}
                  alt={lang.code}
                  className={styles.optionFlag}
                />
                <span>{lang.label}</span>
                {currentLang === lang.code && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
