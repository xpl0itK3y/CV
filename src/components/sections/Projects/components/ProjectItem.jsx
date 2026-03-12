import React from "react";
import styles from "../styles/Projects.module.css";

const ProjectItem = ({ project, isLast, isMobile }) => {
    return (
        <div
            className={styles.projectItem}
            style={{
                marginBottom: !isLast ? "1.5rem" : "0",
                paddingBottom: !isLast ? "1.5rem" : "0",
                borderBottom: !isLast ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
            }}
        >
            <h3 className={isMobile ? styles.nameMobile : styles.nameDesktop}>
                {project.name}
            </h3>
            <div className={isMobile ? styles.techMobile : styles.techDesktop}>
                {project.tech}
            </div>
            <p
                className={
                    isMobile ? styles.descriptionMobile : styles.descriptionDesktop
                }
            >
                {project.description}
            </p>
        </div>
    );
};

export default ProjectItem;
