import { Game } from "../shared";
import { addMoney, SQUARE_SIZE } from "./state";

export class Tower extends Game.Rectangle {
    constructor(args) {
        var width = SQUARE_SIZE;
        var height = SQUARE_SIZE;

        args.x = args.column * SQUARE_SIZE + width / 2;
        args.y = args.line * SQUARE_SIZE + height / 2;
        args.width = width;
        args.height = height;
        args.color = "purple";

        super(args);

        this._has_logic = true;
        this.range = 50; // attack range

        // towers cost money
        addMoney(-Tower.COST);

        // set the 'collision' listener to know when it hits a creep
        this.addEventListener("collision", function (data) {
            var tower = data.element;
            var creep = data.collidedWith;

            creep.health -= tower.weapon.damage;

            if (creep.health <= 0) {
                if (!creep._removed) {
                    addMoney(creep.worth);
                    creep.remove();
                }
            }

            if (data.bullet) {
                data.bullet.remove();
            }
        });

        // add weapon
        this.weapon = new Game.Weapon({
            element: this,
            bulletContainer: args.bulletContainer,
            fireInterval: 0.5,
            damage: 50,
        });
    }

    logic(deltaTime) {
        this.weapon.logic(deltaTime);
    }
}

// cost of each tower
Tower.COST = 50;
