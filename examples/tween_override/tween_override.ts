import { Game, eventPosition, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init({ container: document.body, width: 400, height: 400 });

    const canvas = Game.getCanvas();

    const info = new Game.Text({
        x: 200,
        y: 20,
        textAlign: "center",
        fontSize: 14,
        text: "click to send the squares to that x\n(each one pulses with a tween of its own)",
    });

    /**
     * A square with a label, that pulses (a tween on its opacity, started again when it ends).
     */
    function makeSquare(y: number, color: string, label: string) {
        const text = new Game.Text({
            x: 10,
            y: y - 30,
            fontSize: 13,
            color: color,
            text: label,
        });
        const square = new Game.Rectangle({
            x: 30,
            y: y,
            width: 26,
            height: 26,
            color: color,
        });

        const pulse = () => {
            new Game.Tween(square)
                .to({ opacity: 0.3 }, 0.6)
                .to({ opacity: 1 }, 0.6)
                .call(pulse)
                .start();
        };
        pulse();

        Game.addElement([text, square]);

        return square;
    }

    // green: `override: true` stops every tween of the square, the pulse as well
    const green = makeSquare(
        120,
        "#3a9d23",
        "override: true  (moves right away, but stops the pulse)",
    );

    // blue: `override: "properties"` only takes `x` out of the square's other tweens
    const blue = makeSquare(
        220,
        "#2f6fd6",
        'override: "properties"  (moves right away, keeps pulsing)',
    );

    // red: without override, the newest tween sets `x`, and the older ones keep running underneath
    const red = makeSquare(
        320,
        "#d64545",
        "no override  (keeps pulsing, the older moves still run)",
    );

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

        new Game.Tween(green, { override: true }).to({ x: pos.x }, 1).start();
        new Game.Tween(blue, { override: "properties" })
            .to({ x: pos.x }, 1)
            .start();
        new Game.Tween(red).to({ x: pos.x }, 1).start();
    });

    canvas.addChild(catcher);
    canvas.sendToBack(catcher);
    Game.addElement(info);
});
