import { useEffect } from "react";

// Looping decorative animations keep repainting even when scrolled out of view.
// This marks the element with data-offscreen while it's invisible, which pauses
// every animation inside it (see animations.css); they resume where they left off.
export const usePauseWhenOffscreen = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      element.toggleAttribute("data-offscreen", !entry.isIntersecting);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
};
