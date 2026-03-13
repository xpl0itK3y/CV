import React from "react";
import GlassBlock from "../../GlassBlock/GlassBlock";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { useExperienceState } from "./hooks/useExperienceState";
import ExperienceItem from "./components/ExperienceItem";
import styles from "./styles/Experience.module.css";

const Experience = ({
  title,
  experience,
  totalExperience,
  readMoreLabel = "Read more",
  readLessLabel = "Show less",
  stackTitle = "Technologies",
  showAllTechLabel = "Show all",
  hideTechLabel = "Hide",
}) => {
  const isMobile = useIsMobile();
  const { expandedJobs, expandedTech, toggleExpand, toggleTechExpand } =
    useExperienceState();

  return (
    <GlassBlock delay={0.3} accent={title ? "top" : "bottom"}>
      {title && (
        <div className={isMobile ? styles.headerMobile : styles.headerDesktop}>
          <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
            {title}
          </h2>
          {totalExperience && (
            <div
              className={isMobile ? styles.badgeMobile : styles.badgeDesktop}
            >
              {totalExperience}
            </div>
          )}
        </div>
      )}

      {experience.map((job, index) => (
        <ExperienceItem
          key={index}
          job={job}
          index={index}
          isMobile={isMobile}
          isExpanded={expandedJobs[index]}
          isTechExpanded={expandedTech[index]}
          onToggleExpand={toggleExpand}
          onToggleTechExpand={toggleTechExpand}
          readMoreLabel={readMoreLabel}
          readLessLabel={readLessLabel}
          stackTitle={stackTitle}
          showAllTechLabel={showAllTechLabel}
          hideTechLabel={hideTechLabel}
          styles={styles}
        />
      ))}
    </GlassBlock>
  );
};

export default Experience;
