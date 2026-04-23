import { Game } from "../shared";

export class Square extends Game.Rectangle {
    static SIZE = 20;

    constructor(args = {}) {
        args.width = Square.SIZE;
        args.height = Square.SIZE;
        args.color = "blue";

        super(args);

        Game.addElement(this);
    }
}
