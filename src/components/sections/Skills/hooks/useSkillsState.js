import { useState } from "react";

const INITIAL_VISIBLE_GROUPS = 3;

export const useSkillsState = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return {
    showAll,
    setShowAll,
    hoveredSkill,
    setHoveredSkill,
    INITIAL_VISIBLE_GROUPS,
  };
};
