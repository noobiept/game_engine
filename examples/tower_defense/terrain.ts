import { Game } from "../shared";
import { SQUARE_SIZE } from "./state";

export class Terrain extends Game.Rectangle {
    constructor(args) {
        args.color = "black"; // random color, since the 'color' argument is required for 'Game.Rectangle'
        args.width = SQUARE_SIZE;
        args.height = SQUARE_SIZE;

        super(args);

        this.setPassable(0);
    }

    setPassable(passable) {
        if (passable !== 0) {
            this.color = "rgb(100, 100, 100)";
        } else {
            this.color = "rgb(1, 50, 32)";
        }
    }
}
