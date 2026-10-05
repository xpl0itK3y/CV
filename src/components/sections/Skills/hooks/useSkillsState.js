import { useState } from "react";

const INITIAL_VISIBLE_GROUPS = 3;

export const useSkillsState = () => {
  const [showAll, setShowAll] = useState(false);

  return {
    showAll,
    setShowAll,
    INITIAL_VISIBLE_GROUPS,
  };
};
