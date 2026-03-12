export const multiplyMatrices = (a, b) => {
    const result = new Array(16).fill(0);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                result[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
            }
        }
    }
    return result;
};

export const getRotationMatrix = (axis, degrees) => {
    const rad = (degrees * Math.PI) / 180;
    const c = Math.cos(rad);
    const s = Math.sin(rad);

    const m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

    if (axis === "x") {
        m[5] = c;
        m[6] = -s;
        m[9] = s;
        m[10] = c;
    } else if (axis === "y") {
        m[0] = c;
        m[2] = s;
        m[8] = -s;
        m[10] = c;
    } else if (axis === "z") {
        m[0] = c;
        m[1] = -s;
        m[4] = s;
        m[5] = c;
    }
    return m;
};

export const matrixToCss = (m) => {
    return `matrix3d(
        ${m[0]}, ${m[4]}, ${m[8]}, ${m[12]},
        ${m[1]}, ${m[5]}, ${m[9]}, ${m[13]},
        ${m[2]}, ${m[6]}, ${m[10]}, ${m[14]},
        ${m[3]}, ${m[7]}, ${m[11]}, ${m[15]}
    )`;
};

export const rotatePoint = (x, y, z, axis, angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    const c = Math.cos(rad);
    const s = Math.sin(rad);

    let nx = x,
        ny = y,
        nz = z;

    if (axis === "z") {
        nx = x * c - y * s;
        ny = x * s + y * c;
    } else if (axis === "y") {
        nx = x * c + z * s;
        nz = -x * s + z * c;
    } else if (axis === "x") {
        ny = y * c - z * s;
        nz = y * s + z * c;
    }
    return { x: nx, y: ny, z: nz };
};
