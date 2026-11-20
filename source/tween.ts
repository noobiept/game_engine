import { hasReached } from "./time";

export enum TweenAction {
    properties,
    wait,
    call,
}

type TweenProperties = Record<string, number>;

export interface TweenArgs {
    // `true` removes the target's other tweens when this one is created. `"properties"` only takes the properties this
    // tween animates out of the target's other tweens when it starts (they keep animating the rest, and their `.call()`
    // steps still run).
    override?: boolean | "properties";
}

export type TweenStep =
    | {
          action: TweenAction.properties;
          duration: number;
          end_properties: TweenProperties;
          ease: (value: number) => number;
      }
    | {
          action: TweenAction.wait;
          duration: number;
      }
    | {
          action: TweenAction.call;
          callback: () => any;
      };

/**
 * Basic Usage:
 *
 *     const rectangle = new Game.Rectangle({
 *             x: 10,
 *             y: 10,
 *             width: 10,
 *             height: 10,
 *             color: 'green'
 *         });
 *     Game.addElement( rectangle );
 *
 *     const tween = new Game.Tween( rectangle );
 *
 *     tween.to( { x: 200 }, 2 ).wait( 1 ).call( function()
 *         {
 *         console.log( 'Finished!' );
 *         }).start();
 *
 * When two tweens set the same property at once, the newest one's value is the one that stays, but the older one
 * keeps running until it ends. To start a move from where the element is (a new move per key press), while its other
 * tweens keep going (a fade-in), use `override: "properties"`:
 *
 *     new Game.Tween( block, { override: 'properties' } ).to( { x: 200, y: 100 }, 0.1 ).start();
 *
 * Examples -- `2048`, `basic_example`, `clone`, `multiple_canvas`, `tween`
 */
export class Tween {
    static _tweens: Tween[] = [];

    protected _element: Record<string, any>;
    protected _steps: TweenStep[];
    protected _current_step: TweenStep | null;
    protected _start_properties: TweenProperties | null;
    protected _count: number;
    protected _update: ((delta: number) => any) | null;
    protected _active: boolean; // if it's in the list of tweens being updated
    protected _override_properties: boolean; // take this tween's properties out of the element's other tweens when it starts

    constructor(element: object, options?: TweenArgs) {
        // remove any existing tweens on the target (`this` isn't registered yet, so it won't remove itself)
        if (options?.override === true) {
            Tween.removeTweens(element);
        }

        this._override_properties = options?.override === "properties";

        this._element = element as Record<string, any>;
        this._steps = [];
        this._current_step = null;
        this._start_properties = null;
        this._count = 0;
        this._update = null;
        this._active = false;
    }

    /**
     * Start the tween animation.
     */
    start() {
        if (this._override_properties) {
            this._overrideProperties();
        }

        if (!this._active) {
            this._active = true;
            Tween._tweens.push(this);
        }

        this.nextStep();
    }

    /**
     * Set the end value of some properties, and the animation duration.
     *
     * @param properties The `key` is the element's properties we want to animate, and the `value` is the value that property will have at the end of the animation.
     * @param duration Duration of the animation.
     * @param ease Ease function, that describes how the value of the property will progress between the animation.
     * @return The tween object for chaining.
     */
    to(
        properties: TweenProperties,
        duration: number,
        ease?: (value: number) => number,
    ) {
        if (typeof ease === "undefined") {
            ease = Tween.Ease.linear;
        }

        this._steps.push({
            action: TweenAction.properties,
            end_properties: { ...properties }, // a copy, since `override: "properties"` can take properties out of it
            duration: duration,
            ease: ease,
        });

        return this;
    }

    /**
     * Wait for some time doing nothing.
     *
     * @param duration Duration of the wait.
     * @return The tween object for chaining.
     */
    wait(duration: number) {
        this._steps.push({
            action: TweenAction.wait,
            duration: duration,
        });

        return this;
    }

    /**
     * Call a given function.
     *
     * @param callback The function to be called.
     * @return The tween object for chaining.
     */
    call(callback: () => any) {
        this._steps.push({
            action: TweenAction.call,
            callback: callback,
        });

        return this;
    }

    /**
     * Take the properties this tween animates out of the element's other tweens (for `override: "properties"`).
     */
    protected _overrideProperties() {
        const properties = new Set<string>();

        for (const step of this._steps) {
            if (step.action === TweenAction.properties) {
                for (const property in step.end_properties) {
                    properties.add(property);
                }
            }
        }

        for (const tween of Tween._tweens) {
            if (tween !== this && tween._element === this._element) {
                tween._removeProperties(properties);
            }
        }
    }

