import { Game, runOnLoad } from "../shared";

var CATEGORIES = {
    blue: 1,
    red: 2,
};

runOnLoad(function () {
    var width = 400;
    var height = 400;

    var collision = new Game.CollisionDetection.SpatialPartition({
        canvasWidth: width,
        canvasHeight: height,
        partitions: 4,
    });

    Game.init(document.body, width, height, collision);

    var blue = new Blue(10, 50);
    Game.addElement(blue);

    blue.addEventListener("collision", function (data) {
        var red = data.collidedWith;
        red.nextColor();

        console.log("Collision!");
    });

    blue.movement.moveLoop([
        { x: 50, y: 50 },
        { x: 350, y: 50 },
        { x: 350, y: 150 },
        { x: 50, y: 150 },
        { x: 50, y: 250 },
        { x: 350, y: 250 },
        { x: 350, y: 350 },
        { x: 50, y: 350 },
    ]);

    var positions = [
        { x: 100, y: 50 },
        { x: 200, y: 50 },
        { x: 300, y: 50 },
        { x: 100, y: 150 },
        { x: 200, y: 150 },
        { x: 300, y: 150 },
        { x: 100, y: 250 },
        { x: 200, y: 250 },
        { x: 300, y: 250 },
        { x: 100, y: 350 },
        { x: 200, y: 350 },
        { x: 300, y: 350 },
    ];

    for (var a = 0; a < positions.length; a++) {
        var position = positions[a];
        var red = new Red(position.x, position.y);

        Game.addElement(red);
    }
});

class Blue extends Game.Rectangle {
    movement: Game.Movement;

    constructor(x: number, y: number) {
        super({
            x: x,
            y: y,
            width: 10,
            height: 10,
            color: "blue",
            category: CATEGORIES.blue,
            collidesWith: CATEGORIES.red,
        });

        this._has_logic = true;
        this.movement = new Game.Movement({
            element: this,
            movementSpeed: 100,
        });
    }

    logic(deltaTime: number) {
        this.movement.logic(deltaTime);
    }
}

class Red extends Game.Rectangle {
    static COLORS = ["red", "maroon", "brown", "darkred"];
    color_position: number;

    constructor(x: number, y: number) {
        var colorPosition = 0;

        super({
            x: x,
            y: y,
            width: 20,
            height: 20,
            color: Red.COLORS[colorPosition],
            category: CATEGORIES.red,
        });

        this.color_position = colorPosition;
    }

    /**
     * Change to a different shade of red.
     */
    nextColor() {
        this.color_position++;

        if (this.color_position >= Red.COLORS.length) {
            this.color_position = 0;
        }

        this.color = Red.COLORS[this.color_position];
    }
}
