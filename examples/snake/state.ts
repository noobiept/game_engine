export var Direction = {
    left: 0,
    right: 1,
    up: 2,
    down: 3,
};

var GRID = null;
var GAME_OVER = function () {};

export function setGrid(grid) {
    GRID = grid;
}

export function getGrid() {
    return GRID;
}

export function setGameOver(callback) {
    GAME_OVER = callback;
}

export function gameOver() {
    GAME_OVER();
}
