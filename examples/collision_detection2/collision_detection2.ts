import { Game, runOnLoad } from "../shared";

const CATEGORIES = {
    player: 1,
    enemy: 2,
};

runOnLoad(function () {
    Game.init(document.body, 400, 400);
    Game.activateMouseMoveEvents(50);

    // add the player
    const player = new Player(200, 200);

    player.addEventListener("collision", function (data) {
        console.log("Collision!");
    });
    Game.addElement(player);

    // its movement is controlled with the mouse
    Game.addToGameLoop(function () {
        const position = Game.getMousePosition();

        const rect = Game.getCanvas()
            .getHtmlCanvasElement()
            .getBoundingClientRect();

        player.x = position.x - rect.left;
        player.y = position.y - rect.top;
    }, 0.05);

    // container for the enemy units
    const enemiesContainer = new Game.Container({
        x: 100,
        y: 100,
    });
    enemiesContainer.scaleX = 2;
    Game.addElement(enemiesContainer);

    const enemy1 = new Enemy(110, 130);
    enemy1.scaleX = 0.7;
    Game.addElement(enemy1);

    const enemy2 = new Enemy(100, 100);
    enemy2.rotation = -Math.PI / 4;
    enemy2.scaleY = 2;
    enemiesContainer.addChild(enemy2);

    window.addEventListener("keydown", function (event) {
        const step = 0.1;

        switch (event.key) {
            case "ArrowLeft":
                player.scaleX -= step;
                break;

            case "ArrowRight":
                player.scaleX += step;
                break;

            case "ArrowUp":
                player.scaleY -= step;
                break;

            case "ArrowDown":
                player.scaleY += step;
                break;

            case " ":
                player.weapon.forceFire();
                break;

            case "r":
                player.rotation += Math.PI / 6;
                break;
        }
    });
});

class Player extends Game.Rectangle {
    weapon: Game.Weapon;

    constructor(x: number, y: number) {
        super({
            x: x,
            y: y,
            width: 10,
            height: 10,
            color: "blue",
            category: CATEGORIES.player,
            collidesWith: CATEGORIES.enemy,
        });

        this._has_logic = true;
        this.weapon = new Game.Weapon({
            element: this,
            bulletContainer: Game.getCanvas(),
        });
    }

    logic(deltaTime: number) {
        this.weapon.logic(deltaTime);
    }
}

class Enemy extends Game.Rectangle {
    constructor(x: number, y: number) {
        super({
            x: x,
            y: y,
            width: 20,
            height: 20,
            color: "red",
            category: CATEGORIES.enemy,
        });
    }
}
