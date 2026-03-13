import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../../styles/GlassCrystals.module.css";

const CRYSTALS = [
    {
        className: "crystalPrimary",
        shellClassName: "shellPrimary",
        width: "38%",
        height: "70%",
        left: "8%",
        top: "16%",
        animationDelay: "0s",
    },
    {
        className: "crystalSecondary",
        shellClassName: "shellSecondary",
        width: "29%",
        height: "54%",
        left: "38%",
        top: "6%",
        animationDelay: "-1.1s",
    },
    {
        className: "crystalTertiary",
        shellClassName: "shellTertiary",
        width: "30%",
        height: "58%",
        right: "6%",
        top: "24%",
        animationDelay: "-2.1s",
    },
];

const INITIAL_STATE = CRYSTALS.map(() => ({
    x: 0,
    y: 0,
    rotate: 0,
    jellyScaleX: 1,
    jellyScaleY: 1,
    jellySkewX: 0,
    jellySkewY: 0,
    jellyLeanX: 0,
    jellyLeanY: 0,
}));

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const safeNumber = (value, fallback = 0) =>
    Number.isFinite(value) ? value : fallback;

const BASE_LAYOUT = [
    { x: 0.08, y: 0.16, w: 0.38, h: 0.7 },
    { x: 0.38, y: 0.06, w: 0.29, h: 0.54 },
    { x: 0.64, y: 0.24, w: 0.3, h: 0.58 },
];

const createBodyState = (item, index, velocityX = 0, velocityY = 0) => ({
    index,
    x: safeNumber(item.x),
    y: safeNumber(item.y),
    vx: safeNumber(velocityX),
    vy: safeNumber(velocityY),
});

