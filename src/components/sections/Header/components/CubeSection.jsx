import React from "react";
import GlassCrystals from "./GlassCrystals/GlassCrystals";
import styles from "../styles/Header.module.css";

const CubeSection = ({ isMobile }) => {
    return (
        // The top bar hides once these crystals scroll up to it
        <div className={styles.cubeWrapper} data-topbar-anchor>
            <GlassCrystals size={isMobile ? 118 : 176} />
        </div>
    );
};

export default CubeSection;
