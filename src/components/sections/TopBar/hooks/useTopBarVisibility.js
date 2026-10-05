import { useState, useEffect, useRef } from "react";

export const useTopBarVisibility = (isMobile) => {
  const [isVisible, setIsVisible] = useState(true);
  // A ref, not state: the scroll listener shouldn't be re-attached every frame
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY.current;
          const headerHeight = isMobile ? 220 : 300;
          const scrollThreshold = 5;

          if (currentScrollY <= headerHeight) {
            setIsVisible(true);
          } else if (scrollDifference > scrollThreshold) {
            setIsVisible(false);
          } else if (scrollDifference < -scrollThreshold) {
            // Scrolling back up anywhere brings the bar back, like Safari's toolbar
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return isVisible;
};
