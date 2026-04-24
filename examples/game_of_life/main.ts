import { Game, runOnLoad } from "../shared";
import { Square } from "./square";

interface MainState {
    firstPhase: () => void;
    secondPhase: () => void;
    clear: () => void;
    restart: () => void;
}

const Main: MainState = {
    firstPhase: function () {},
    secondPhase: function () {},
    clear: function () {},
    restart: function () {},
};

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    // set up the game menu
    const menu = new Game.Html.HtmlContainer({ cssId: "GameMenu" });

    document.body.appendChild(menu.container);

    const start = new Game.Html.TwoState({
        cssId: "Start",
        cssClass: "button",
        value: "Start",
        value2: "Restart",
        callback: function () {
            Main.secondPhase();
        },
        callback2: function () {
            Main.restart();
        },
    });
    menu.addChild(start);

    // start the game on the first phase
    Main.firstPhase();
});

(function () {
    let GRID;

    /*
    Starts the initial phase where you add some squares
 */
    Main.firstPhase = function () {
        const canvas = Game.getCanvas().getHtmlCanvasElement();

        GRID = new Game.ElementGrid({
            squareSize: Square.SIZE,
            columns: Math.floor(canvas.width / Square.SIZE),
            lines: Math.floor(canvas.height / Square.SIZE),
            background: { color: "gray", fill: false },
        });

        canvas.addEventListener("click", clickEvent);
    };

    /*
    Second phase of the game, where based on the initial setup done previously, the game is played out by itself
 */
    Main.secondPhase = function () {
        const canvas = Game.getCanvas().getHtmlCanvasElement();

        canvas.removeEventListener("click", clickEvent);

        Game.addToGameLoop(gameLogic, 0.5);
    };

    function clickEvent(event) {
        const canvas = Game.getCanvas().getHtmlCanvasElement();
        const canvasRect = canvas.getBoundingClientRect();

        const x = event.clientX - canvasRect.left;
        const y = event.clientY - canvasRect.top;

        const gridPosition = GRID.toGrid(x, y);

        const previous = GRID.get(gridPosition.column, gridPosition.line);

        if (previous !== null) {
            removeSquare(previous);
        } else {
            addSquare(gridPosition.column, gridPosition.line);
        }
    }

    function addSquare(column, line) {
        const element = new Square();

        GRID.add(element, column, line);
    }

    function removeSquare(square) {
        GRID.remove(square.grid_data.column, square.grid_data.line);
        Game.removeElement(square);
    }

    function gameLogic() {
        const changes = [];

        for (let column = 0; column < GRID.columns; column++) {
            for (let line = 0; line < GRID.lines; line++) {
                const square = GRID.get(column, line);
                const neighbors = GRID.getNeighbors(column, line);
                const howMany = neighbors.length;

                if (square !== null) {
                    if (howMany <= 1 || howMany >= 4) {
                        changes.push({
                            column: column,
                            line: line,
                            setAlive: false,
                        });
                    }
                } else {
                    if (howMany === 3) {
                        changes.push({
                            column: column,
                            line: line,
                            setAlive: true,
                        });
                    }
                }
            }
        }

        for (let a = 0; a < changes.length; a++) {
            const change = changes[a];

            if (change.setAlive === true) {
                addSquare(change.column, change.line);
            } else {
                const element = GRID.get(change.column, change.line);

                if (element) {
                    removeSquare(element);
                }
            }
        }
    }

    Main.clear = function () {
        for (let column = 0; column < GRID.columns; column++) {
            for (let line = 0; line < GRID.lines; line++) {
                const element = GRID.get(column, line);

                if (element) {
                    element.remove();
                }
            }
        }

        GRID.clear();
        GRID = null;

        const canvas = Game.getCanvas().getHtmlCanvasElement();

        canvas.removeEventListener("click", clickEvent);

        Game.removeAllCallbacks();
    };

    Main.restart = function () {
        Main.clear();
        Main.firstPhase();
    };
})();
