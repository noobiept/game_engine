import { Game, runOnLoad } from "../shared";
import { Block } from "./block";

interface MainState {
    start: () => void;
    clear: () => void;
    restart: () => void;
    addRandomBlock: () => void;
}

const Main: MainState = {
    start: function () {},
    clear: function () {},
    restart: function () {},
    addRandomBlock: function () {},
};

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    Main.start();
});

(function () {
    const SPAWN_VALUES = [2, 4];
    let GRID;

    // duration of the animation
    const MOVE_DURATION = 0.1;
    const REMOVE_DURATION = 0.1;
    const ADD_DURATION = 0.5;

    Main.start = function () {
        const canvas = Game.getCanvas();

        const gridSize = 4; // lines/columns
        const gridLength = Block.size * gridSize;

        GRID = new Game.ElementGrid({
            refX: canvas.getWidth() / 2 - gridLength / 2 + Block.size / 2,
            squareSize: Block.size,
            columns: gridSize,
            lines: gridSize,
            background: { color: "gray", fill: false },
        });

        Main.addRandomBlock();

        document.body.addEventListener("keyup", keyEvents);
    };

    Main.clear = function () {
        document.body.removeEventListener("keyup", keyEvents);

        const columns = GRID.columns;
        const lines = GRID.lines;

        for (let column = 0; column < columns; column++) {
            for (let line = 0; line < lines; line++) {
                const element = GRID.get(column, line);

                if (element) {
                    element.remove();
                }
            }
        }

        GRID.clear();
        GRID = null;
    };

    Main.restart = function () {
        Main.clear();
        Main.start();
    };

    Main.addRandomBlock = function () {
        const position = GRID.getRandomEmptyPosition();

        if (!position) {
            return;
        }

        const valueIndex = Game.Utilities.getRandomInt(
            0,
            SPAWN_VALUES.length - 1,
        );

        const value = SPAWN_VALUES[valueIndex];

        const block = new Block({
            value: value,
        });
        Game.addElement(block);

        const tween = new Game.Tween(block);

        block.opacity = 0;

        tween.to({ opacity: 1 }, ADD_DURATION);
        tween.start();

        GRID.add(block, position.column, position.line);
    };

    function keyEvents(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "a":
                moveLeft();
                break;

            case "ArrowRight":
            case "d":
                moveRight();
                break;

            case "ArrowUp":
            case "w":
                moveUp();
                break;

            case "ArrowDown":
            case "s":
                moveDown();
                break;
        }
    }

    function moveLeft() {
        const columns = GRID.columns;
        const lines = GRID.lines;

        let line, column;
        let block;

        // combine
        for (line = 0; line < lines; line++) {
            let firstBlock = null;

            for (column = columns - 1; column >= 0; column--) {
                block = GRID.get(column, line);

                if (block !== null) {
                    if (firstBlock === null) {
                        firstBlock = block;
                    } else {
                        if (firstBlock.value === block.value) {
                            block.setValue(firstBlock.value * 2);

                            GRID.remove(
                                firstBlock.grid_data.column,
                                firstBlock.grid_data.line,
                            );
                            firstBlock.remove(REMOVE_DURATION);
                            break; // only one combination per line
                        } else {
                            firstBlock = block;
                        }
                    }
                }
            }
        }

        // count and move
        // loop in the opposite direction
        for (line = 0; line < lines; line++) {
            let position = 0;

            for (column = position; column < columns; column++) {
                block = GRID.get(column, line);

                if (block !== null) {
                    GRID.move(
                        block.grid_data.column,
                        block.grid_data.line,
                        position,
                        line,
                        MOVE_DURATION,
                    );

                    position++;
                }
            }
        }

        checkGameState();
    }

    function moveRight() {
        const columns = GRID.columns;
        const lines = GRID.lines;

        let line, column;
        let block;

        // combine
        for (line = 0; line < lines; line++) {
            let firstBlock = null;

            for (column = 0; column < columns; column++) {
                block = GRID.get(column, line);

                if (block !== null) {
                    if (firstBlock === null) {
                        firstBlock = block;
                    } else {
                        if (firstBlock.value === block.value) {
                            block.setValue(firstBlock.value * 2);

                            GRID.remove(
                                firstBlock.grid_data.column,
                                firstBlock.grid_data.line,
                            );
                            firstBlock.remove(REMOVE_DURATION);
                            break; // only one combination per line
                        } else {
                            firstBlock = block;
                        }
                    }
                }
            }
        }

        // count and move
        // loop in the opposite direction
        for (line = 0; line < lines; line++) {
            let position = columns - 1;

            for (column = position; column >= 0; column--) {
                block = GRID.get(column, line);

                if (block !== null) {
                    GRID.move(
                        block.grid_data.column,
                        block.grid_data.line,
                        position,
                        line,
                        MOVE_DURATION,
                    );

                    position--;
                }
            }
        }

        checkGameState();
    }

    function moveUp() {
        const columns = GRID.columns;
        const lines = GRID.lines;

        let line, column;
        let block;

        // combine
        for (column = 0; column < columns; column++) {
            let firstBlock = null;

            for (line = lines - 1; line >= 0; line--) {
                block = GRID.get(column, line);

                if (block !== null) {
                    if (firstBlock === null) {
                        firstBlock = block;
                    } else {
                        if (firstBlock.value === block.value) {
                            block.setValue(firstBlock.value * 2);

                            GRID.remove(
                                firstBlock.grid_data.column,
                                firstBlock.grid_data.line,
                            );
                            firstBlock.remove(REMOVE_DURATION);
                            break; // only one combination per line
                        } else {
                            firstBlock = block;
                        }
                    }
                }
            }
        }

        // count and move
        // loop in the opposite direction
        for (column = 0; column < columns; column++) {
            let position = 0;

            for (line = position; line < lines; line++) {
                block = GRID.get(column, line);

                if (block !== null) {
                    GRID.move(
                        block.grid_data.column,
                        block.grid_data.line,
                        column,
                        position,
                        MOVE_DURATION,
                    );

                    position++;
                }
            }
        }

        checkGameState();
    }

    function moveDown() {
        const columns = GRID.columns;
        const lines = GRID.lines;

        let line, column;
        let block;

        // combine
        for (column = 0; column < columns; column++) {
            let firstBlock = null;

            for (line = 0; line < lines; line++) {
                block = GRID.get(column, line);

                if (block !== null) {
                    if (firstBlock === null) {
                        firstBlock = block;
                    } else {
                        if (firstBlock.value === block.value) {
                            block.setValue(firstBlock.value * 2);

                            GRID.remove(
                                firstBlock.grid_data.column,
                                firstBlock.grid_data.line,
                            );
                            firstBlock.remove(REMOVE_DURATION);
                            break; // only one combination per line
                        } else {
                            firstBlock = block;
                        }
                    }
                }
            }
        }

        // count and move
        // loop in the opposite direction
        for (column = 0; column < columns; column++) {
            let position = lines - 1;

            for (line = position; line >= 0; line--) {
                block = GRID.get(column, line);

                if (block !== null) {
                    GRID.move(
                        block.grid_data.column,
                        block.grid_data.line,
                        column,
                        position,
                        MOVE_DURATION,
                    );

                    position--;
                }
            }
        }

        checkGameState();
    }

    /*
    Check after every move, to see if the game has ended, and if not, add a new block
 */
    function checkGameState() {
        const gameEnded = hasGameEnded();

        // game has ended
        if (gameEnded !== 0) {
            let text = "Game has ended. ";

            if (gameEnded === 1) {
                text += "Victory!";
            } else {
                text += "Defeat!";
            }

            const canvas = Game.getCanvas();

            const message = new Game.Text({
                x: canvas.getWidth() / 2,
                y: canvas.getHeight(),
                text: text,
                textAlign: "center",
                textBaseline: "bottom",
                timeout: 2,
            });
            Game.addElement(message);

            Main.restart();
        }

        // keep going on
        else {
            Main.addRandomBlock();
        }
    }

    /*
    - win:
        - when there's a block with a 2048 value

    - loose:
        - no more empty spaces and no adjacent blocks with the same value

    - returns:
        - 0 if game hasn't ended
        - 1 if ended in victory
        - -1 if ended in a loss
 */
    function hasGameEnded() {
        // check if there's a block value of 2048
        const columns = GRID.columns;
        const lines = GRID.lines;
        let column, line;
        let block;

        for (column = 0; column < columns; column++) {
            for (line = 0; line < lines; line++) {
                block = GRID.get(column, line);

                if (block && block.value >= 2048) {
                    return 1;
                }
            }
        }

        // check if there's an empty space (if there is, means the game hasn't ended)
        if (GRID.getRandomEmptyPosition()) {
            return 0;
        }

        let left, right, up, down;

        // the grid is all filled, need to check if there's adjacent blocks with the same value
        for (column = 0; column < columns; column++) {
            for (line = 0; line < lines; line++) {
                block = GRID.get(column, line);

                // check all positions around this one
                try {
                    left = GRID.get(column - 1, line);
                } catch {
                    left = null;
                }

                try {
                    right = GRID.get(column + 1, line);
                } catch {
                    right = null;
                }

                try {
                    up = GRID.get(column, line - 1);
                } catch {
                    up = null;
                }

                try {
                    down = GRID.get(column, line + 1);
                } catch {
                    down = null;
                }

                if (
                    (left && left.value === block.value) ||
                    (right && right.value === block.value) ||
                    (up && up.value === block.value) ||
                    (down && down.value === block.value)
                ) {
                    return 0;
                }
            }
        }

        return -1;
    }
})();
