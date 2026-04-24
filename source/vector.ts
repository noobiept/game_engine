export interface Vector {
    x: number;
    y: number;
}

export function add(one: Vector, two: Vector) {
    return {
        x: one.x + two.x,
        y: one.y + two.y,
    };
}

export function subtract(one: Vector, two: Vector) {
    return {
        x: one.x - two.x,
        y: one.y - two.y,
    };
}

export function magnitude(vector: Vector) {
    const x = vector.x;
    const y = vector.y;

    return Math.sqrt(x * x + y * y);
}

export function multiply(vector: Vector, scalar: number) {
    return {
        x: vector.x * scalar,
        y: vector.y * scalar,
    };
}

export function dotProduct(one: Vector, two: Vector) {
    return one.x * two.x + one.y * two.y;
}

export function rotate(center: Vector, vector: Vector, angle: number) {
    const centerX = center.x;
    const centerY = center.y;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const diffX = vector.x - centerX;
    const diffY = vector.y - centerY;

    return {
        x: centerX + diffX * cos - diffY * sin,
        y: centerY + diffX * sin + diffY * cos,
    };
}

export function normalLeft(vector: Vector) {
    return {
        x: vector.y,
        y: -vector.x,
    };
}

export function normalRight(vector: Vector) {
    return {
        x: -vector.y,
        y: vector.x,
    };
}

export function normalize(vector: Vector) {
    const x = vector.x;
    const y = vector.y;
    const length = Math.sqrt(x * x + y * y);

    return {
        x: x / length,
        y: y / length,
    };
}

export function projection(one: Vector, two: Vector) {
    const dotProd = dotProduct(one, two);
    const twoX = two.x;
    const twoY = two.y;
    const twoLengthSquared = twoX * twoX + twoY * twoY;

    return {
        x: (dotProd / twoLengthSquared) * twoX,
        y: (dotProd / twoLengthSquared) * twoY,
    };
}
