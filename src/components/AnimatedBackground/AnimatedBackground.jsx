import styles from "./styles/AnimatedBackground.module.css";

const AnimatedBackground = () => (
  <>
    <div className={styles.baseBackground} />
    <div className={styles.gradientBackground} />
    <div className={styles.vignette} />
  </>
);

export default AnimatedBackground;
