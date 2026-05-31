import { Game, eventPosition, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init({ container: document.body, width: 400, height: 400 });

    const preload = new Game.Preload({ saveGlobal: true });

    preload.addEventListener("complete", start);
    preload.loadManifest(
        [
            { id: "walker", path: "sprite_example.png" },
            { id: "explosion", path: "sprite_example2.png" },
        ],
        "../assets/sprites/",
    );
});

function start() {
    const canvas = Game.getCanvas();

    const info = new Game.Text({
        x: 200,
        y: 20,
        textAlign: "center",
        fontSize: 14,
        text: "click anywhere to spawn a one-shot animation\n(it removes itself on 'animationend')",
    });

    // a looping animation, for contrast (loops forever -> never dispatches 'animationend')
    const walker = new Game.Sprite({
        x: 40,
        y: 60,
        image: Game.Preload.get("walker"),
        frameWidth: 40,
        frameHeight: 40,
        interval: 0.15,
        animations: { walk: [0, 1, 2, 3] },
    });
    walker.play("walk"); // loop defaults to true

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
        spawnExplosion(pos.x, pos.y);
    });

    canvas.addChild(catcher, walker);
    Game.addElement(info);
}

function spawnExplosion(x: number, y: number) {
    const sprite = new Game.Sprite({
        x: x,
        y: y,
        image: Game.Preload.get("explosion"),
        frameWidth: 40,
        frameHeight: 40,
        interval: 0.07,
        animations: { boom: [0, 1, 2, 3, 4, 5] },
    });

    sprite.addEventListener("animationend", function (data) {
        console.log(
            `animation '${data.animationId}' finished, removing the sprite`,
        );
        data.sprite.remove();
    });

    // loop: false -> plays once and dispatches 'animationend' on the last frame
    sprite.play("boom", { loop: false });

    Game.getCanvas().addChild(sprite);
}