    /**
     * Stop animating some properties. A step left with nothing to animate still takes its time, so the steps after it
     * (a `.call()`) keep their timing.
     */
    protected _removeProperties(properties: Set<string>) {
        const current = this._current_step;

        if (current?.action === TweenAction.properties) {
            for (const property of properties) {
                delete current.end_properties[property];
                delete this._start_properties?.[property];
            }
        }

        for (let a = 0; a < this._steps.length; a++) {
            const step = this._steps[a];

            if (step.action !== TweenAction.properties) {
                continue;
            }

            for (const property of properties) {
                delete step.end_properties[property];
            }

            if (Object.keys(step.end_properties).length === 0) {
                this._steps[a] = {
                    action: TweenAction.wait,
                    duration: step.duration,
                };
            }
        }
    }

    /**
     * Remove the tween (it stops, and the remaining steps aren't run).
     */
    remove() {
        const index = Tween._tweens.indexOf(this);

        if (index >= 0) {
            Tween._tweens.splice(index, 1);
        }

        this._deactivate();
    }

    /**
     * Stop updating the tween (when it's taken out of the tweens list).
     */
    protected _deactivate() {
        this._active = false;
        this._current_step = null;
        this._update = null;
    }

    /**
     * Move unto the next step in the tween animation.
     *
     * @param leftover Time (in seconds) left over from the previous step, which is applied to this step (so the steps don't fall behind).
     */
    nextStep(leftover = 0) {
        const step = this._steps.shift();

        if (!step) {
            this.remove();
            return;
        }

        this._current_step = step;

        if (step.action === TweenAction.call) {
            step.callback();

            // the callback may have removed the tween
            if (this._active) {
                this.nextStep(leftover);
            }
        } else if (step.action === TweenAction.wait) {
            this._count = 0;
            this._update = this.waitUpdate;

            if (leftover > 0) {
                this.waitUpdate(leftover);
            }
        } else if (step.action === TweenAction.properties) {
            const startProperties: TweenProperties = {};

            for (const property in step.end_properties) {
                startProperties[property] = this._element[property];
            }

            this._start_properties = startProperties;
            this._count = 0;
            this._update = this.propertiesUpdate;

            if (leftover > 0) {
                this.propertiesUpdate(leftover);
            }
        }
    }

    /**
     * .wait() tick logic.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    protected waitUpdate(deltaTime: number) {
        const step = this._current_step;

        if (!step || step.action !== TweenAction.wait) {
            return;
        }

        this._count += deltaTime;

        if (hasReached(this._count, step.duration)) {
            this.nextStep(Math.max(this._count - step.duration, 0));
        }
    }

    /**
     * .to() tick logic.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    protected propertiesUpdate(deltaTime: number) {
        const step = this._current_step;
        const startProperties = this._start_properties;

        if (
            !step ||
            step.action !== TweenAction.properties ||
            !startProperties
        ) {
            return;
        }

        this._count += deltaTime;

        if (hasReached(this._count, step.duration)) {
            // make sure it ends exactly on the end value
            for (const property in step.end_properties) {
                this._element[property] = step.end_properties[property];
            }

            this.nextStep(Math.max(this._count - step.duration, 0));
            return;
        }

        // how far into the complete movement we're in
        const percentage = this._count / step.duration;

        const value = step.ease(percentage);

        for (const property in step.end_properties) {
            const start = startProperties[property];
            const end = step.end_properties[property];

            this._element[property] = start + (end - start) * value;
        }
    }

    /**
     * Returns an existing tween of an element, or null if there's no active tween working on the element.
     *
     * @param element The element that has a tween animation.
     * @return The associated tween object.
     */
    static getTween(element: object) {
        for (let a = Tween._tweens.length - 1; a >= 0; a--) {
            const tween = Tween._tweens[a];

            if (tween._element === element) {
                return tween;
            }
        }

        return null;
    }

    /**
     * Remove all the tweens of an element.
     *
     * @param element The element associated with the tweens we want to remove.
     */
    static removeTweens(element: object) {
        for (let a = Tween._tweens.length - 1; a >= 0; a--) {
            const tween = Tween._tweens[a];

            if (tween._element === element) {
                Tween._tweens.splice(a, 1);
                tween._deactivate();
            }
        }
    }

    /**
     * Remove all the tween animations.
     */
    static removeAll() {
        const tweens = Tween._tweens.splice(0);

        for (const tween of tweens) {
            tween._deactivate();
        }
    }

    /**
     * Gets called in the game loop, to update all the tween animations.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    static update(deltaTime: number) {
        // go through a copy, since the tweens can add/remove tweens (from a `.call()` step for example)
        const tweens = Tween._tweens.slice();

        // from the oldest to the newest, so when two tweens set the same property, the newest one's value is the one
        // that stays (the older one could otherwise take over at its own progress when the newer one is started, and
        // the element jumps once it ends)
        for (const tween of tweens) {
            // skip the ones removed in the meantime
            if (tween._active) {
                tween._update?.(deltaTime);
            }
        }
    }
}

export namespace Tween {
    /**
     * Ease function, that describes how the value of the property will progress between the animation.
     */
    export namespace Ease {
        export function linear(value: number) {
            return value;
        }

        export function quadraticIn(value: number) {
            return value * value;
        }
    }
}
