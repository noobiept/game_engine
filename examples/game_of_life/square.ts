import { Game } from "../shared";

type SquareArgs = Partial<
    Omit<Game.RectangleArgs, "width" | "height" | "color">
>;

export class Square extends Game.Rectangle {
    static SIZE = 20;

    constructor(args: SquareArgs = {}) {
        super({
            ...args,
            width: Square.SIZE,
            height: Square.SIZE,
            color: "blue",
        });

        Game.addElement(this);
    }
}
