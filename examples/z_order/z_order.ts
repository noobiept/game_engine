import { Game, makeButton, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init({ container: document.body, width: 400, height: 400 });

    const canvas = Game.getCanvas();

    const info = new Game.Text({
        x: 200,
        y: 20,
        textAlign: "center",
        fontSize: 14,
        text: "click a square to bring it to the front",
    });

    // the squares live in a container, so the z-order operations are relative to just these three
    const container = new Game.Container();
    canvas.addChild(container);

    const squares = [
        { color: "#d64545", x: 150, y: 150 },
        { color: "#3a9d23", x: 200, y: 190 },
        { color: "#3a6ea5", x: 250, y: 230 },
    ].map(function (def) {
        const square = new Game.Rectangle({
            x: def.x,
            y: def.y,
            width: 100,
            height: 100,
            color: def.color,
        });

        square.addEventListener("click", function () {
            container.bringToFront(square);
            console.log(`brought ${def.color} to the front`);
        });

        return square;
    });

    container.addChild(squares);

    makeButton(110, 360, "send front to back", function () {
        const children = container.getAllChildren();
        container.sendToBack(children[children.length - 1]);
        console.log("sent the front square to the back");
    });

    makeButton(300, 360, "front to middle", function () {
        const children = container.getAllChildren();
        container.setChildIndex(children[children.length - 1], 1);
        console.log("moved the front square to the middle (setChildIndex)");
    });

    Game.addElement(info);
});
