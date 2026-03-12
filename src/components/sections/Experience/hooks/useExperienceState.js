import { useState } from "react";

export const useExperienceState = () => {
  const [expandedJobs, setExpandedJobs] = useState({});
  const [expandedTech, setExpandedTech] = useState({});

  const toggleExpand = (index) => {
    setExpandedJobs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleTechExpand = (index) => {
    setExpandedTech((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return {
    expandedJobs,
    expandedTech,
    toggleExpand,
    toggleTechExpand,
  };
};
