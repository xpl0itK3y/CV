import React, { useState, useEffect, useRef } from "react";
import { useTilt } from "../../hooks/useTilt";
import styles from "./styles/GlassBlock.module.css";

/**
 * Стеклянный блок в стиле Google AI
 */
const GlassBlock = ({
    children,
    highlight = false,
    accent = "bottom",
    hoverVariant = "default",
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isHovered, setIsHovered] = useState(false);
    const areaRef = useRef(null);
    const blockRef = useRef(null);
    const sheenRef = useRef(null);
    useTilt(areaRef, blockRef, sheenRef);

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
        } else if (isHovered) {
            classNames += ` ${styles.hovered}`;
        } else {
            classNames += ` ${styles.default}`;
        }

        return classNames;
    };

    return (
        // The outer box only catches the hover: it never moves, while the
        // glass inside it tilts after the cursor
        <div
            ref={areaRef}
            // Hover only for a real mouse: touch taps must not leave a sticky hover state
            onPointerEnter={(e) => e.pointerType === "mouse" && setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
        >
            <div ref={blockRef} className={getBlockStyles()}>
                <div
                    className={`${styles.aiGradient} ${highlight || isHovered
                        ? styles.aiGradientVisible
                        : styles.aiGradientHidden
                        }`}
                />
                <div
                    className={`${styles.ambientGlow} ${highlight || isHovered
                        ? styles.ambientGlowVisible
                        : styles.ambientGlowHidden
                        }`}
                />
                <div ref={sheenRef} className={styles.sheen} />

                {/* Контент */}
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default GlassBlock;
