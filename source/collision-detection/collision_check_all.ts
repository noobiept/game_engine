import { CollisionDetectionAlgorithm } from "./collision_detection";
import { Element } from "../element";

/**
 * Checks every pair of elements. Useful when there's a small number of elements in the game.
 */
export class CheckAll implements CollisionDetectionAlgorithm {
    _elements: Element[];
    protected _registered: Set<Element>;

    constructor() {
        this._elements = [];
        this._registered = new Set();
    }

    add(element: Element) {
        if (this._registered.has(element)) {
            return;
        }

        this._registered.add(element);
        this._elements.push(element);
    }

    update(_element: Element) {
        // no need to update
    }

    remove(element: Element) {
        if (!this._registered.delete(element)) {
            return;
        }

        const index = this._elements.indexOf(element);

        if (index >= 0) {
            this._elements.splice(index, 1);
        }
    }

    /**
     * Checks the collision between all the elements provided.
     */
    checkCollision() {
        // go through a copy, since the collision listeners can add/remove elements
        const elements = this._elements.slice();
        const length = elements.length;

        for (let a = 0; a < length - 1; a++) {
            const one = elements[a];

            if (!this._canCollide(one)) {
                continue;
            }

            for (let b = a + 1; b < length; b++) {
                const two = elements[b];

                if (!this._canCollide(two)) {
                    continue;
                }

                const oneCollidesWithTwo =
                    (one.collidesWith & two.category) !== 0;
                const twoCollidesWithOne =
                    (two.collidesWith & one.category) !== 0;

                // check if they can collide with each other
                if (oneCollidesWithTwo || twoCollidesWithOne) {
                    if (one.checkCollision(two)) {
                        // we'll only dispatch the event for the ones that care about it
                        // (both get it, even if the first listener removes one of them)
                        if (oneCollidesWithTwo) {
                            one.dispatchEvent("collision", {
                                element: one,
                                collidedWith: two,
                            });
                        }

                        if (twoCollidesWithOne) {
                            two.dispatchEvent("collision", {
                                element: two,
                                collidedWith: one,
                            });
                        }

                        // a listener may have removed it, then it doesn't collide with anything else
                        if (!this._canCollide(one)) {
                            break;
                        }
                    }
                }
            }
        }
    }

    /**
     * If the element is still part of the collision detection (it may have been removed by a collision listener).
     */
    protected _canCollide(element: Element) {
        return (
            element.category !== 0 &&
            !element._removed &&
            this._registered.has(element)
        );
    }

    clear() {
        this._elements.length = 0;
        this._registered.clear();
    }
}
