import React, { useState, useEffect } from "react";
import styles from "./styles/GlassBlock.module.css";

/**
 * Стеклянный блок в стиле Google AI
 */
const GlassBlock = ({
    children,
    delay = 0,
    highlight = false,
    accent = "bottom",
    hoverVariant = "default",
}) => {
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

        classNames += accent === "top"
            ? ` ${styles.accentTop}`
            : ` ${styles.accentBottom}`;

        if (hoverVariant === "textual") {
            classNames += ` ${styles.textualHover}`;
        }

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
                animation: `glassReveal 0.95s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
            }}
        >
            <div
                className={`${styles.aiGradient} ${highlight || (isHovered && !isMobile)
                    ? styles.aiGradientVisible
                    : styles.aiGradientHidden
                    }`}
            />
            <div
                className={`${styles.ambientGlow} ${highlight || (isHovered && !isMobile)
                    ? styles.ambientGlowVisible
                    : styles.ambientGlowHidden
                    }`}
            />

            {/* Контент */}
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default GlassBlock;
