import { useState, useEffect } from "react";

// The bar is shown only while the header crystals are below it: it slides away
// once they scroll up to its bottom edge and returns when they come back down,
// so it never covers the CV while it's being read.
export const useTopBarVisibility = (barRef) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const anchor = document.querySelector("[data-topbar-anchor]");
    if (!anchor) return;

    let ticking = false;

    const update = () => {
      // offsetHeight ignores the translateY used to hide the bar
      const barBottom = barRef.current?.offsetHeight ?? 0;
      setIsVisible(anchor.getBoundingClientRect().top >= barBottom);
      ticking = false;
    };

    const scheduleUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Also covers a page restored mid-scroll on reload
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [barRef]);

  return isVisible;
};
