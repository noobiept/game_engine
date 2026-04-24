import { CollisionDetectionAlgorithm } from "./collision_detection";
import { Element } from "../element";

/**
 * Useful when there's a small number of elements in the game.
 */
export class CheckAll implements CollisionDetectionAlgorithm {
    _elements: Element[];

    constructor() {
        this._elements = [];
    }

    add(element: Element) {
        this._elements.push(element);
    }

    update(element: Element) {
        // no need to update
    }

    remove(element: Element) {
        const index = this._elements.indexOf(element);

        this._elements.splice(index, 1);
    }

    /**
     * Checks the collision between all the elements provided.
     */
    checkCollision() {
        const elements = this._elements;
        const length = elements.length;

        for (let a = 0; a < length - 1; a++) {
            const one = elements[a];

            if (one._removed || one.category === 0) {
                continue;
            }

            for (let b = a + 1; b < length; b++) {
                const two = elements[b];

                if (two._removed || two.category === 0) {
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
                    }
                }
            }
        }
    }

    clear() {
        this._elements.length = 0;
    }
}
