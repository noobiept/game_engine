import * as Utilities from "@drk4/utilities";
import { Direction } from "./state";
import { DirectionValue, Tail, TailArgs } from "./tail";

export class Snake {
    tails: Tail[];
    first_tail: Tail;

    constructor(args: TailArgs) {
        const first = new Tail(args);

        this.tails = [first];
        this.first_tail = first;
    }

    /**
     * Add a new tail at the end of the snake.
     */
    addTail() {
        const last = this.tails[this.tails.length - 1];

        let column = last.column;
        let line = last.line;

        if (last.direction === Direction.left) {
            column++;
        } else if (last.direction === Direction.right) {
            column--;
        } else if (last.direction === Direction.up) {
            line++;
        } else if (last.direction === Direction.down) {
            line--;
        }

        const tail = new Tail({
            column: column,
            line: line,
            path: Utilities.deepClone(last.path),
            direction: last.direction,
        });

        this.tails.push(tail);
    }

    getDirection() {
        return this.first_tail.direction;
    }

    changeDirection(newDirection: DirectionValue) {
        const currentDirection = this.getDirection();

        // already going that way
        if (currentDirection === newDirection) {
            return;
        }

        // don't allow to go to the opposing direction
        if (
            (currentDirection === Direction.left &&
                newDirection === Direction.right) ||
            (currentDirection === Direction.right &&
                newDirection === Direction.left) ||
            (currentDirection === Direction.up &&
                newDirection === Direction.down) ||
            (currentDirection === Direction.down &&
                newDirection === Direction.up)
        ) {
            return;
        }

        const column = this.first_tail.column;
        const line = this.first_tail.line;

        const length = this.tails.length;

        for (let a = 0; a < length; a++) {
            this.tails[a].path.push({
                column: column,
                line: line,
                direction: newDirection,
            });
        }
    }

    destroy() {
        for (let a = this.tails.length - 1; a >= 0; a--) {
            this.tails[a].destroy();
        }
    }

    getTailSize() {
        return this.tails.length;
    }

    tick() {
        const length = this.tails.length;

        for (let a = 0; a < length; a++) {
            this.tails[a].tick();
        }
    }
}
