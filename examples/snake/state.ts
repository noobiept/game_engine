import { Game } from "../shared";

export const Direction = {
    left: 0,
    right: 1,
    up: 2,
    down: 3,
} as const;

let GRID: Game.ElementGrid | null = null;
let GAME_OVER: () => void = function () {};

export function setGrid(grid: Game.ElementGrid | null) {
    GRID = grid;
}

export function getGrid() {
    if (GRID === null) {
        throw new Error("Snake grid not initialized.");
    }

    return GRID;
}

export function setGameOver(callback: () => void) {
    GAME_OVER = callback;
}

export function gameOver() {
    GAME_OVER();
}
