import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    const width = 400;
    const height = 400;

    Game.init(document.body, width, height);

    const categories = {
        green: 1,
        red: 2,
    };

    // add a unit
    const size = 10;
    const centerX = width / 2 - size / 2;
    const centerY = height / 2 - size / 2;

    const unit = new Unit({
        x: centerX,
        y: centerY,
        width: size,
        height: size,
        color: "green",
        movementSpeed: 100,
        category: categories.green,
        collidesWith: categories.red,
    });
    Game.addElement(unit);

    // add a target
    const target = new Unit({
        x: 5,
        y: 5,
        width: 10,
        height: 10,
        color: "red",
        movementSpeed: 50,
        category: categories.red,
    });
    Game.addElement(target);

    target.movement.moveTo(5, centerY);

    // fire in whatever direction the unit is facing
    unit.weapon.forceFire();

    // specify an angle
    unit.weapon.forceFire(Math.PI);
    unit.weapon.forceFire(Math.PI / 2);
    unit.weapon.forceFire(-Math.PI / 2, 0, 1); // fire at an interval

    // specify a target
    // fire a different type of bullet
    const alternateShape = new Game.Rectangle({
        width: 10,
        height: 5,
        color: "purple",
    });
    const bullet = new Game.Bullet({
        angleOrTarget: 0,
        children: alternateShape,
        movementSpeed: 100,
    });
    const id = unit.weapon.addBulletType(bullet);

    unit.weapon.forceFire(target, id);
});

interface UnitArgs extends Game.RectangleArgs {
    movementSpeed: number;
}

class Unit extends Game.Rectangle {
    movement: Game.Movement;
    weapon: Game.Weapon;

    constructor(args: UnitArgs) {
        super(args);

        this._has_logic = true;

        this.movement = new Game.Movement({
            element: this,
            movementSpeed: args.movementSpeed,
        });

        this.weapon = new Game.Weapon({
            element: this,
            bulletContainer: Game.getCanvas(),
        });
        this.addEventListener("collision", function (data) {
            if (data.bullet) {
                data.bullet.remove();
            }

            console.log("Collision!");
        });
    }

    logic(deltaTime: number) {
        this.movement.logic(deltaTime);
        this.weapon.logic(deltaTime);
    }
}
