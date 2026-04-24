import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    const time = new Game.Text({
        x: 200,
        y: 300,
        textAlign: "center",
    });
    const frame = new Game.Text({
        x: 200,
        y: 100,
        textAlign: "center",
    });

    Game.addElement(time);
    Game.addElement(frame);

    let countTime = 0;
    let countFrames = 0;

    // called every tick/frame
    Game.addToGameLoop(function () {
        countFrames++;

        frame.text = countFrames + " frames";
    }, 0);

    // called every second
    Game.addToGameLoop(function () {
        console.log(countFrames);
        countTime++;
        countFrames = 0;

        time.text = countTime + " seconds";
    }, 1);
});
