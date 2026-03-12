import React from "react";
import LiquidGlassBlock from "../LiquidGlassBlock/LiquidGlassBlock";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ProjectItem from "./components/ProjectItem";
import styles from "./styles/Projects.module.css";

const Projects = ({ title, projects }) => {
    const isMobile = useIsMobile();

    return (
        <GlassBlock delay={0.5}>
            <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
                {title}
            </h2>
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    project={project}
                    isLast={index === projects.length - 1}
                    isMobile={isMobile}
                />
            ))}
        </GlassBlock>
    );
};

export default Projects;
