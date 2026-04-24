import { Game } from "../shared";
import { addMoney, SQUARE_SIZE } from "./state";

interface TowerArgs extends Omit<
    Partial<Game.RectangleArgs>,
    "x" | "y" | "width" | "height" | "color"
> {
    column: number;
    line: number;
    bulletContainer: Game.Container | Game.Canvas;
}

export class Tower extends Game.Rectangle {
    static COST = 50;
    range: number;
    weapon: Game.Weapon;

    constructor(args: TowerArgs) {
        const width = SQUARE_SIZE;
        const height = SQUARE_SIZE;

        super({
            ...args,
            x: args.column * SQUARE_SIZE + width / 2,
            y: args.line * SQUARE_SIZE + height / 2,
            width: width,
            height: height,
            color: "purple",
        });

        this._has_logic = true;
        this.range = 50; // attack range

        // towers cost money
        addMoney(-Tower.COST);

        // set the 'collision' listener to know when it hits a creep
        this.addEventListener("collision", function (data) {
            const tower = data.element;
            const creep = data.collidedWith;

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

    logic(deltaTime: number) {
        this.weapon.logic(deltaTime);
    }
}
