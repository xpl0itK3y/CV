import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;
const RESIZE_DEBOUNCE = 150;

export const useIsMobile = (breakpoint = MOBILE_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= breakpoint);
      }, RESIZE_DEBOUNCE);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
};
