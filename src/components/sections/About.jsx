import GlassBlock from "../GlassBlock/GlassBlock";
import { useIsMobile } from "../../hooks/useIsMobile";
import styles from "./styles/About.module.css";

const About = ({ title, about }) => {
  const isMobile = useIsMobile();

  return (
    <GlassBlock delay={0.2} accent="top" hoverVariant="textual">
      <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
        {title}
      </h2>
      <p className={isMobile ? styles.textMobile : styles.textDesktop}>
        {about}
      </p>
    </GlassBlock>
  );
};

export default About;
