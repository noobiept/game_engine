import { Game } from "../shared";
import { Direction, gameOver, getGrid } from "./state";

type DirectionValue = (typeof Direction)[keyof typeof Direction];

interface PathStep {
    column: number;
    line: number;
    direction: DirectionValue;
}

interface TailArgs extends Omit<
    Partial<Game.RectangleArgs>,
    "width" | "height" | "color"
> {
    column: number;
    line: number;
    direction: DirectionValue;
    path?: PathStep[];
}

export class Tail extends Game.Rectangle {
    direction: DirectionValue;
    path: PathStep[];
    column: number;
    line: number;

    constructor(args: TailArgs) {
        var path = args.path ?? [];

        super({
            ...args,
            width: 10,
            height: 10,
            color: "green",
        });

        this.direction = args.direction;
        this.path = path;
        this.column = args.column;
        this.line = args.line;

        Game.addElement(this);
        getGrid().add(this, this.column, this.line);
    }

    tick() {
        if (this.path.length > 0) {
            var destination = this.path[0];

            if (
                this.column === destination.column &&
                this.line === destination.line
            ) {
                this.path.shift();
                this.direction = destination.direction;
            }
        }

        var direction = this.direction;
        var prevColumn = this.column;
        var prevLine = this.line;

        if (direction === Direction.left) {
            this.column--;
        } else if (direction === Direction.right) {
            this.column++;
        } else if (direction === Direction.up) {
            this.line--;
        } else if (direction === Direction.down) {
            this.line++;
        }

        var grid = getGrid();

        if (grid.isInGrid(this.column, this.line)) {
            grid.move(prevColumn, prevLine, this.column, this.line);
        } else {
            gameOver();
        }
    }
}
