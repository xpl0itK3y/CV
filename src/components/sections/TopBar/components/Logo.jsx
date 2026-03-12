import React from "react";
import styles from "../styles/TopBar.module.css";

const Logo = ({ text, isMobile }) => {
  return (
    <div className={isMobile ? styles.logoMobile : styles.logoDesktop}>
      <span className={styles.logoText}>{text}</span>
    </div>
  );
};

export default Logo;
