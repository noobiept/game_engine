import * as Utilities from "@drk4/utilities";
import { Element } from "./element";
import * as Game from "./game";

export interface MovementArgs {
    element: Element;
    movementSpeed: number;
}

export enum MovementState {
    stop, // element isn't moving
    angle, // move in a specific direction/angle
    destination, // move to a x/y position
    loop, // move between some x/y positions
    follow, // move towards an element position
}

/**
 * Basic Usage:
 *
 *     class Unit extends Game.Rectangle
 *         {
 *         constructor( args )
 *             {
 *             super( args );
 *
 *             this._has_logic = true;
 *             this.movement = new Game.Movement({
 *                     element: this,
 *                     movementSpeed: 100
 *                 });
 *             }
 *         logic( deltaTime )
 *             {
 *             this.movement.logic( deltaTime );
 *             }
 *         }
 *
 *     var unit = new Unit({
 *             width: 10,
 *             height: 10,
 *             color: 'red'
 *         });
 *     Game.addElement( unit );
 *
 *     unit.movement.moveAngle( Math.PI / 4 );
 *
 * Examples -- `basic_example`, `bullets`, `collision_detection`, `collision_spatial_partition`, `tower_defense`
 */
export class Movement {
    movement_speed: number;

    protected _element: Element | null;
    protected _movement_state: MovementState;
    protected _is_moving: boolean;
    protected _move_x: number;
    protected _move_y: number;
    protected _move_callback: (() => any) | null;
    protected _destination_x: number;
    protected _destination_y: number;
    protected _is_destination_x_diff_positive: boolean;
    protected _is_destination_y_diff_positive: boolean;
    protected _path: { x: number; y: number; callback: (() => any) | null }[];
    protected _loop_path_position: number; // when looping a path, to know what is the current position the element is going for (the path array position)
    protected _follow_target: Element | null;

    constructor(args: MovementArgs) {
        this.movement_speed = args.movementSpeed;
        this._element = args.element;
        this._movement_state = MovementState.stop;
        this._is_moving = false;
        this._move_x = 0;
        this._move_y = 0;
        this._move_callback = null;
        this._destination_x = 0;
        this._destination_y = 0;
        this._path = [];
        this._loop_path_position = 0;
        this._is_destination_x_diff_positive = false;
        this._is_destination_y_diff_positive = false;
        this._follow_target = null;
    }

    /**
     * Clears any previous path, and forces the element to move to the specified position.
     */
    moveTo(x: number, y: number, callback?: () => any) {
        let moveCallback: (() => any) | null = callback ?? null;

        if (!Utilities.isFunction(callback)) {
            moveCallback = null;
        }

        this._movement_state = MovementState.destination;
        this._path.length = 0;
        this._path.push({
            x: x,
            y: y,
            callback: moveCallback,
        });

        this.logic = this.movementPathLogic;
        this.moveToNext();
    }

    /**
     * Move to the next position in the path.
     */
    moveToNext() {
        let next;

        if (this._movement_state === MovementState.loop) {
            this._loop_path_position++;

            if (this._loop_path_position >= this._path.length) {
                this._loop_path_position = 0;
            }

            next = this._path[this._loop_path_position];
        } else {
            next = this._path.shift();
        }

        if (next) {
            const x = next.x;
            const y = next.y;
            const element = this._element;

            if (element === null) {
                return false;
            }

            const elementX = element.x;
            const elementY = element.y;

            this._is_moving = true;
            this._destination_x = x;
            this._destination_y = y;
            this._move_callback = next.callback;

            this._is_destination_x_diff_positive = x - elementX > 0;
            this._is_destination_y_diff_positive = y - elementY > 0;

            const angleRads = Utilities.calculateAngle(
                elementX,
                elementY * -1,
                x,
                y * -1,
            );

            this._move_x = Math.cos(angleRads) * this.movement_speed;
            this._move_y = Math.sin(angleRads) * this.movement_speed;

            return true;
        } else {
            this._is_moving = false;
        }

        return false;
    }

    /**
     * Stop moving.
     */
    stop() {
        this._movement_state = MovementState.stop;
        this._path.length = 0;
        this._move_callback = null;
        this._is_moving = false;
        this._follow_target = null;
    }

    /**
     * Add a x/y position to the movement queue.
     *
     * @param x The x position.
     * @param y The y position.
     * @param callback Optional function to be called when it reaches this position.
     */
    queueMoveTo(x: number, y: number, callback?: () => any) {
        let moveCallback: (() => any) | null = callback ?? null;

        if (!Utilities.isFunction(callback)) {
            moveCallback = null;
        }

        if (!this._is_moving) {
            this.moveTo(x, y, moveCallback ?? undefined);
            return;
        }

        this._path.push({
            x: x,
            y: y,
            callback: moveCallback,
        });
    }

