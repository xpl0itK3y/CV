import { useState, useEffect } from "react";

export const useTopBarVisibility = (isMobile) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY;
          const headerHeight = isMobile ? 220 : 300;
          const scrollThreshold = 5;

          if (currentScrollY <= headerHeight) {
            setIsVisible(true);
          } else if (
            scrollDifference > scrollThreshold &&
            currentScrollY > headerHeight
          ) {
            setIsVisible(false);
          } else if (
            scrollDifference < -scrollThreshold &&
            currentScrollY <= headerHeight
          ) {
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  return isVisible;
};
