import { Game, runOnLoad } from "../shared";

// for collision detection
const CATEGORY = {
    friendly: 1,
    enemy: 2,
};

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    // we set 'One' to collide with 'Two', and 'Two' to collide with 'One'
    // example 1 - remove a unit on collision, and stop the other
    const one = new One(100, 50);
    const two = new Two(200, 50);

    one.addEventListener("collision", function (data) {
        addText("Collision!", two.x, two.y);

        const element = data.element;
        const collidedWith = data.collidedWith;

        element.movement.stop();
        collidedWith.remove();
    });
    one.movement.moveTo(300, 50);

    // example 2 - no collision between elements of the same type
    const three = new One(100, 150);
    const four = new One(200, 150);

    three.movement.moveLoop([
        { x: 300, y: 150 },
        { x: 100, y: 150 },
    ]);
    three.addEventListener("collision", function (_data) {
        addText("No text here.", four.x, four.y);
    });

    // example 3 - collision occurs between 'One' and 'Two'
    const five = new One(100, 250);
    const six = new Two(200, 250);

    five.movement.moveLoop([
        { x: 300, y: 250 },
        { x: 100, y: 250 },
    ]);
    six.addEventListener("collision", function (_data) {
        addText("Collision!", six.x, six.y);
    });

    // example 4 - bullets respect the collision detection of the unit it was fired from
    const seven = new One(150, 350);
    const eight = new Two(250, 350);

    seven.addEventListener("collision", function (_data) {
        addText("Bullet collision!", eight.x, eight.y);
    });
    seven.weapon.forceFire(0, 0, 3);
});

function addText(text: string, x: number, y: number) {
    const message = new Game.Text({
        text: text,
        timeout: 1,
    });
    message.x = x;
    message.y = y;
    message.textAlign = "center";

    Game.addElement(message);
}

class One extends Game.Rectangle {
    movement: Game.Movement;
    weapon: Game.Weapon;

    constructor(x: number, y: number) {
        super({
            width: 10,
            height: 10,
            color: "blue",
            category: CATEGORY.friendly,
            collidesWith: CATEGORY.enemy,
        });

        this._has_logic = true;
        this.x = x;
        this.y = y;

        this.weapon = new Game.Weapon({
            element: this,
            bulletContainer: Game.getCanvas(),
        });
        this.movement = new Game.Movement({
            element: this,
            movementSpeed: 100,
        });

        Game.addElement(this);
    }

    logic(deltaTime: number) {
        this.movement.logic(deltaTime);
        this.weapon.logic(deltaTime);
    }
}

class Two extends Game.Rectangle {
    movement: Game.Movement;

    constructor(x: number, y: number) {
        super({
            width: 10,
            height: 10,
            color: "red",
            category: CATEGORY.enemy,
            collidesWith: CATEGORY.friendly,
        });

        this._has_logic = true;
        this.x = x;
        this.y = y;

        this.movement = new Game.Movement({
            element: this,
            movementSpeed: 100,
        });

        Game.addElement(this);
    }

    logic(deltaTime: number) {
        this.movement.logic(deltaTime);
    }
}
