import { Game } from "../shared";

type UnitArgs = Omit<Game.RectangleArgs, "width" | "height" | "color">;

export class Unit extends Game.Rectangle {
    weapon: Game.Weapon;

    constructor(args: UnitArgs) {
        super({
            ...args,
            width: 20,
            height: 20,
            color: "green",
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
