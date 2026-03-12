import GlassBlock from "../GlassBlock/GlassBlock";
import { useIsMobile } from "../../hooks/useIsMobile";
import styles from "./styles/Education.module.css";

const Education = ({ title, education }) => {
  const isMobile = useIsMobile();

  return (
    <GlassBlock delay={0.6}>
      <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
        {title}
      </h2>
      {education.map((edu, index) => (
        <div key={index} className={styles.educationItem}>
          <h3 className={isMobile ? styles.degreeMobile : styles.degreeDesktop}>
            {edu.degree}
          </h3>
          <div
            className={isMobile ? styles.detailsMobile : styles.detailsDesktop}
          >
            {edu.institution} • {edu.period}
          </div>
        </div>
      ))}
    </GlassBlock>
  );
};

export default Education;
