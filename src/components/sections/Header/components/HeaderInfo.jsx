import React from "react";
import styles from "../styles/Header.module.css";

const HeaderInfo = ({ name, title, isMobile }) => {
    return (
        <>
            <h1 className={isMobile ? styles.nameMobile : styles.nameDesktop}>
                {name || "Имя не указано"}
            </h1>

            <p className={isMobile ? styles.titleMobile : styles.titleDesktop}>
                {title || "Должность не указана"}
            </p>

            <div
                className={isMobile ? styles.dividerMobile : styles.dividerDesktop}
            />
        </>
    );
};

export default HeaderInfo;
