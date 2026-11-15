import { describe, expect, test } from "vitest";
import { ScrollingBitmap, ScrollingBitmapArgs } from "./scrolling_bitmap";

const image = { width: 100, height: 50 } as unknown as HTMLImageElement;

function makeBitmap(direction: ScrollingBitmapArgs.Direction, step = 30) {
    return new ScrollingBitmap({ image, direction, step });
}

function position(bitmap: ScrollingBitmap) {
    return (bitmap as unknown as { _ref_position: number })._ref_position;
}

function scroll(bitmap: ScrollingBitmap, times: number) {
    const positions: number[] = [];
    const scrollOnce = (bitmap as unknown as { _scroll: () => void })._scroll;

    for (let a = 0; a < times; a++) {
        scrollOnce.call(bitmap);
        positions.push(position(bitmap));
    }

    return positions;
}

describe("ScrollingBitmap", function () {
    test("scrolling past the end continues from the other end (keeping the remainder)", function () {
        const { left, right, top, bottom } = ScrollingBitmapArgs.Direction;

        // the image is 100 wide and 50 tall
        expect(scroll(makeBitmap(left), 4)).toEqual([30, 60, 90, 20]);
        expect(scroll(makeBitmap(right), 4)).toEqual([70, 40, 10, 80]);
        expect(scroll(makeBitmap(top), 3)).toEqual([30, 10, 40]);
        expect(scroll(makeBitmap(bottom), 3)).toEqual([20, 40, 10]);
    });

    test("scrolls at the set interval, keeping the time past it", function () {
        const bitmap = new ScrollingBitmap({
            image,
            direction: ScrollingBitmapArgs.Direction.left,
            step: 1,
            interval: 0.25,
        });

        expect(bitmap._has_logic).toBe(true);

        bitmap.logic(0.375);
        expect(position(bitmap)).toBe(1);

        // 0.125 left over + 0.125
        bitmap.logic(0.125);
        expect(position(bitmap)).toBe(2);

        bitmap.clearInterval();
        expect(bitmap._has_logic).toBe(false);
    });

    test("setDirection() and setStep() change the scrolling", function () {
        const bitmap = makeBitmap(ScrollingBitmapArgs.Direction.left, 10);

        expect(scroll(bitmap, 1)).toEqual([10]);

        bitmap.setDirection(ScrollingBitmapArgs.Direction.right);
        bitmap.setStep(5);

        expect(scroll(bitmap, 2)).toEqual([5, 0]);
    });

    test("clone() keeps the scrolling settings and position", function () {
        const bitmap = new ScrollingBitmap({
            image,
            direction: ScrollingBitmapArgs.Direction.bottom,
            step: 7,
            interval: 0.5,
            category: 2,
        });
        scroll(bitmap, 1);

        const clone = bitmap.clone();

        expect(position(clone)).toBe(position(bitmap));
        expect(clone.category).toBe(2);
        expect(scroll(clone, 1)).toEqual(scroll(bitmap, 1));
    });
});
