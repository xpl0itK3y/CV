import React, { useState } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { useTopBarVisibility } from "./hooks/useTopBarVisibility";
import DownloadButton from "./components/DownloadButton";
import Logo from "./components/Logo";
import styles from "./styles/TopBar.module.css";

const TopBar = ({ currentLang, onLanguageChange, translations }) => {
  const isMobile = useIsMobile();
  const isVisible = useTopBarVisibility(isMobile);
  const [isHovered, setIsHovered] = useState(false);

  const handleLanguageChange = (lang) => {
    setIsHovered(false);
    onLanguageChange(lang);
  };

  const handleLanguageMenuToggle = () => {
    setIsHovered(false);
  };

  const glassBoxClassName = [
    isMobile ? styles.glassBoxMobile : styles.glassBoxDesktop,
    isHovered && !isMobile ? styles.hovered : styles.default,
  ].join(" ");

  return (
    <div
      className={styles.container}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div
        className={glassBoxClassName}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`${styles.gradientOverlay} ${
            isHovered && !isMobile ? styles.gradientOverlayVisible : styles.gradientOverlayHidden
          }`}
        />
        <div
          className={`${styles.ambientGlow} ${
            isHovered && !isMobile ? styles.ambientGlowVisible : styles.ambientGlowHidden
          }`}
        />
        <div className={styles.content}>
          <Logo text={translations.portfolio} isMobile={isMobile} />

          <div
            className={isMobile ? styles.actionsMobile : styles.actionsDesktop}
          >
            <DownloadButton
              translations={translations}
              currentLang={currentLang}
              isMobile={isMobile}
            />

            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={handleLanguageChange}
              onMenuToggle={handleLanguageMenuToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
