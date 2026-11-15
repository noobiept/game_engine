import { Game } from "../shared";
import { SQUARE_SIZE } from "./state";

export class Terrain extends Game.Rectangle {
    constructor(args: { x: number; y: number }) {
        super({
            ...args,
            color: "black", // the color is set by `setPassable()`, but it's required by 'Game.Rectangle'
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
        });

        this.setPassable(0);
    }

    setPassable(passable: number) {
        if (passable !== 0) {
            this.color = "rgb(100, 100, 100)";
        } else {
            this.color = "rgb(1, 50, 32)";
        }
    }
}
