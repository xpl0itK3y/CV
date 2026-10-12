import React from "react";
import { GithubIcon } from "../../Contacts/helpers/contactIcons";
import {
  classifySentences,
  previewEnd,
  renderDescription,
  splitIntoSentences,
  withProjectLinks,
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
  sourceCodeLabel,
  styles,
}) => {
  const sentences = withProjectLinks(
    classifySentences(splitIntoSentences(job.description)),
    job.projectLinks,
  );
  const shown = previewEnd(sentences, MAX_SENTENCES);
  const isLong = shown < sentences.length;

  const renderContent = (sentence) => {
    if (sentence.kind === "project") return sentence.text;
    if (sentence.kind === "link") {
      return (
        <a
          href={sentence.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.repoLink}
          // Four links read the same, so each names its project
          aria-label={`${sourceCodeLabel}: ${sentence.name}`}
          title={sentence.url.replace(/^https:\/\//, "")}
        >
          <GithubIcon />
          <span>{sourceCodeLabel}</span>
          <span className={styles.repoArrow} aria-hidden="true">
            ↗
          </span>
        </a>
      );
    }
    return renderDescription(sentence.text, styles);
  };

  const renderSentence = (sentence, sentenceIndex) => (
    <div
      key={sentenceIndex}
      className={[
        styles.sentence,
        sentence.kind === "project" && styles.projectName,
        sentence.kind === "point" && styles.point,
        sentence.kind === "link" && styles.repoRow,
        sentence.inProject && styles.inProject,
        sentence.last && styles.projectEnd,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {renderContent(sentence)}
    </div>
  );

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
        {job.employment && (
          <span className={styles.employment}>{job.employment}</span>
        )}
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
            .slice(0, shown)
            .map(renderSentence)}
        </div>

        {isLong && (
          <div
            className={`${styles.expandableContent} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            <div className={styles.expandableInner}>
              {sentences.slice(shown).map(renderSentence)}
            </div>
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
