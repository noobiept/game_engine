import { Game, eventPosition, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    const canvas = Game.getCanvas();

    const info = new Game.Text({
        x: 200,
        y: 20,
        textAlign: "center",
        fontSize: 14,
        text: "click to send both squares to that x\ngreen uses override, red does not",
    });

    // green: every click cancels the running tween and redirects immediately
    const greenLabel = new Game.Text({
        x: 10,
        y: 120,
        fontSize: 13,
        color: "#3a9d23",
        text: "override: on  (cancels the in-progress move)",
    });
    const greenSquare = new Game.Rectangle({
        x: 30,
        y: 150,
        width: 26,
        height: 26,
        color: "#3a9d23",
    });

    // red: every click stacks another tween, so the moves fight and lag behind
    const redLabel = new Game.Text({
        x: 10,
        y: 250,
        fontSize: 13,
        color: "#d64545",
        text: "override: off  (moves stack up and lag)",
    });
    const redSquare = new Game.Rectangle({
        x: 30,
        y: 280,
        width: 26,
        height: 26,
        color: "#d64545",
    });

    // a transparent, full-canvas rectangle to catch clicks anywhere
    const catcher = new Game.Rectangle({
        x: 200,
        y: 200,
        width: 400,
        height: 400,
        color: "rgba(0, 0, 0, 0)",
    });
    catcher.addEventListener("click", function (data) {
        const pos = eventPosition(data.event);

        // override removes the running tween first, so it heads to the new target right away
        new Game.Tween(greenSquare, { override: true })
            .to({ x: pos.x }, 1)
            .start();

        // without override the new tween piles on top of the running ones, which keep
        // overwriting the position, so the square lags behind your latest click
        new Game.Tween(redSquare).to({ x: pos.x }, 1).start();
    });

    canvas.addChild(catcher, greenSquare, redSquare);
    Game.addElement(info);
    Game.addElement(greenLabel);
    Game.addElement(redLabel);
});
