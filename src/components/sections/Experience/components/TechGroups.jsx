import React from "react";

const TechGroups = ({ techGroups, isExpanded, renderTechTag, styles }) => {
  if (techGroups.length < 4) {
    return techGroups.map((group, gIndex) => (
      <div key={gIndex} className={styles.techGroup}>
        <div className={styles.techGroupLabel}>{group.label}</div>
        <div className={styles.techList}>
          {group.items.map((tech, tIndex) => renderTechTag(tech, tIndex))}
        </div>
      </div>
    ));
  }

  return (
    <>
      <div
        className={styles.techGroupContent}
        style={{
          WebkitMaskImage: !isExpanded
            ? "linear-gradient(to bottom, black 0%, black calc(100% - 80px), transparent 100%)"
            : "none",
          maskImage: !isExpanded
            ? "linear-gradient(to bottom, black 0%, black calc(100% - 80px), transparent 100%)"
            : "none",
        }}
      >
        {techGroups.slice(0, 1).map((group, gIndex) => (
          <div key={gIndex} className={styles.techGroup}>
            <div className={styles.techGroupLabel}>{group.label}</div>
            <div className={styles.techList}>
              {group.items.map((tech, tIndex) => renderTechTag(tech, tIndex))}
            </div>
          </div>
        ))}
      </div>

      <div
        className={styles.expandableTechContent}
        style={{
          maxHeight: isExpanded ? "2000px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        {techGroups.slice(1).map((group, gIndex) => (
          <div key={gIndex + 1} className={styles.techGroup}>
            <div className={styles.techGroupLabel}>{group.label}</div>
            <div className={styles.techList}>
              {group.items.map((tech, tIndex) => renderTechTag(tech, tIndex))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechGroups;
