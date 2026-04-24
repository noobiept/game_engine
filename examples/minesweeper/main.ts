import { Game, runOnLoad } from "../shared";
import { Square } from "./square";

interface MainState {
    init: () => void;
    start: () => void;
    clear: () => void;
    restart: () => void;
    minesAround: (column: number, line: number) => number;
    selectDifficulty: (difficulty: string) => void;
}

const Main: MainState = {
    init: function () {},
    start: function () {},
    clear: function () {},
    restart: function () {},
    minesAround: function () {
        return 0;
    },
    selectDifficulty: function () {},
};

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    // disable the context menu (when right-clicking)
    Game.getCanvas().getHtmlCanvasElement().oncontextmenu = function (_event) {
        return false;
    };

    const manifest = [
        { id: "one", path: "one.png" },
        { id: "two", path: "two.png" },
        { id: "three", path: "three.png" },
        { id: "four", path: "four.png" },
        { id: "five", path: "five.png" },
        { id: "six", path: "six.png" },
        { id: "seven", path: "seven.png" },
        { id: "eight", path: "eight.png" },
        { id: "hidden", path: "hidden.png" },
        { id: "hidden_mouse_over", path: "hidden_mouse_over.png" },
        { id: "blank", path: "blank.png" },
        { id: "mine", path: "mine.png" },
        { id: "mine_flag", path: "mine_flag.png" },
        { id: "question_mark", path: "question_mark.png" },
    ];

    const preload = new Game.Preload({ saveGlobal: true });

    const canvasContainer = Game.getCanvasContainer();
    const loadingMessage = new Game.Message({
        body: "Loading..",
        container: canvasContainer,
    });

    preload.addEventListener("progress", function (progress) {
        loadingMessage.setBody("Loading.. " + progress + "%");
    });
    preload.addEventListener("complete", function () {
        loadingMessage.clear();

        // start the game
        Main.init();
        Main.start();
    });
    preload.loadManifest(manifest, "../assets/images/");
});

