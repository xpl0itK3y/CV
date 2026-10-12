import { useSplash } from "../../../../hooks/useSplash";
import styles from "../styles/Projects.module.css";

const DROPS = 12;

const ProjectLogo = ({ src }) => {
  const { iconRef, dropRefs, splash } = useSplash();

  return (
    <span className={styles.logo} onPointerEnter={splash}>
      <span className={styles.splash} aria-hidden="true">
        {Array.from({ length: DROPS }, (_, i) => (
          <span
            key={i}
            ref={(el) => (dropRefs.current[i] = el)}
            className={styles.drop}
          />
        ))}
      </span>
      {/* The name stands next to it, so the icon itself says nothing */}
      <span ref={iconRef} className={styles.logoTile}>
        <img src={src} alt="" decoding="async" />
      </span>
    </span>
  );
};

export default ProjectLogo;
