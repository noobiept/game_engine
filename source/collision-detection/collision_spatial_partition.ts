import { CollisionDetectionAlgorithm } from "./collision_detection";
import { Element } from "../element";

export interface SpatialPartitionArgs {
    canvasWidth: number;
    canvasHeight: number;
    partitions: number;
}

/**
 * The information saved in an element's `collision_data`.
 */
interface PartitionData {
    owner: SpatialPartition; // the object this data belongs to
    registered: boolean; // if the element is part of the collision detection
    column: number; // the cell the element is linked in (-1 when it isn't in any)
    line: number;
    previous: Element | null; // the elements before/after in the cell's linked list
    next: Element | null;
}

/**
 * Useful when there's lots of elements in the game.
 * Need to make sure no element is bigger than the size of a partition.
 *
 * The canvas is divided in a grid of `partitions` x `partitions` cells, and each element is placed in the cell of its center position,
 * so an element only needs to be compared with the elements in the same and neighbor cells.
 * Elements whose center is outside the canvas (by more than a partition) aren't considered.
 *
 * Basic Usage:
 *
 *     const width = 400;
 *     const height = 400;
 *
 *     const collision = new Game.CollisionDetection.SpatialPartition({
 *             canvasWidth: width,
 *             canvasHeight: height,
 *             partitions: 10
 *         });
 *     Game.init({ container: document.body, width, height, collision });
 *
 * Examples -- `collision_spatial_partition`
 */
export class SpatialPartition implements CollisionDetectionAlgorithm {
    _grid: (Element | null)[][]; // a grid of linked lists (the first element of the list)
    _grid_size: number;
    _partition_width: number;
    _partition_height: number;
    protected _elements: Set<Element>; // all the registered elements
    protected _checking: boolean; // if it's going through the grid, checking the collisions
    protected _pending: Set<Element>; // elements whose cell needs to be updated once the collision check is done

    /**
     * Throws if `partitions` isn't a positive integer, or the canvas dimensions aren't positive numbers.
     */
    constructor(args: SpatialPartitionArgs) {
        const partitions = args.partitions;

        if (!Number.isInteger(partitions) || partitions < 1) {
            throw new RangeError(
                "The number of partitions needs to be a positive integer.",
            );
        }

        if (!(args.canvasWidth > 0) || !(args.canvasHeight > 0)) {
            throw new RangeError(
                "The canvas width and height need to be positive numbers.",
            );
        }

        this._partition_width = args.canvasWidth / partitions;
        this._partition_height = args.canvasHeight / partitions;

        this._grid_size = partitions;
        this._grid = [];

        for (let column = 0; column < partitions; column++) {
            this._grid[column] = [];

            for (let line = 0; line < partitions; line++) {
                this._grid[column][line] = null;
            }
        }

        this._elements = new Set();
        this._checking = false;
        this._pending = new Set();
    }

    /**
     * Add an element to a partition in the grid, based on its current x/y position.
     */
    add(element: Element) {
        let data = this._getData(element);

        if (data === null) {
            data = {
                owner: this,
                registered: true,
                column: -1,
                line: -1,
                previous: null,
                next: null,
            };
            element.collision_data = data;
        } else if (data.registered) {
            return;
        } else {
            data.registered = true;
        }

        this._elements.add(element);
        this._sync(element, data);
    }

    /**
     * Move the element to the partition of its current position.
     */
    update(element: Element) {
        const data = this._getData(element);

        if (data !== null && data.registered) {
            this._sync(element, data);
        }
    }

    remove(element: Element) {
        const data = this._getData(element);

        if (data === null || !data.registered) {
            return;
        }

        data.registered = false;
        this._elements.delete(element);
        this._sync(element, data);
    }

    checkCollision() {
        const gridSize = this._grid_size;

        // the grid can't change while we're going through it (the elements that change are updated after)
        this._checking = true;

        try {
            for (let column = 0; column < gridSize; column++) {
                for (let line = 0; line < gridSize; line++) {
                    let element = this._grid[column][line];

                    for (
                        ;
                        element !== null;
                        element = element.collision_data.next
                    ) {
                        this.checkElement(element, element.collision_data.next);

                        // try neighbor partitions as well
                        if (column > 0 && line > 0) {
                            this.checkElement(
                                element,
                                this._grid[column - 1][line - 1],
                            );
                        }

                        if (column > 0) {
                            this.checkElement(
                                element,
                                this._grid[column - 1][line],
                            );
                        }

                        if (line > 0) {
                            this.checkElement(
                                element,
                                this._grid[column][line - 1],
                            );
                        }

                        if (column > 0 && line < gridSize - 1) {
                            this.checkElement(
                                element,
                                this._grid[column - 1][line + 1],
                            );
                        }
                    }
                }
            }
        } finally {
            this._checking = false;

            const pending = Array.from(this._pending);
            this._pending.clear();

            for (const element of pending) {
                const data = this._getData(element);

                if (data !== null) {
                    this._sync(element, data);
                }
            }
        }
    }

