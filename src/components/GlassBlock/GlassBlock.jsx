import React, { useState, useEffect } from "react";
import styles from "./styles/GlassBlock.module.css";

/**
 * Стеклянный блок в стиле Google AI
 */
const GlassBlock = ({ children, delay = 0, highlight = false }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getBlockStyles = () => {
        let classNames = `${styles.glassBlock} ${isMobile ? styles.mobile : styles.desktop}`;

        if (highlight) {
            classNames += ` ${styles.highlight}`;
        } else if (isHovered && !isMobile) {
            classNames += ` ${styles.hovered}`;
        } else {
            classNames += ` ${styles.default}`;
        }

        return classNames;
    };

    return (
        <div
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={getBlockStyles()}
            style={{
                animation: `slideIn 0.6s ease-out ${delay}s both`,
            }}
        >
            {/* Google AI градиент */}
            {(highlight || (isHovered && !isMobile)) && (
                <div className={styles.aiGradient} />
            )}

            {/* Контент */}
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default GlassBlock;