(function () {
    const DIFFICULTY = {
        beginner: {
            columns: 9,
            lines: 9,
            mines: 10,
        },
        intermediate: {
            columns: 16,
            lines: 16,
            mines: 40,
        },
        advanced: {
            columns: 30,
            lines: 16,
            mines: 99,
        },
    };

    let GRID;
    let CURRENT_DIFFICULTY = "beginner";
    let NUMBER_OF_COLUMNS = DIFFICULTY[CURRENT_DIFFICULTY].columns;
    let NUMBER_OF_LINES = DIFFICULTY[CURRENT_DIFFICULTY].lines;
    let NUMBER_OF_MINES = DIFFICULTY[CURRENT_DIFFICULTY].mines;
    let TIMER;
    let SELECTED_SQUARE = null;
    let HAS_ENDED = false;
    let END_MESSAGE = null;
    const MAX_SCORES_SAVED = 5;

    Main.init = function () {
        // add the game menu
        const menu = new Game.Html.HtmlContainer();
        document.body.appendChild(menu.container);

        // restart button
        const restart = new Game.Html.Button({
            value: "Restart",
            callback: Main.restart,
        });
        menu.addChild(restart);

        // show highscores
        const highscore = new Game.Html.Button({
            value: "Highscore",
            callback: showHighScores,
        });
        menu.addChild(highscore);

        // difficulty selection
        const difficulty = new Game.Html.MultipleOptions({
            options: ["beginner", "intermediate", "advanced"],
            callback: function (button, position, htmlElement) {
                Main.selectDifficulty(htmlElement.innerHTML);
            },
        });
        menu.addChild(difficulty);

        // timer
        const timer = new Game.Html.Value({
            value: 0,
        });
        menu.addChild(timer);

        TIMER = new Game.Utilities.Timer({
            updateElement: {
                element: timer.element,
            },
        });

        // init highscore
        Game.HighScore.init(MAX_SCORES_SAVED, "minesweeper_high_score", true);

        // setup keyboard shortcuts
        document.body.addEventListener("keyup", function (event) {
            if (event.key === " ") {
                Main.restart();
            }
        });
    };

    Main.start = function () {
        const canvas = Game.getCanvas();

        canvas.updateDimensions(
            NUMBER_OF_COLUMNS * Square.SIZE,
            NUMBER_OF_LINES * Square.SIZE,
        );

        GRID = new Game.ElementGrid({
            squareSize: Square.SIZE,
            columns: NUMBER_OF_COLUMNS,
            lines: NUMBER_OF_LINES,
        });
        HAS_ENDED = false;

        TIMER.start();

        const emptyPositions = GRID.getEmptyPositions();
        const minesPositions = Game.Utilities.getSeveralRandomInts(
            0,
            emptyPositions.length - 1,
            NUMBER_OF_MINES,
        );
        let square;
        let column, line;

        // add all the squares
        for (column = 0; column < NUMBER_OF_COLUMNS; column++) {
            for (line = 0; line < NUMBER_OF_LINES; line++) {
                square = new Square();

                Game.addElement(square);

                GRID.add(square, column, line);
            }
        }

        // add the mines
        for (let a = minesPositions.length - 1; a >= 0; a--) {
            const index = minesPositions[a];
            const position = emptyPositions[index];

            square = GRID.get(position.column, position.line);
            square.value = Square.VALUE.mine;
        }

        // add the remaining values
        for (column = 0; column < NUMBER_OF_COLUMNS; column++) {
            for (line = 0; line < NUMBER_OF_LINES; line++) {
                square = GRID.get(column, line);

                if (square.value !== Square.VALUE.mine) {
                    const minesAround = Main.minesAround(column, line);

                    square.value = minesAround;
                }
            }
        }

        document.body.addEventListener("mousemove", mouseMove);
        document.body.addEventListener("mouseup", mouseClick);
    };

    Main.clear = function () {
        for (let column = 0; column < GRID.columns; column++) {
            for (let line = 0; line < GRID.lines; line++) {
                const square = GRID.get(column, line);

                if (square) {
                    square.remove();
                }
            }
        }

        GRID.clear();
        GRID = null;

        SELECTED_SQUARE = null;

        TIMER.reset();

        if (END_MESSAGE) {
            END_MESSAGE.clear();
            END_MESSAGE = null;
        }

        document.body.removeEventListener("mousemove", mouseMove);
        document.body.removeEventListener("mouseup", mouseClick);
    };

    Main.restart = function () {
        Main.clear();
        Main.start();
    };

    Main.minesAround = function (column, line) {
        const neighbors = GRID.getNeighbors(column, line);
        let count = 0;

        for (let a = neighbors.length - 1; a >= 0; a--) {
            if (neighbors[a].value === Square.VALUE.mine) {
                count++;
            }
        }

        return count;
    };

    Main.selectDifficulty = function (difficulty) {
        const stats = DIFFICULTY[difficulty];

        if (!stats) {
            throw new Error("Wrong difficulty value.");
        }

        Main.clear();

        CURRENT_DIFFICULTY = difficulty;
        NUMBER_OF_COLUMNS = stats.columns;
        NUMBER_OF_LINES = stats.lines;
        NUMBER_OF_MINES = stats.mines;

        Main.start();
    };

    function mouseMove(event) {
        const canvasRect = Game.getCanvas()
            .getHtmlCanvasElement()
            .getBoundingClientRect();

        const x = event.clientX - canvasRect.left;
        const y = event.clientY - canvasRect.top;

        const position = GRID.toGrid(x, y);

        let square;

        try {
            square = GRID.get(position.column, position.line);
        } catch {
            return;
        }

        if (!square || square.state === Square.STATE.revealed) {
            if (
                SELECTED_SQUARE &&
                SELECTED_SQUARE.state !== Square.STATE.revealed
            ) {
                SELECTED_SQUARE.setMouseOver(false);
                SELECTED_SQUARE = null;
            }
        } else {
            if (SELECTED_SQUARE !== square) {
                if (
                    SELECTED_SQUARE &&
                    SELECTED_SQUARE.state !== Square.STATE.revealed
                ) {
                    SELECTED_SQUARE.setMouseOver(false);
                }

                square.setMouseOver(true);

                SELECTED_SQUARE = square;
            }
        }
    }

    function mouseClick(event) {
        const button = event.button;
        const canvasRect = Game.getCanvas()
            .getHtmlCanvasElement()
            .getBoundingClientRect();

        const x = event.clientX - canvasRect.left;
        const y = event.clientY - canvasRect.top;

        const position = GRID.toGrid(x, y);

        let square;

        try {
            square = GRID.get(position.column, position.line);
        } catch {
            return;
        }

        if (HAS_ENDED || !square || square.state === Square.STATE.revealed) {
            return;
        }

        if (button === Game.Utilities.MouseButton.left) {
            revealSquare(square);
        } else if (button === Game.Utilities.MouseButton.right) {
            if (square.state === Square.STATE.hidden) {
                square.setState(Square.STATE.question_mark);
            } else if (square.state === Square.STATE.question_mark) {
                square.setState(Square.STATE.mine_flag);
            } else {
                square.setState(Square.STATE.hidden);
            }

            // the .setState() sets the background to hidden, but when we click we have the mouse over
            square.setMouseOver(true);
        }
    }

    function revealSquare(square) {
        if (square.state === Square.STATE.revealed) {
            return;
        }

        square.setState(Square.STATE.revealed);

        if (square.value === Square.VALUE.mine) {
            gameOver(false);
            return;
        }

        // need to reveal all the blank values around it
        if (square.value === Square.VALUE.blank) {
            revealAdjacents(square);
        }

        // check if the game is won (when the un-revealed squares are all mines)
        let gameWon = true;

        for (let column = 0; column < GRID.columns; column++) {
            for (let line = 0; line < GRID.lines; line++) {
                const element = GRID.get(column, line);

                if (
                    element.state !== Square.STATE.revealed &&
                    element.value !== Square.VALUE.mine
                ) {
                    gameWon = false;
                    break;
                }
            }
        }

        if (gameWon) {
            gameOver(true);
        }
    }

    function revealAdjacents(square) {
        const adjacents = GRID.getNeighbors(
            square.grid_data.column,
            square.grid_data.line,
        );

        for (let a = adjacents.length - 1; a >= 0; a--) {
            const adjacent = adjacents[a];

            if (adjacent.state !== Square.STATE.revealed) {
                adjacent.setState(Square.STATE.revealed);

                // recursively reveal the adjacents of blank squares
                if (adjacent.value === Square.VALUE.blank) {
                    revealAdjacents(adjacent);
                }
            }
        }
    }

    function revealAllMines() {
        for (let column = 0; column < GRID.columns; column++) {
            for (let line = 0; line < GRID.lines; line++) {
                const square = GRID.get(column, line);

                if (square.value === Square.VALUE.mine) {
                    square.setState(Square.STATE.revealed);
                }
            }
        }
    }

    function showHighScores() {
        const canvasContainer = Game.getCanvasContainer();

        const difficulties = ["beginner", "intermediate", "advanced"];
        const length = difficulties.length;

        const table = document.createElement("table");
        let tr, td;

        for (let a = 0; a < length; a++) {
            const difficultyName = difficulties[a];
            let scores = Game.HighScore.get(difficultyName);
            tr = document.createElement("tr");

            td = document.createElement("td");
            td.innerHTML = difficultyName;

            tr.appendChild(td);

            if (!scores) {
                scores = [];
            }

            for (let b = 0; b < MAX_SCORES_SAVED; b++) {
                td = document.createElement("td");

                const scoreValue = scores[b];

                if (typeof scoreValue !== "undefined") {
                    td.innerHTML = scoreValue + "s";
                } else {
                    td.innerHTML = "-";
                }

                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        const close = new Game.Html.Button({
            value: "Close",
            callback: function (_button) {
                highScore.clear();
            },
        });

        const highScore = new Game.Message({
            body: table,
            container: canvasContainer,
            background: true,
            buttons: close,
        });
    }

    function gameOver(hasWon) {
        HAS_ENDED = true;
        TIMER.stop();
        revealAllMines();

        let text;

        if (hasWon) {
            text = "You Won! " + TIMER.getTimeString() + "!";

            Game.HighScore.add(CURRENT_DIFFICULTY, TIMER.getTimeSeconds());
        } else {
            text = "Game Over! You Lost!";
        }

        const canvasContainer = Game.getCanvasContainer();

        const restart = new Game.Html.Button({
            value: "Restart",
            callback: Main.restart,
        });
        END_MESSAGE = new Game.Message({
            body: text,
            container: canvasContainer,
            background: true,
            buttons: restart,
        });
    }
})();
