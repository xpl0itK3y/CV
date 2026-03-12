import React from "react";
import GlassBlock from "../../GlassBlock/GlassBlock";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { useSkillsState } from "./hooks/useSkillsState";
import SkillGroup from "./components/SkillGroup";
import SoftSkills from "./components/SoftSkills";
import Languages from "./components/Languages";
import styles from "./styles/Skills.module.css";

const Skills = ({
  skillsTitle,
  softSkillsTitle,
  workPracticesTitle,
  languagesTitle,
  skills,
  showAllLabel = "Show all",
  hideLabel = "Hide",
}) => {
  const isMobile = useIsMobile();
  const {
    showAll,
    setShowAll,
    hoveredSkill,
    setHoveredSkill,
    INITIAL_VISIBLE_GROUPS,
  } = useSkillsState();

  const hasHiddenSkills =
    skills.technical && skills.technical.length > INITIAL_VISIBLE_GROUPS;

  return (
    <GlassBlock delay={0.4}>
      <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
        {skillsTitle}
      </h2>

      {/* Технические навыки */}
      <div
        className={styles.technicalSkillsContainer}
        style={{
          marginBottom: hasHiddenSkills ? "1rem" : "2.5rem",
          WebkitMaskImage:
            hasHiddenSkills && !showAll
              ? "linear-gradient(to bottom, black 0%, black calc(100% - 80px), transparent 100%)"
              : "none",
          maskImage:
            hasHiddenSkills && !showAll
              ? "linear-gradient(to bottom, black 0%, black calc(100% - 80px), transparent 100%)"
              : "none",
        }}
      >
        <div style={{ position: "relative" }}>
          {skills.technical &&
            skills.technical
              .slice(0, INITIAL_VISIBLE_GROUPS)
              .map((group, groupIndex) => (
                <SkillGroup
                  key={groupIndex}
                  group={group}
                  groupIndex={groupIndex}
                  isLast={groupIndex === skills.technical.length - 1}
                  isMobile={isMobile}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                  styles={styles}
                />
              ))}
        </div>

        {/* Скрытая часть */}
        {hasHiddenSkills && (
          <div
            className={styles.expandableContent}
            style={{
              maxHeight: showAll ? "4000px" : "0px",
              opacity: showAll ? 1 : 0,
            }}
          >
            {skills.technical
              .slice(INITIAL_VISIBLE_GROUPS)
              .map((group, idx) => {
                const groupIndex = idx + INITIAL_VISIBLE_GROUPS;
                const isLast = groupIndex === skills.technical.length - 1;
                return (
                  <SkillGroup
                    key={groupIndex}
                    group={group}
                    groupIndex={groupIndex}
                    isLast={isLast}
                    isMobile={isMobile}
                    hoveredSkill={hoveredSkill}
                    setHoveredSkill={setHoveredSkill}
                    styles={styles}
                  />
                );
              })}
          </div>
        )}
      </div>

      {/* Кнопка показать все */}
      {hasHiddenSkills && (
        <button
          onClick={() => setShowAll(!showAll)}
          className={styles.expandButton}
        >
          {showAll ? hideLabel : showAllLabel}
          <span
            className={styles.arrow}
            style={{ transform: showAll ? "rotate(180deg)" : "rotate(0)" }}
          >
            ↓
          </span>
        </button>
      )}

      {/* Soft Skills */}
      <SoftSkills
        title={softSkillsTitle}
        skills={skills.soft}
        isMobile={isMobile}
        styles={styles}
      />

      <SoftSkills
        title={workPracticesTitle}
        skills={skills.workPractices}
        isMobile={isMobile}
        styles={styles}
      />

      {/* Languages */}
      <Languages
        title={languagesTitle}
        languages={skills.languages}
        isMobile={isMobile}
        styles={styles}
      />
    </GlassBlock>
  );
};

export default Skills;