const GlassCrystals = ({ size = 120 }) => {
    const [crystalStates, setCrystalStates] = useState(INITIAL_STATE);
    const [activeIndex, setActiveIndex] = useState(null);
    const statesRef = useRef(INITIAL_STATE);

    const dragRef = useRef({
        index: null,
        startPointerX: 0,
        startPointerY: 0,
        startOffsetX: 0,
        startOffsetY: 0,
        lastPointerX: 0,
        lastPointerY: 0,
        velocityX: 0,
        velocityY: 0,
    });
    const springFrameRef = useRef(null);

    const applyContactResponse = (draftStates, sourceIndex) => {
        const sourceBase = BASE_LAYOUT[sourceIndex];
        const sourceState = draftStates[sourceIndex];
        if (!sourceBase || !sourceState) return draftStates;
        const sourceCenterX = (sourceBase.x + sourceBase.w / 2) * size + sourceState.x;
        const sourceCenterY = (sourceBase.y + sourceBase.h / 2) * size + sourceState.y;

        return draftStates.map((item, index) => {
            if (index === sourceIndex) return item;
            if (!item) {
                return INITIAL_STATE[index] || INITIAL_STATE[0];
            }

            const targetBase = BASE_LAYOUT[index];
            if (!targetBase) return item;
            const targetCenterX = (targetBase.x + targetBase.w / 2) * size + item.x;
            const targetCenterY = (targetBase.y + targetBase.h / 2) * size + item.y;
            const dx = safeNumber(sourceCenterX - targetCenterX);
            const dy = safeNumber(sourceCenterY - targetCenterY);
            const distance = Math.hypot(dx, dy);
            const threshold =
                ((sourceBase.w + targetBase.w) * size) / 2 + 22;

            if (distance >= threshold) {
                return {
                    ...item,
                    rotate: item.rotate * 0.78,
                    jellyScaleX: 1 + (item.jellyScaleX - 1) * 0.72,
                    jellyScaleY: 1 + (item.jellyScaleY - 1) * 0.72,
                    jellySkewX: item.jellySkewX * 0.72,
                    jellySkewY: item.jellySkewY * 0.72,
                    jellyLeanX: item.jellyLeanX * 0.72,
                    jellyLeanY: item.jellyLeanY * 0.72,
                };
            }

            const proximity = 1 - distance / threshold;
            const normalX = distance === 0 ? 0 : dx / distance;
            const normalY = distance === 0 ? 0 : dy / distance;

            return {
                ...item,
                rotate: clamp(normalX * proximity * 8, -8, 8),
                jellyScaleX: 1 + proximity * 0.16,
                jellyScaleY: 1 - proximity * 0.09,
                jellySkewX: clamp(normalX * proximity * 14, -10, 10),
                jellySkewY: clamp(normalY * proximity * -12, -10, 10),
                jellyLeanX: clamp(normalX * proximity * -16, -16, 16),
                jellyLeanY: clamp(normalY * proximity * -12, -12, 12),
            };
        });
    };

    const applyDragRepulsion = (draftStates, sourceIndex) => {
        const sourceBase = BASE_LAYOUT[sourceIndex];
        const sourceState = draftStates[sourceIndex];
        if (!sourceBase || !sourceState) return draftStates;
        const sourceCenterX = (sourceBase.x + sourceBase.w / 2) * size + sourceState.x;
        const sourceCenterY = (sourceBase.y + sourceBase.h / 2) * size + sourceState.y;

        return draftStates.map((item, index) => {
            if (index === sourceIndex) return item;
            if (!item) {
                return INITIAL_STATE[index] || INITIAL_STATE[0];
            }

            const targetBase = BASE_LAYOUT[index];
            if (!targetBase) return item;
            const baseCenterX = (targetBase.x + targetBase.w / 2) * size;
            const baseCenterY = (targetBase.y + targetBase.h / 2) * size;
            const targetCenterX = baseCenterX + item.x;
            const targetCenterY = baseCenterY + item.y;
            const dx = safeNumber(targetCenterX - sourceCenterX);
            const dy = safeNumber(targetCenterY - sourceCenterY);
            const distance = Math.hypot(dx, dy) || 0.001;
            const threshold = ((sourceBase.w + targetBase.w) * size) / 2 + 34;

            if (distance >= threshold) {
                return {
                    ...item,
                    x: item.x * 0.88,
                    y: item.y * 0.88,
                };
            }

            const proximity = 1 - distance / threshold;
            const normalX = dx / distance;
            const normalY = dy / distance;
            const push = proximity * 26;

            return {
                ...item,
                x: clamp(item.x + normalX * push, -56, 56),
                y: clamp(item.y + normalY * push, -48, 48),
            };
        });
    };

    const stopSpring = () => {
        if (springFrameRef.current) {
            cancelAnimationFrame(springFrameRef.current);
            springFrameRef.current = null;
        }
    };

    const applyBodyPhysics = (bodies) => {
        const nextBodies = bodies.map((body) => ({ ...body }));

        nextBodies.forEach((body) => {
            body.vx += -body.x * 0.05;
            body.vy += -body.y * 0.05;
            body.vx *= 0.88;
            body.vy *= 0.88;
            body.x += body.vx;
            body.y += body.vy;
            body.x = safeNumber(body.x);
            body.y = safeNumber(body.y);
            body.vx = safeNumber(body.vx);
            body.vy = safeNumber(body.vy);
        });

        for (let i = 0; i < nextBodies.length; i += 1) {
            for (let j = i + 1; j < nextBodies.length; j += 1) {
                const firstBase = BASE_LAYOUT[i];
                const secondBase = BASE_LAYOUT[j];

                const firstCenterX =
                    (firstBase.x + firstBase.w / 2) * size + nextBodies[i].x;
                const firstCenterY =
                    (firstBase.y + firstBase.h / 2) * size + nextBodies[i].y;
                const secondCenterX =
                    (secondBase.x + secondBase.w / 2) * size + nextBodies[j].x;
                const secondCenterY =
                    (secondBase.y + secondBase.h / 2) * size + nextBodies[j].y;

                const dx = safeNumber(secondCenterX - firstCenterX);
                const dy = safeNumber(secondCenterY - firstCenterY);
                const distance = Math.hypot(dx, dy) || 0.001;
                const minDistance =
                    ((firstBase.w + secondBase.w) * size) / 2 - 8;

                if (distance >= minDistance) continue;

                const overlap = minDistance - distance;
                const normalX = dx / distance;
                const normalY = dy / distance;
                const push = overlap * 0.5;

                nextBodies[i].x -= normalX * push;
                nextBodies[i].y -= normalY * push;
                nextBodies[j].x += normalX * push;
                nextBodies[j].y += normalY * push;

                nextBodies[i].vx -= normalX * overlap * 0.08;
                nextBodies[i].vy -= normalY * overlap * 0.08;
                nextBodies[j].vx += normalX * overlap * 0.08;
                nextBodies[j].vy += normalY * overlap * 0.08;
            }
        }

        return nextBodies;
    };

    const animateBack = (index, initialVelocityX, initialVelocityY) => {
        stopSpring();

        let bodies = statesRef.current.map((item, itemIndex) =>
            createBodyState(
                item,
                itemIndex,
                itemIndex === index ? initialVelocityX * 0.45 : 0,
                itemIndex === index ? initialVelocityY * 0.45 : 0,
            ),
        );

        const tick = () => {
            bodies = applyBodyPhysics(bodies);

            setCrystalStates((prev) => {
                const safePrev =
                    Array.isArray(prev) && prev.length === CRYSTALS.length
                        ? prev
                        : INITIAL_STATE;
                const next = safePrev.map((item, itemIndex) => {
                    const body = bodies[itemIndex];
                    const jellyScaleX = clamp(
                        1 + Math.abs(body.vx) * 0.016,
                        1,
                        1.18,
                    );
                    const jellyScaleY = clamp(
                        1 + Math.abs(body.vy) * 0.016,
                        1,
                        1.18,
                    );
                    const jellySkewX = clamp(body.vx * 0.24, -14, 14);
                    const jellySkewY = clamp(body.vy * -0.2, -14, 14);
                    const jellyLeanX = clamp(body.vx * -0.34, -24, 24);
                    const jellyLeanY = clamp(body.vy * -0.28, -20, 20);

                    return {
                        ...item,
                        x: body.x,
                        y: body.y,
                        rotate: clamp(body.vx * 0.36, -10, 10),
                        jellyScaleX,
                        jellyScaleY,
                        jellySkewX,
                        jellySkewY,
                        jellyLeanX,
                        jellyLeanY,
                    };
                });
                statesRef.current = next;
                return next;
            });

            const isSettled = bodies.every(
                (body) =>
                    Math.abs(body.x) < 0.6 &&
                    Math.abs(body.y) < 0.6 &&
                    Math.abs(body.vx) < 0.12 &&
                    Math.abs(body.vy) < 0.12,
            );

            if (isSettled) {
                setCrystalStates((prev) => {
                    const next = prev.map(() => ({
                        x: 0,
                        y: 0,
                        rotate: 0,
                        jellyScaleX: 1,
                        jellyScaleY: 1,
                        jellySkewX: 0,
                        jellySkewY: 0,
                        jellyLeanX: 0,
                        jellyLeanY: 0,
                    }));
                    statesRef.current = next;
                    return next;
                });
                springFrameRef.current = null;
                return;
            }

            springFrameRef.current = requestAnimationFrame(tick);
        };

        springFrameRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        const handlePointerMove = (event) => {
            if (dragRef.current.index === null) return;

            const deltaX = event.clientX - dragRef.current.startPointerX;
            const deltaY = event.clientY - dragRef.current.startPointerY;
                const nextX = safeNumber(dragRef.current.startOffsetX + deltaX);
                const nextY = safeNumber(dragRef.current.startOffsetY + deltaY);

            dragRef.current.velocityX = safeNumber(
                event.clientX - dragRef.current.lastPointerX,
            );
            dragRef.current.velocityY = safeNumber(
                event.clientY - dragRef.current.lastPointerY,
            );
            dragRef.current.lastPointerX = event.clientX;
            dragRef.current.lastPointerY = event.clientY;

            const stretchX = clamp(
                1 + Math.abs(dragRef.current.velocityX) * 0.02,
                1,
                1.22,
            );
            const stretchY = clamp(
                1 + Math.abs(dragRef.current.velocityY) * 0.02,
                1,
                1.22,
            );
            const rotate = clamp(dragRef.current.velocityX * 0.4, -10, 10);
            const jellyScaleX = clamp(
                1 + Math.abs(dragRef.current.velocityX) * 0.018,
                1,
                1.2,
            );
            const jellyScaleY = clamp(
                1 + Math.abs(dragRef.current.velocityY) * 0.018,
                1,
                1.2,
            );
            const jellySkewX = clamp(dragRef.current.velocityX * 0.28, -16, 16);
            const jellySkewY = clamp(dragRef.current.velocityY * -0.24, -16, 16);
            const jellyLeanX = clamp(
                dragRef.current.velocityX * -0.42,
                -30,
                30,
            );
            const jellyLeanY = clamp(
                dragRef.current.velocityY * -0.32,
                -24,
                24,
            );

            setCrystalStates((prev) => {
                const safePrev =
                    Array.isArray(prev) && prev.length === CRYSTALS.length
                        ? prev
                        : INITIAL_STATE;
                const next = safePrev.map((item, index) =>
                    index === dragRef.current.index
                        ? {
                              x: nextX,
                              y: nextY,
                              rotate,
                              jellyScaleX: Math.max(jellyScaleX, stretchX),
                              jellyScaleY: Math.max(jellyScaleY, stretchY),
                              jellySkewX,
                              jellySkewY,
                              jellyLeanX,
                              jellyLeanY,
                          }
                        : item,
                );
                const withRepulsion = applyDragRepulsion(next, dragRef.current.index);
                const withContact = applyContactResponse(
                    withRepulsion,
                    dragRef.current.index,
                );
                statesRef.current = withContact;
                return withContact;
            });
        };

        const handlePointerUp = () => {
            if (dragRef.current.index === null) return;

            const releasedIndex = dragRef.current.index;
            const velocityX = dragRef.current.velocityX;
            const velocityY = dragRef.current.velocityY;

            dragRef.current = {
                index: null,
                startPointerX: 0,
                startPointerY: 0,
                startOffsetX: 0,
                startOffsetY: 0,
                lastPointerX: 0,
                lastPointerY: 0,
                velocityX: 0,
                velocityY: 0,
            };

            setActiveIndex(null);
            animateBack(releasedIndex, velocityX, velocityY);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
        window.addEventListener("pointercancel", handlePointerUp);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
            window.removeEventListener("pointercancel", handlePointerUp);
            stopSpring();
        };
    }, []);

    const shellStyles = useMemo(
        () =>
            CRYSTALS.map((crystal, index) => ({
                width: crystal.width,
                height: crystal.height,
                left: crystal.left,
                right: crystal.right,
                top: crystal.top,
                animationDelay: crystal.animationDelay,
                "--drag-x": `${crystalStates[index].x}px`,
                "--drag-y": `${crystalStates[index].y}px`,
                "--drag-rotate": `${crystalStates[index].rotate}deg`,
                "--jelly-scale-x": crystalStates[index].jellyScaleX,
                "--jelly-scale-y": crystalStates[index].jellyScaleY,
                "--jelly-skew-x": `${crystalStates[index].jellySkewX}deg`,
                "--jelly-skew-y": `${crystalStates[index].jellySkewY}deg`,
                "--jelly-lean-x": `${crystalStates[index].jellyLeanX}%`,
                "--jelly-lean-y": `${crystalStates[index].jellyLeanY}%`,
            })),
        [crystalStates],
    );

    const handlePointerDown = (index, event) => {
        stopSpring();

        dragRef.current = {
            index,
            startPointerX: event.clientX,
            startPointerY: event.clientY,
            startOffsetX: statesRef.current[index].x,
            startOffsetY: statesRef.current[index].y,
            lastPointerX: event.clientX,
            lastPointerY: event.clientY,
            velocityX: 0,
            velocityY: 0,
        };

        if (event.currentTarget.setPointerCapture) {
            try {
                event.currentTarget.setPointerCapture(event.pointerId);
            } catch {
                // Ignore rare pointer-capture edge cases instead of crashing UI.
            }
        }
        setActiveIndex(index);
    };

    return (
        <div
            className={`${styles.container} ${activeIndex !== null ? styles.active : ""}`}
            style={{ width: size, height: size }}
            aria-hidden="true"
        >
            <div className={styles.orbitalGlow} />
            <div className={styles.innerFrame}>
                {CRYSTALS.map((crystal, index) => (
                    <div
                        key={index}
                        className={`${styles.crystalShell} ${styles[crystal.shellClassName]} ${
                            activeIndex === index ? styles.shellDragging : ""
                        }`}
                        style={shellStyles[index]}
                        onPointerDown={(event) => handlePointerDown(index, event)}
                    >
                        <div
                            className={`${styles.crystal} ${styles[crystal.className]}`}
                        >
                            <div className={styles.crystalCore} />
                            <div className={styles.crystalEdge} />
                            <div className={styles.crystalHighlight} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlassCrystals;
