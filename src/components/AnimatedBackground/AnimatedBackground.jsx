import React, { useState, useEffect } from "react";
import styles from "./styles/AnimatedBackground.module.css";

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.baseBackground} />

      <div
        className={`${styles.gradientBackground} ${isMobile ? styles.gradientMobile : styles.gradientDesktop
          }`}
      />

      {!isMobile && (
        <>
          <div className={`${styles.glow} ${styles.glowGreen}`} />
          <div className={`${styles.glow} ${styles.glowOrange}`} />
          <div className={`${styles.glow} ${styles.glowPurple}`} />
          <div className={`${styles.glow} ${styles.glowBlue}`} />
        </>
      )}

      {!isMobile && <div className={styles.grid} />}

      <div className={styles.vignette} />
    </>
  );
};

export default AnimatedBackground;
