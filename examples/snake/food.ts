import { Game } from "../shared";
import { getGrid } from "./state";

interface FoodArgs extends Omit<
    Partial<Game.RectangleArgs>,
    "width" | "height" | "color"
> {
    column: number;
    line: number;
}

export class Food extends Game.Rectangle {
    column: number;
    line: number;

    constructor(args: FoodArgs) {
        super({
            ...args,
            width: 10,
            height: 10,
            color: "red",
        });

        this.column = args.column;
        this.line = args.line;

        Game.addElement(this);
        getGrid().add(this, this.column, this.line);
    }
}
