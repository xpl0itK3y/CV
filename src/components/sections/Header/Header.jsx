import React, { useRef } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { usePauseWhenOffscreen } from "../../../hooks/usePauseWhenOffscreen";
import CubeSection from "./components/CubeSection";
import HeaderInfo from "./components/HeaderInfo";
import styles from "./styles/Header.module.css";

const Header = ({ name, title }) => {
    const isMobile = useIsMobile();
    const containerRef = useRef(null);
    usePauseWhenOffscreen(containerRef);

    return (
        <div
            ref={containerRef}
            className={isMobile ? styles.containerMobile : styles.containerDesktop}
        >
            <CubeSection isMobile={isMobile} />
            <HeaderInfo name={name} title={title} isMobile={isMobile} />
        </div>
    );
};

export default Header;
