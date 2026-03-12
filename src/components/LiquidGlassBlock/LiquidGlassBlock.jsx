import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles/LiquidGlassBlock.module.css";

/**
 * "Жидкий" стеклянный блок с эффектами при движении мыши
 */
const LiquidGlassBlock = ({ children, delay = 0 }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);
    const blockRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    // Оптимизированный обработчик движения мыши
    const handleMouseMove = useCallback((e) => {
        if (isMobile || !blockRef.current) return;

        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            const rect = blockRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            setMousePosition({ x, y });
        });
    }, [isMobile]);

    const handleMouseEnter = useCallback(() => {
        if (!isMobile) {
            setIsHovered(true);
        }
    }, [isMobile]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setMousePosition({ x: 50, y: 50 });
    }, []);

    const containerClasses = [
        styles.liquidGlassBlock,
        isMobile ? styles.mobile : styles.desktop,
        (isHovered && !isMobile) ? styles.hovered : ''
    ].join(' ');

    return (
        <div
            ref={blockRef}
            className={containerClasses}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                animation: `slideIn 0.6s ease-out ${delay}s both`,
            }}
        >
            {!isMobile && (
                <>
                    {/* Жидкое стеклянное свечение */}
                    <div
                        className={styles.liquidHighlight}
                        style={{
                            background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, 
                                rgba(255, 255, 255, ${isHovered ? '0.15' : '0'}), 
                                transparent 50%)`,
                        }}
                    />

                    {/* Цветное жидкое отражение */}
                    <div
                        className={styles.liquidReflection}
                        style={{
                            background: `radial-gradient(circle 250px at ${mousePosition.x}% ${mousePosition.y}%, 
                                rgba(102, 126, 234, ${isHovered ? '0.2' : '0'}), 
                                rgba(118, 75, 162, ${isHovered ? '0.15' : '0'}) 40%,
                                transparent 60%)`,
                        }}
                    />

                    {/* Граница с эффектом жидкости */}
                    <div
                        className={styles.liquidBorder}
                        style={{
                            background: `linear-gradient(135deg at ${mousePosition.x}% ${mousePosition.y}%, 
                                rgba(255, 255, 255, ${isHovered ? '0.4' : '0.2'}), 
                                rgba(255, 255, 255, 0.1))`,
                        }}
                    />
                </>
            )}

            {/* Контент */}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default LiquidGlassBlock;
