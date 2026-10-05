import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/LanguageSwitcher.module.css";
// Bundled (and inlined by Vite) so the bar needs no request to a flag CDN
import ruFlag from "../../../../assets/flags/ru.svg";
import usFlag from "../../../../assets/flags/us.svg";

// Matches the 150ms dropdownHide animation plus a frame of slack
const CLOSE_ANIMATION_MS = 160;

const LanguageSwitcher = ({ currentLang, onLanguageChange, onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef(null);

  const languages = [
    {
      code: "ru",
      label: "Русский",
      flag: ruFlag,
    },
    {
      code: "en",
      label: "English",
      flag: usFlag,
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLang);
  const isDropdownVisible = isOpen || isClosing;

  const closeDropdown = useCallback(() => {
    if (!isOpen) return;
    onMenuToggle?.();
    setIsClosing(true);
    setIsOpen(false);

    window.setTimeout(() => {
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);
  }, [isOpen, onMenuToggle]);

  // Close on a tap outside or Escape. A position: fixed overlay can't do this here:
  // the top bar's transform and backdrop-filter trap fixed children inside the bar.
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) closeDropdown();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeDropdown();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeDropdown]);

  return (
    <div className={styles.container} ref={containerRef}>
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
              style={{ animationDelay: isClosing ? "0ms" : `${20 + index * 30}ms` }}
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
      )}
    </div>
  );
};

export default LanguageSwitcher;
