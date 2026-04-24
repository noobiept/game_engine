import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    const canvas = Game.getCanvas();

    // example 1
    const rect1 = new Game.Rectangle({
        x: 5,
        y: 100,
        width: 10,
        height: 10,
        color: "green",
    });
    canvas.addChild(rect1);

    const tween1 = new Game.Tween(rect1);

    tween1
        .to(
            {
                x: 395,
            },
            2,
        )
        .wait(1)
        .to(
            {
                x: 200,
                y: 395,
            },
            2,
            Game.Tween.Ease.quadraticIn,
        )
        .call(function () {
            console.log("Finished!");
        });
    tween1.start();

    // example 2
    const rect2 = new Game.Rectangle({
        x: 5,
        y: 5,
        width: 10,
        height: 10,
        color: "red",
    });
    const rect3 = new Game.Rectangle({
        x: 5,
        y: 15,
        width: 10,
        height: 10,
        color: "blue",
    });
    canvas.addChild(rect2, rect3);

    const tween2 = new Game.Tween(rect2);
    const tween3 = new Game.Tween(rect3);

    tween2.to({ x: 395 }, 3);
    tween3.to({ x: 395 }, 3, Game.Tween.Ease.quadraticIn);

    tween2.start();
    tween3.start();
});
