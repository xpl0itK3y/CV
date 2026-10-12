import React, { useState } from "react";
import { useSplash } from "../../../../hooks/useSplash";
import { getSkillIcon, getSkillColor } from "../helpers/skillsHelpers";

const DROPS = 12;

// Brand colours as dark as Flask's or Vercel's black vanish on the glass:
// their drops take the block's accent instead
const dropColor = (hex) => {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const lightness = (Math.max(...channels) + Math.min(...channels)) / 510;
  return lightness < 0.3 ? "rgb(var(--block-accent-rgb))" : hex;
};

// Knocked like ModelCrew's icon: it rocks on its base and splashes in its
// own colour. Touch fires the enter on tap, so a tap plays it too
const SkillIcon = ({ skill, isMobile, styles }) => {
  const size = isMobile ? 48 : 56;
  const { iconRef, dropRefs, splash } = useSplash(size);
  const [failed, setFailed] = useState(false);
  const iconSrc = getSkillIcon(skill.name);

  return (
    <div
      title={skill.name}
      className={styles.skillIconContainer}
      onPointerEnter={splash}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span
        className={styles.splash}
        style={{ color: dropColor(getSkillColor(skill.name)) }}
        aria-hidden="true"
      >
        {Array.from({ length: DROPS }, (_, i) => (
          <span
            key={i}
            ref={(el) => (dropRefs.current[i] = el)}
            className={styles.drop}
          />
        ))}
      </span>
      <span ref={iconRef} className={styles.skillGlyph}>
        {iconSrc && !failed ? (
          <img
            src={iconSrc}
            alt={skill.name}
            className={styles.skillIcon}
            onError={() => setFailed(true)}
          />
        ) : (
          "💻"
        )}
      </span>
    </div>
  );
};

export default SkillIcon;
