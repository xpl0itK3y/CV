import React from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import CubeSection from "./components/CubeSection";
import HeaderInfo from "./components/HeaderInfo";
import styles from "./styles/Header.module.css";

const Header = ({ name, title }) => {
    const isMobile = useIsMobile();

    return (
        <div
            className={isMobile ? styles.containerMobile : styles.containerDesktop}
        >
            <CubeSection isMobile={isMobile} />
            <HeaderInfo name={name} title={title} isMobile={isMobile} />
        </div>
    );
};

export default Header;
