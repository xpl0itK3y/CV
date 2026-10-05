import GlassBlock from "../GlassBlock/GlassBlock";
import { useIsMobile } from "../../hooks/useIsMobile";
import styles from "./styles/About.module.css";

const About = ({ title, about, facts }) => {
  const isMobile = useIsMobile();

  return (
    <GlassBlock accent="top" hoverVariant="textual">
      <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
        {title}
      </h2>
      <p className={isMobile ? styles.textMobile : styles.textDesktop}>
        {about}
      </p>

      {facts?.length > 0 && (
        <ul className={styles.facts}>
          {facts.map((fact) => (
            <li
              key={fact}
              className={isMobile ? styles.factMobile : styles.factDesktop}
            >
              {fact}
            </li>
          ))}
        </ul>
      )}
    </GlassBlock>
  );
};

export default About;
