import React from "react";
import GlassCrystals from "./GlassCrystals/GlassCrystals";
import styles from "../styles/Header.module.css";

const CubeSection = ({ isMobile }) => {
    return (
        <div className={styles.cubeWrapper}>
            <GlassCrystals size={isMobile ? 118 : 176} />
        </div>
    );
};

export default CubeSection;
