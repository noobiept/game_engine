import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    const grid = new Game.ElementGrid({
        squareSize: 10,
        columns: 20,
        lines: 20,
        refX: 50,
        refY: 50,
        background: { fill: false, color: "gray" },
    });

    const canvas = Game.getCanvas().getHtmlCanvasElement();
    const canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener("click", function (event) {
        const x = event.clientX - canvasRect.left;
        const y = event.clientY - canvasRect.top;

        const gridPosition = grid.toGrid(x, y);
        const normalized = grid.normalizePosition(
            gridPosition.column,
            gridPosition.line,
        );

        const rectangle = new Game.Rectangle({
            width: 10,
            height: 10,
            color: "blue",
        });
        const previous = grid.add(
            rectangle,
            normalized.column,
            normalized.line,
        );

        if (previous !== null) {
            Game.removeElement(previous);
        }

        Game.addElement(rectangle);
    });
});
