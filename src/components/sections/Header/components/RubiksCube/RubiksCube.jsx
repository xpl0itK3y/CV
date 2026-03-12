import React, { useState, useEffect, useRef } from "react";
import {
    multiplyMatrices,
    getRotationMatrix,
    rotatePoint,
} from "./utils";
import { IDENTITY_MATRIX } from "./constants";
import Cubie from "./Cubie";
import styles from "../../styles/RubiksCube.module.css";

const RubiksCube = ({ size = 60, speed = 150 }) => {
    // 150ms for snappy 100 moves
    // State
    const [cubies, setCubies] = useState([]);

    // Interaction + Animation State
    const [rotation, setRotation] = useState({ x: -20, y: -30 });
    const isDragging = useRef(false);
    const lastMouse = useRef({ x: 0, y: 0 });
    const autoRotateRef = useRef(null);

    const [activeRotation, setActiveRotation] = useState(null);

    const cubiesRef = useRef([]);
    const moveQueue = useRef([]);
    const history = useRef([]);
    const isSolving = useRef(false);
    const animationFrameRef = useRef(null);

    // Initial Setup
    useEffect(() => {
        const init = [];
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    init.push({
                        id: `${x},${y},${z}`,
                        x,
                        y,
                        z,
                        matrix: IDENTITY_MATRIX,
                    });
                }
            }
        }
        cubiesRef.current = init;
        setCubies(init);

        // Start Internal Logic Loop
        processNextMove();

        // Start Auto-Rotate Loop
        const loopAutoRotate = () => {
            if (!isDragging.current) {
                setRotation((prev) => ({
                    x: prev.x,
                    y: prev.y + 0.2,
                }));
            }
            autoRotateRef.current = requestAnimationFrame(loopAutoRotate);
        };
        autoRotateRef.current = requestAnimationFrame(loopAutoRotate);

        return () => {
            if (animationFrameRef.current)
                cancelAnimationFrame(animationFrameRef.current);
            if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);
            // Cleanup global listeners if unmounted while dragging
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            window.removeEventListener("mouseup", handleGlobalMouseUp);
            window.removeEventListener("touchmove", handleGlobalTouchMove);
            window.removeEventListener("touchend", handleGlobalMouseUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // --- Global Event Handlers for Dragging ---
    const handleGlobalMouseMove = (e) => {
        if (!isDragging.current) return;

        const deltaX = e.clientX - lastMouse.current.x;
        const deltaY = e.clientY - lastMouse.current.y;

        setRotation((prev) => ({
            x: prev.x - deltaY * 0.3,
            y: prev.y + deltaX * 0.3,
        }));

        lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleGlobalTouchMove = (e) => {
        if (!isDragging.current) return;

        const deltaX = e.touches[0].clientX - lastMouse.current.x;
        const deltaY = e.touches[0].clientY - lastMouse.current.y;

        setRotation((prev) => ({
            x: prev.x - deltaY * 0.3,
            y: prev.y + deltaX * 0.3,
        }));

        lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleGlobalMouseUp = () => {
        isDragging.current = false;
        // Cleanup global listeners
        window.removeEventListener("mousemove", handleGlobalMouseMove);
        window.removeEventListener("mouseup", handleGlobalMouseUp);
        window.removeEventListener("touchmove", handleGlobalTouchMove);
        window.removeEventListener("touchend", handleGlobalMouseUp);
    };

    // --- Local "Start" Handlers ---
    const handleMouseDown = (e) => {
        isDragging.current = true;
        lastMouse.current = { x: e.clientX, y: e.clientY };

        // Attach global listeners
        window.addEventListener("mousemove", handleGlobalMouseMove);
        window.addEventListener("mouseup", handleGlobalMouseUp);
    };

    const handleTouchStart = (e) => {
        isDragging.current = true;
        lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

        // Attach global listeners
        window.addEventListener("touchmove", handleGlobalTouchMove, {
            passive: false,
        });
        window.addEventListener("touchend", handleGlobalMouseUp);
    };

    const processNextMove = () => {
        if (activeRotation) return;

        if (moveQueue.current.length === 0) {
            if (isSolving.current) {
                if (history.current.length === 0) {
                    isSolving.current = false;
                    generateScrambleMoves(100);
                }
            } else {
                if (history.current.length >= 100) {
                    isSolving.current = true;
                    // Reverse history
                    const solveMoves = [...history.current].reverse().map((m) => ({
                        ...m,
                        dir: -m.dir,
                    }));
                    moveQueue.current = [...solveMoves];
                    history.current = [];
                } else {
                    if (!isSolving.current) {
                        generateScrambleMoves(1);
                    }
                }
            }
        }

        const next = moveQueue.current[0];
        if (!next) return;

        if (next.delay) {
            moveQueue.current.shift();
            setTimeout(processNextMove, next.delay);
            return;
        }

        moveQueue.current.shift();
        startAnimation(next);

        if (!isSolving.current) {
            history.current.push(next);
        }
    };

    const generateScrambleMoves = (count) => {
        const axes = ["x", "y", "z"];
        for (let i = 0; i < count; i++) {
            const axis = axes[Math.floor(Math.random() * 3)];
            const layer = Math.floor(Math.random() * 3) - 1;
            const dir = Math.random() > 0.5 ? 90 : -90;
            moveQueue.current.push({ axis, layer, dir });
        }
    };

    const startAnimation = (move) => {
        const startTime = performance.now();
        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / speed, 1);

            const eased = progress;

            setActiveRotation({ ...move, progress: eased });

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                finishMove(move);
                setActiveRotation(null);
                requestAnimationFrame(processNextMove);
            }
        };
        animationFrameRef.current = requestAnimationFrame(animate);
    };

    const finishMove = (move) => {
        const { axis, layer, dir } = move;
        const rotM = getRotationMatrix(axis, dir);

        const newCubies = cubiesRef.current.map((c) => {
            if (c[axis] !== layer) return c;

            let { x, y, z } = c;
            let nx = x,
                ny = y,
                nz = z;

            const rad = (dir * Math.PI) / 180;
            const sin = Math.round(Math.sin(rad));
            const cos = Math.round(Math.cos(rad));

            if (axis === "z") {
                nx = x * cos - y * sin;
                ny = x * sin + y * cos;
            } else if (axis === "y") {
                nx = x * cos + z * sin;
                nz = -x * sin + z * cos;
            } else if (axis === "x") {
                ny = y * cos - z * sin;
                nz = y * sin + z * cos;
            }

            const newMatrix = multiplyMatrices(rotM, c.matrix);

            return {
                ...c,
                x: nx,
                y: ny,
                z: nz,
                matrix: newMatrix,
            };
        });

        cubiesRef.current = newCubies;
        setCubies(newCubies);
    };

    // --- Render Logic ---

    const cubieSize = size / 3;
    const gap = 1;

    return (
        <div
            className={styles.rubiksCubeContainer}
            style={{
                width: size,
                height: size,
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <div
                className={styles.cube}
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
            >
                {cubiesRef.current.map((c) => {
                    let displayX = c.x;
                    let displayY = c.y;
                    let displayZ = c.z;
                    let displayMatrix = c.matrix;

                    if (
                        activeRotation &&
                        activeRotation.axis &&
                        c[activeRotation.axis] === activeRotation.layer
                    ) {
                        const angle = activeRotation.dir * activeRotation.progress;

                        const p = rotatePoint(c.x, c.y, c.z, activeRotation.axis, angle);
                        displayX = p.x;
                        displayY = p.y;
                        displayZ = p.z;

                        const transM = getRotationMatrix(activeRotation.axis, angle);
                        displayMatrix = multiplyMatrices(transM, c.matrix);
                    }

                    return (
                        <Cubie
                            key={c.id}
                            id={c.id}
                            displayX={displayX}
                            displayY={displayY}
                            displayZ={displayZ}
                            displayMatrix={displayMatrix}
                            cubieSize={cubieSize}
                            gap={gap}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RubiksCube;
