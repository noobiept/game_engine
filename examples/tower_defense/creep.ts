import { Game } from "../shared";
import { addLife, gameOver, getNextPosition, SQUARE_SIZE } from "./state";

export class Creep extends Game.Circle {
    constructor(args) {
        var center = SQUARE_SIZE / 2;

        args.x = args.column * SQUARE_SIZE + center;
        args.y = args.line * SQUARE_SIZE + center;
        args.radius = 5;
        args.color = "rgb(150, 0, 24)";

        super(args);

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
    moveTo(column, line) {
        var center = SQUARE_SIZE / 2;
        var _this = this;

        this.movement.moveTo(
            column * SQUARE_SIZE + center,
            line * SQUARE_SIZE + center,
            function () {
                _this.column = column;
                _this.line = line;
                _this.checkDestination();
            },
        );
    }

    /**
     * See where to go from the current column/line position.
     * If it reached the end, then the unit is removed.
     */
    checkDestination() {
        var next = getNextPosition(this.column, this.line);

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

    logic(deltaTime) {
        this.movement.logic(deltaTime);
    }
}
