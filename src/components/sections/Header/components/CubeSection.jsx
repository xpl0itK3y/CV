import React from "react";
import RubiksCube from "./RubiksCube/RubiksCube";
import styles from "../styles/Header.module.css";

const CubeSection = ({ isMobile }) => {
    return (
        <div className={styles.cubeWrapper}>
            <RubiksCube size={isMobile ? 60 : 80} />
        </div>
    );
};

export default CubeSection;
