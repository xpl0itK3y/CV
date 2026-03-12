import React, { memo } from "react";
import { COLORS } from "./constants";
import { matrixToCss } from "./utils";
import styles from "../../styles/RubiksCube.module.css";

const Cubie = ({
    id,
    displayX,
    displayY,
    displayZ,
    displayMatrix,
    cubieSize,
    gap,
}) => {
    const getFaces = (id) => {
        const [ox, oy, oz] = id.split(",").map(Number);
        return {
            U: oy === -1,
            D: oy === 1,
            L: ox === -1,
            R: ox === 1,
            F: oz === 1,
            B: oz === -1,
        };
    };

    const faces = getFaces(id);

    return (
        <div
            className={styles.cubie}
            style={{
                width: cubieSize,
                height: cubieSize,
                marginTop: -cubieSize / 2,
                marginLeft: -cubieSize / 2,
                transform: `
            translate3d(
                ${displayX * (cubieSize + gap)}px, 
                ${displayY * (cubieSize + gap)}px, 
                ${displayZ * (cubieSize + gap)}px
            )
            ${matrixToCss(displayMatrix)}
        `,
            }}
        >
            {Object.entries(faces).map(([face, isActive]) => {
                if (!isActive) return null;
                const offset = cubieSize / 2;
                const transforms = {
                    U: `rotateX(90deg) translateZ(${offset}px)`,
                    D: `rotateX(-90deg) translateZ(${offset}px)`,
                    F: `translateZ(${offset}px)`,
                    B: `rotateY(180deg) translateZ(${offset}px)`,
                    L: `rotateY(-90deg) translateZ(${offset}px)`,
                    R: `rotateY(90deg) translateZ(${offset}px)`,
                };
                return (
                    <div
                        key={face}
                        className={styles.face}
                        style={{
                            backgroundColor: COLORS[face],
                            transform: transforms[face],
                        }}
                    />
                );
            })}
        </div>
    );
};

export default memo(Cubie);
