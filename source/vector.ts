/**
 * A 2d vector (`{ x, y }`), and helper functions to operate on them.
 *
 * Basic Usage:
 *
 *     const a = { x: 1, y: 2 };
 *     const b = { x: 3, y: 4 };
 *
 *     const sum = Game.Vector.add( a, b ); // { x: 4, y: 6 }
 *     const length = Game.Vector.magnitude( a );
 */
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

/**
 * A vector with the same direction and a length of 1. The zero vector (which has no direction) stays `{ x: 0, y: 0 }`.
 */
export function normalize(vector: Vector) {
    const x = vector.x;
    const y = vector.y;
    const length = Math.sqrt(x * x + y * y);

    if (length === 0) {
        return { x: 0, y: 0 };
    }

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

    // can't project onto the zero vector
    if (twoLengthSquared === 0) {
        return { x: 0, y: 0 };
    }

    return {
        x: (dotProd / twoLengthSquared) * twoX,
        y: (dotProd / twoLengthSquared) * twoY,
    };
}