    /**
     * @param element The element to be compared with.
     * @param other First element of the partition linked list.
     */
    checkElement(element: Element, other: Element | null) {
        for (; other !== null; other = other.collision_data.next) {
            // check every time, since a collision listener may have removed it (then it doesn't collide with anything else)
            if (!this._canCollide(element)) {
                return;
            }

            if (!this._canCollide(other)) {
                continue;
            }

            const elementCollidesWithOther =
                (element.collidesWith & other.category) !== 0;
            const otherCollidesWithElement =
                (other.collidesWith & element.category) !== 0;

            // check if they can collide with each other
            if (elementCollidesWithOther || otherCollidesWithElement) {
                if (element.checkCollision(other)) {
                    // we'll only dispatch the event for the ones that care about it
                    // (both get it, even if the first listener removes one of them)
                    if (elementCollidesWithOther) {
                        element.dispatchEvent("collision", {
                            element: element,
                            collidedWith: other,
                        });
                    }

                    if (otherCollidesWithElement) {
                        other.dispatchEvent("collision", {
                            element: other,
                            collidedWith: element,
                        });
                    }
                }
            }
        }
    }

    /**
     * Remove all the elements (the object can still be used).
     */
    clear() {
        for (const element of [...this._elements, ...this._pending]) {
            const data = this._getData(element);

            if (data !== null) {
                data.registered = false;
                data.column = -1;
                data.line = -1;
                data.previous = null;
                data.next = null;
            }
        }

        this._elements.clear();
        this._pending.clear();

        for (let column = 0; column < this._grid_size; column++) {
            this._grid[column].fill(null);
        }
    }

    /**
     * The element's data, if it was created by this object.
     */
    protected _getData(element: Element): PartitionData | null {
        const data = element.collision_data;

        if (data && data.owner === this) {
            return data as PartitionData;
        }

        return null;
    }

    /**
     * If the element is still part of the collision detection (it may have been removed by a collision listener).
     */
    protected _canCollide(element: Element) {
        return (
            element.category !== 0 &&
            !element._destroyed &&
            element.collision_data.registered
        );
    }

    /**
     * Put the element in the cell of its current position, or take it out of the grid (when it's no longer registered, or is outside the canvas).
     */
    protected _sync(element: Element, data: PartitionData) {
        if (this._checking) {
            this._pending.add(element);
            return;
        }

        let column = -1;
        let line = -1;

        if (data.registered) {
            const cell = this._getCell(element);

            if (cell !== null) {
                column = cell.column;
                line = cell.line;
            }
        }

        if (column === data.column && line === data.line) {
            return;
        }

        this._unlink(element, data);

        if (column >= 0) {
            this._link(element, data, column, line);
        }
    }

    /**
     * The cell of the element's center position.
     * An element whose center is just outside the canvas (in the ring of cells around the grid) can still overlap elements inside,
     * so its put in the closest cell of the grid.
     *
     * @return The cell, or `null` when it's too far outside the canvas (or isn't a valid position, like `NaN`).
     */
    protected _getCell(element: Element) {
        const size = this._grid_size;
        const column = Math.floor(element.x / this._partition_width);
        const line = Math.floor(element.y / this._partition_height);

        // written this way so `NaN` is rejected as well
        if (!(column >= -1 && column <= size && line >= -1 && line <= size)) {
            return null;
        }

        return {
            column: Math.min(Math.max(column, 0), size - 1),
            line: Math.min(Math.max(line, 0), size - 1),
        };
    }

    /**
     * Add the element to the start of a cell's linked list.
     */
    protected _link(
        element: Element,
        data: PartitionData,
        column: number,
        line: number,
    ) {
        const first = this._grid[column][line];

        data.column = column;
        data.line = line;
        data.previous = null;
        data.next = first;

        if (first) {
            first.collision_data.previous = element;
        }

        this._grid[column][line] = element;
    }

    /**
     * Take the element out of its cell's linked list (if it's in one).
     */
    protected _unlink(element: Element, data: PartitionData) {
        if (data.column < 0) {
            return;
        }

        const previous = data.previous;
        const next = data.next;

        if (previous) {
            previous.collision_data.next = next;
        }

        if (next) {
            next.collision_data.previous = previous;
        }

        if (this._grid[data.column][data.line] === element) {
            this._grid[data.column][data.line] = next;
        }

        data.column = -1;
        data.line = -1;
        data.previous = null;
        data.next = null;
    }
}