    /**
     * Move continuously between the positions in the path.
     *
     * @param path The path of the movement.
     */
    moveLoop(path: { x: number; y: number; callback?: () => any }[]) {
        this._movement_state = MovementState.loop;
        this._path = path.map(function (step) {
            return {
                x: step.x,
                y: step.y,
                callback: step.callback ?? null,
            };
        });
        this._loop_path_position = -1; // will be added in .moveToNext() and so will start at the 0 position

        this.logic = this.movementPathLogic;
        this.moveToNext();
    }

    /**
     * Move continuously in a specific angle.
     *
     * @param angle The angle of the direction. Positive clockwise.
     * @param degrees If the `angle` value is in degrees or radians.
     * @param callback To be called when it reaches the end of the canvas.
     */
    moveAngle(angle: number, degrees?: boolean, callback?: () => any) {
        if (degrees === true) {
            angle = (Math.PI / 180) * angle;
        }

        this._movement_state = MovementState.angle;
        this._is_moving = true;

        this._move_x = Math.cos(angle) * this.movement_speed;
        this._move_y = Math.sin(angle) * this.movement_speed;

        if (this._element !== null) {
            this._element.rotation = angle;
        }
        this._move_callback = callback ?? null;

        this.logic = this.movementAngleLogic;
    }

    /**
     * Move constantly towards the element's position.
     *
     * @param element The element to follow.
     * @param callback Called when the element that we're following is removed.
     */
    follow(element: Element, callback?: () => any) {
        this._movement_state = MovementState.follow;
        this._follow_target = element;
        this.logic = this.movementFollowLogic;
        this._move_callback = callback ?? null;
    }

    /**
     * Keep moving towards the target element's position.
     */
    protected movementFollowLogic(delta: number) {
        const target = this._follow_target;

        if (!target) {
            return;
        }

        if (target._removed) {
            if (this._move_callback) {
                this._move_callback();
            } else {
                this.stop();
            }

            return;
        }

        const element = this._element;

        if (element === null) {
            return;
        }

        const elementX = element.x;
        const elementY = element.y;

        const angle = Utilities.calculateAngle(
            elementX,
            elementY * -1,
            target.x,
            target.y * -1,
        );

        element.setPosition(
            elementX + Math.cos(angle) * this.movement_speed * delta,
            elementY + Math.sin(angle) * this.movement_speed * delta,
        );
        element.rotation = angle;
    }

    /**
     * Deals with movement in a certain direction/angle.
     * Calls the function callback when it reaches the end of the canvas.
     *
     * @param delta Time elapsed since the last update.
     */
    protected movementAngleLogic(delta: number) {
        if (this._is_moving) {
            const element = this._element;

            if (element === null) {
                return;
            }

            element.addToPosition(this._move_x * delta, this._move_y * delta);

            if (!Game.getCanvas().isInCanvas(element.x, element.y)) {
                if (this._move_callback) {
                    this._move_callback();
                }
            }
        }
    }

    /**
     * Deals with movement to a x/y position.
     * Calls the function callback when it reaches the destination.
     *
     * @param delta Time elapsed since the last update.
     */
    protected movementPathLogic(delta: number) {
        if (this._is_moving) {
            const element = this._element;

            if (element === null) {
                return;
            }

            element.addToPosition(this._move_x * delta, this._move_y * delta);

            let diffX = this._destination_x - element.x;
            let diffY = this._destination_y - element.y;

            // going from a positive difference to a negative
            // we switch the signal so that we only need to check >= 0 below
            if (this._is_destination_x_diff_positive) {
                diffX *= -1;
            }

            if (this._is_destination_y_diff_positive) {
                diffY *= -1;
            }

            // means we reached the destination
            if (diffX >= 0 && diffY >= 0) {
                element.setPosition(this._destination_x, this._destination_y);

                // save the callback, since its going to be changed in the method below
                const moveCallback = this._move_callback;
                this.moveToNext();

                // this function is called after the '.moveToNext()', to allow it to cancel the movement, if needed
                if (moveCallback) {
                    moveCallback();
                }
            }
        }
    }

    /**
     * Its called in every update. This is going to be assigned to a different movement logic method, depending on the current movement type.
     *
     * @param delta Time elapsed since the last update.
     */
    logic(delta: number) {
        // empty
    }

    /**
     * Clear the movement object.
     */
    remove() {
        this.stop();
        this._element = null;
    }
}
