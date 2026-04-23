import { Game } from "../shared";
import { getGrid } from "./state";

export class Food extends Game.Rectangle {
    constructor(args) {
        args.width = 10;
        args.height = 10;
        args.color = "red";

        super(args);

        this.column = args.column;
        this.line = args.line;

        Game.addElement(this);
        getGrid().add(this, this.column, this.line);
    }
}
