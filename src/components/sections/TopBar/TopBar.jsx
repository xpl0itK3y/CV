import React from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { useTopBarVisibility } from "./hooks/useTopBarVisibility";
import DownloadButton from "./components/DownloadButton";
import Logo from "./components/Logo";
import styles from "./styles/TopBar.module.css";

const TopBar = ({ currentLang, onLanguageChange, translations }) => {
  const isMobile = useIsMobile();
  const isVisible = useTopBarVisibility(isMobile);

  return (
    <div
      className={styles.container}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div
        className={isMobile ? styles.glassBoxMobile : styles.glassBoxDesktop}
      >
        <div className={styles.gradientOverlay} />
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
              onLanguageChange={onLanguageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
