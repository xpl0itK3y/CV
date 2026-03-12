import React from "react";
import {
  renderDescription,
  splitIntoSentences,
} from "../helpers/experienceHelpers";
import TechGroups from "./TechGroups";

const MAX_SENTENCES = 6;

const ExperienceItem = ({
  job,
  index,
  isMobile,
  isExpanded,
  isTechExpanded,
  onToggleExpand,
  onToggleTechExpand,
  readMoreLabel,
  readLessLabel,
  stackTitle,
  showAllTechLabel,
  hideTechLabel,
  styles,
}) => {
  const sentences = splitIntoSentences(job.description);
  const isLong = sentences.length > MAX_SENTENCES;

  const renderTechTag = (tech, techIndex) => (
    <span
      key={techIndex}
      className={isMobile ? styles.techTagMobile : styles.techTagDesktop}
    >
      {tech}
    </span>
  );

  return (
    <div className={styles.jobContainer}>
      <div className={styles.timeline} />
      <div className={styles.timelineDot} />

      <h3 className={isMobile ? styles.positionMobile : styles.positionDesktop}>
        {job.position}
      </h3>

      <div className={isMobile ? styles.metaMobile : styles.metaDesktop}>
        <span className={styles.company}>{job.company}</span>
        <span className={styles.separator}>•</span>
        <span className={styles.period}>{job.period}</span>
      </div>

      <div className={styles.description}>
        <div
          className={styles.descriptionContent}
          style={{
            WebkitMaskImage:
              isLong && !isExpanded
                ? "linear-gradient(to bottom, black 0%, black calc(100% - 80px), transparent 100%)"
                : "none",
            maskImage:
              isLong && !isExpanded
                ? "linear-gradient(to bottom, black 0%, black calc(100% - 80px), transparent 100%)"
                : "none",
          }}
        >
          {sentences
            .slice(0, isLong ? MAX_SENTENCES : sentences.length)
            .map((sentence, sentenceIndex) => (
              <div key={sentenceIndex} className={styles.sentence}>
                {renderDescription(sentence, styles)}
              </div>
            ))}
        </div>

        {isLong && (
          <div
            className={styles.expandableContent}
            style={{
              maxHeight: isExpanded ? "2000px" : "0px",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            {sentences.slice(MAX_SENTENCES).map((sentence, sentenceIndex) => (
              <div key={sentenceIndex} className={styles.sentence}>
                {renderDescription(sentence, styles)}
              </div>
            ))}
          </div>
        )}
      </div>

      {isLong && (
        <button
          onClick={() => onToggleExpand(index)}
          className={styles.expandButton}
        >
          {isExpanded ? readLessLabel : readMoreLabel}
          <span
            className={styles.arrow}
            style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}
          >
            ↓
          </span>
        </button>
      )}

      {(job.techGroups ||
        (job.technologies && job.technologies.length > 0)) && (
          <div className={styles.techSection}>
            <div className={styles.techDot} />
            <div
              className={
                isMobile ? styles.techTitleMobile : styles.techTitleDesktop
              }
            >
              {stackTitle}
            </div>

            <div className={styles.techContainer}>
              {job.techGroups ? (
                <TechGroups
                  techGroups={job.techGroups}
                  isExpanded={isTechExpanded}
                  renderTechTag={renderTechTag}
                  styles={styles}
                />
              ) : (
                <div className={styles.techList}>
                  {job.technologies.map((tech, tIndex) =>
                    renderTechTag(tech, tIndex),
                  )}
                </div>
              )}
            </div>

            {job.techGroups && job.techGroups.length >= 4 && (
              <button
                onClick={() => onToggleTechExpand(index)}
                className={styles.expandButton}
              >
                {isTechExpanded ? hideTechLabel : showAllTechLabel}
                <span
                  className={styles.arrow}
                  style={{
                    transform: isTechExpanded ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  ↓
                </span>
              </button>
            )}
          </div>
        )}
    </div>
  );
};

export default ExperienceItem;
