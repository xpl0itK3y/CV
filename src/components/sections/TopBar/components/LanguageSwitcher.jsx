import React, { useState } from "react";
import styles from "../styles/LanguageSwitcher.module.css";

const CLOSE_ANIMATION_MS = 320;

const LanguageSwitcher = ({ currentLang, onLanguageChange, onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
  const isDropdownVisible = isOpen || isClosing;

  const closeDropdown = () => {
    if (!isOpen) return;
    onMenuToggle?.();
    setIsClosing(true);
    setIsOpen(false);

    window.setTimeout(() => {
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          if (isOpen) {
            closeDropdown();
            return;
          }

          onMenuToggle?.();
          setIsClosing(false);
          setIsOpen(true);
        }}
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

      {isDropdownVisible && (
        <>
          <div
            className={`${styles.overlay} ${
              isClosing ? styles.overlayClosing : styles.overlayOpening
            }`}
            onClick={closeDropdown}
          />

          <div
            className={`${styles.dropdown} ${
              isClosing ? styles.dropdownClosing : styles.dropdownOpening
            }`}
          >
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => {
                  onMenuToggle?.();
                  onLanguageChange(lang.code);
                  closeDropdown();
                }}
                className={`${styles.optionButton} ${currentLang === lang.code ? styles.active : ""
                  }`}
                style={{ animationDelay: isClosing ? "0ms" : `${60 + index * 60}ms` }}
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
