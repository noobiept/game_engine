import { Game } from "../shared";
import { addLife, gameOver, getNextPosition, SQUARE_SIZE } from "./state";

interface CreepArgs extends Omit<
    Partial<Game.CircleArgs>,
    "x" | "y" | "radius" | "color"
> {
    column: number;
    line: number;
    health: number;
}

export class Creep extends Game.Circle {
    health: number;
    column: number;
    line: number;
    worth: number;
    movement: Game.Movement;

    constructor(args: CreepArgs) {
        const center = SQUARE_SIZE / 2;

        super({
            ...args,
            x: args.column * SQUARE_SIZE + center,
            y: args.line * SQUARE_SIZE + center,
            radius: 5,
            color: "rgb(150, 0, 24)",
        });

        this.health = args.health;
        this.column = args.column;
        this.line = args.line;
        this._has_logic = true;

        // how much money you get from the creep
        this.worth = 10;

        this.movement = new Game.Movement({
            element: this,
            movementSpeed: 60,
        });

        this.checkDestination();
    }

    /**
     * Move to a column/line position. Once it reaches the destination, check to where it needs to go next.
     */
    moveTo(column: number, line: number) {
        const center = SQUARE_SIZE / 2;

        this.movement.moveTo(
            column * SQUARE_SIZE + center,
            line * SQUARE_SIZE + center,
            () => {
                this.column = column;
                this.line = line;
                this.checkDestination();
            },
        );
    }

    /**
     * See where to go from the current column/line position.
     * If it reached the end, then the unit is removed.
     */
    checkDestination() {
        const next = getNextPosition(this.column, this.line);

        // we reached the end
        if (next.column === this.column && next.line === this.line) {
            addLife(-1);
            this.remove();

            // checks if the game is over
            gameOver();
        } else {
            this.moveTo(next.column, next.line);
        }
    }

    logic(deltaTime: number) {
        this.movement.logic(deltaTime);
    }
}
