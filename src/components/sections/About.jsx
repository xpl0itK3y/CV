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
        <dl className={styles.facts}>
          {facts.map(({ label, value }) => (
            <div
              key={label}
              className={isMobile ? styles.factMobile : styles.factDesktop}
            >
              <dt className={styles.factLabel}>{label}</dt>
              <dd className={styles.factValue}>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </GlassBlock>
  );
};

export default About;
