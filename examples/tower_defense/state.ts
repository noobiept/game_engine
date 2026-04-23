export var SQUARE_SIZE = 25;

var GET_NEXT_POSITION = function () {
    throw new Error("Tower defense state not initialized.");
};
var ADD_MONEY = function () {
    throw new Error("Tower defense state not initialized.");
};
var ADD_LIFE = function () {
    throw new Error("Tower defense state not initialized.");
};
var GAME_OVER = function () {
    throw new Error("Tower defense state not initialized.");
};

export function setTowerDefenseState(state) {
    GET_NEXT_POSITION = state.getNextPosition;
    ADD_MONEY = state.addMoney;
    ADD_LIFE = state.addLife;
    GAME_OVER = state.gameOver;
}

export function getNextPosition(column, line) {
    return GET_NEXT_POSITION(column, line);
}

export function addMoney(amount) {
    ADD_MONEY(amount);
}

export function addLife(amount) {
    ADD_LIFE(amount);
}

export function gameOver() {
    GAME_OVER();
}
