import React from "react";
import styles from "./styles/AnimatedSection.module.css";

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <div
      className={styles.animatedSection}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
