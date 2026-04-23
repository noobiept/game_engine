export interface GridPosition {
    column: number;
    line: number;
}

export var SQUARE_SIZE = 25;

var GET_NEXT_POSITION: (column: number, line: number) => GridPosition =
    function () {
        throw new Error("Tower defense state not initialized.");
    };
var ADD_MONEY: (amount: number) => void = function () {
    throw new Error("Tower defense state not initialized.");
};
var ADD_LIFE: (amount: number) => void = function () {
    throw new Error("Tower defense state not initialized.");
};
var GAME_OVER: () => void = function () {
    throw new Error("Tower defense state not initialized.");
};

export function setTowerDefenseState(state: {
    getNextPosition: (column: number, line: number) => GridPosition;
    addMoney: (amount: number) => void;
    addLife: (amount: number) => void;
    gameOver: () => void;
}) {
    GET_NEXT_POSITION = state.getNextPosition;
    ADD_MONEY = state.addMoney;
    ADD_LIFE = state.addLife;
    GAME_OVER = state.gameOver;
}

export function getNextPosition(column: number, line: number) {
    return GET_NEXT_POSITION(column, line);
}

export function addMoney(amount: number) {
    ADD_MONEY(amount);
}

export function addLife(amount: number) {
    ADD_LIFE(amount);
}

export function gameOver() {
    GAME_OVER();
}
