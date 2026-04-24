import { Game, runOnLoad } from "../shared";
import { Input, Unit, UnitState } from "./parallax_unit";

runOnLoad(function () {
    Game.init(document.body, 272, 160);

    const path = "../assets/";
    const preload = new Game.Preload({ saveGlobal: true });

    const manifest = [
        {
            id: "back-trees",
            path: "scrolling_bitmap/parallax-forest-back-trees.png",
        },
        {
            id: "front-trees",
            path: "scrolling_bitmap/parallax-forest-front-trees.png",
        },
        { id: "lights", path: "scrolling_bitmap/parallax-forest-lights.png" },
        {
            id: "middle-trees",
            path: "scrolling_bitmap/parallax-forest-middle-trees.png",
        },
        { id: "rogue", path: "sprites/rogue.png" },
    ];
    preload.addEventListener("complete", start);
    preload.loadManifest(manifest, path);
});

function start() {
    const canvas = Game.getCanvas();
    const centerX = canvas.getWidth() / 2;
    const centerY = canvas.getHeight() / 2;

    const backTrees = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get("back-trees"),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 2,
        interval: 0.5,
    });
    Game.addElement(backTrees);

    const lights = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get("lights"),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 1,
        interval: 2,
    });
    Game.addElement(lights);

    const middleTrees = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get("middle-trees"),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 1,
        interval: 0.3,
    });
    Game.addElement(middleTrees);

    // without an interval, its going to be controlled manually
    const frontTrees = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get("front-trees"),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 2,
    });
    Game.addElement(frontTrees);

    const rogue = new Unit(centerX, centerY + 50, UnitState.idle_right);
    Game.addElement(rogue);

    // move the front trees based on the unit movement
    rogue.addEventListener("idle", function () {
        frontTrees.clearInterval();
    });
    rogue.addEventListener("walk_left", function () {
        frontTrees.setDirection(Game.ScrollingBitmapArgs.Direction.right);
        frontTrees.setInterval(0.1);
    });
    rogue.addEventListener("walk_right", function () {
        frontTrees.setDirection(Game.ScrollingBitmapArgs.Direction.left);
        frontTrees.setInterval(0.1);
    });

    // by pressing/releasing the left/right arrow key, we can change the state of the game
    let currentInput = -1;
    let nextInput = -1;

    window.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowLeft":
                nextInput = Input.press_leftArrow;
                break;

            case "ArrowRight":
                nextInput = Input.press_rightArrow;
                break;
        }
    });
    window.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "ArrowLeft":
                nextInput = Input.release_leftArrow;
                break;

            case "ArrowRight":
                nextInput = Input.release_rightArrow;
                break;
        }
    });

    // handle the input
    Game.addToGameLoop(function () {
        if (currentInput !== nextInput) {
            currentInput = nextInput;

            rogue.handleInput(nextInput);
        }
    }, 0);
}
