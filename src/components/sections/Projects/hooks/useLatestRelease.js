import { useEffect, useState } from "react";
import { fetchLatestRelease } from "../helpers/latestRelease";

// The newest release tag of `repo`, or `fallback` until GitHub answers
export const useLatestRelease = (repo, fallback) => {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    if (!repo) return;
    let active = true;
    fetchLatestRelease(repo).then((tag) => {
      if (active && tag) setLatest(tag);
    });
    return () => {
      active = false;
    };
  }, [repo]);

  return latest ?? fallback;
};
