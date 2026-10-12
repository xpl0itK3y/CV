import GlassBlock from "../../GlassBlock/GlassBlock";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ProjectItem from "./components/ProjectItem";
import styles from "./styles/Projects.module.css";

const Projects = ({
  title,
  projects,
  stackTitle,
  releaseLabel,
  accent = "bottom",
}) => {
  const isMobile = useIsMobile();

  return (
    <GlassBlock accent={accent}>
      <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
        {title}
      </h2>
      {projects.map((project) => (
        <ProjectItem
          key={project.name}
          project={project}
          stackTitle={stackTitle}
          releaseLabel={releaseLabel}
          isMobile={isMobile}
        />
      ))}
    </GlassBlock>
  );
};

export default Projects;
