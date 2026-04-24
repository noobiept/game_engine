import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 300, 300);

    const container = new Game.Container();

    const rectSize = 20;
    const circleRadius = 4;
    const offset = rectSize / 2;

    const rect = new Game.Rectangle({
        width: rectSize,
        height: rectSize,
        color: "gray",
    });
    const circle1 = new Game.Circle({
        x: -offset,
        y: -offset,
        radius: circleRadius,
        color: "black",
    });
    const circle2 = new Game.Circle({
        x: -offset + rectSize,
        y: -offset + rectSize,
        radius: circleRadius,
        color: "black",
    });
    const circle3 = new Game.Circle({
        x: -offset + rectSize,
        y: -offset,
        radius: circleRadius,
        color: "black",
    });
    const circle4 = new Game.Circle({
        x: -offset,
        y: -offset + rectSize,
        radius: circleRadius,
        color: "black",
    });

    container.x = 150 - rectSize / 2;
    container.y = 150 - rectSize / 2;
    container.addChild(rect, circle1, circle2, circle3, circle4);
    container.rotate(45, true);
    container.addEventListener("click", function () {
        console.log(
            "container! width:" + container.getWidth(),
            " height: " + container.getHeight(),
        );
    });
    rect.addEventListener("click", function () {
        console.log("rectangle");
    });

    Game.addElement(container);

    const tween = new Game.Tween(container);

    tween.to({ opacity: 0.2 }, 2).to({ opacity: 1 }, 2);
    tween.start();

    const unitRect = new Game.Rectangle({
        width: 10,
        height: 10,
        color: "blue",
    });
    const unitRect2 = new Game.Rectangle({
        x: 5,
        y: 5,
        width: 10,
        height: 10,
        color: "black",
    });
    const unit = new Unit({
        x: 5,
        y: 50,
        movementSpeed: 100,
        children: [unitRect, unitRect2],
    });

    unit.movement.moveTo(290, 50);
    unit.movement.queueMoveTo(150, 290);
    unit.movement.queueMoveTo(5, 50, function () {
        console.log("End movement!");
    });

    Game.addElement(unit);

    const unit2 = new Unit({
        movementSpeed: 50,
    });

    const unit2circle = new Game.Circle({
        radius: 10,
        color: "green",
    });

    unit2.addChild(unit2circle);
    unit2.setPosition(10, 230);

    unit2.movement.moveLoop([
        {
            x: 290,
            y: 230,
            callback: function () {
                console.log("Right!");
            },
        },
        { x: 10, y: 230 },
    ]);

    Game.addElement(unit2);
});

/**
 * Make your own unit class, reusing existing classes.
 */
interface UnitArgs extends Game.ContainerArgs {
    movementSpeed: number;
}

class Unit extends Game.Container {
    movement: Game.Movement;

    constructor(args: UnitArgs) {
        super(args);

        this.movement = new Game.Movement({
            element: this,
            movementSpeed: args.movementSpeed,
        });
    }

    logic(deltaTime: number) {
        super.logic(deltaTime);

        this.movement.logic(deltaTime);
    }
}
