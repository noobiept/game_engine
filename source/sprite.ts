import { Bitmap, BitmapArgs } from "./bitmap";

export interface SpriteArgs extends BitmapArgs {
    frameWidth: number;
    frameHeight: number;

    // if 'animations' is provided, then the rest of the optional arguments are required (only optional for non-animation)
    animations?: { [id: string]: number[] };
    interval?: number;
}

function copyAnimations(animations: { [id: string]: number[] }) {
    const copy: { [id: string]: number[] } = {};

    for (const id of Object.keys(animations)) {
        copy[id] = animations[id].slice();
    }

    return copy;
}

export interface SpritePlayOptions {
    loop?: boolean; // whether the animation loops (default) or plays once
    reset?: boolean; // when re-playing the current animation, restart it from the first frame
}

/**
 * Basic usage:
 *
 *     const sprite = new Game.Sprite({
 *             x: 10,
 *             y: 20,
 *             image: Game.Preload.get( 'id' ),
 *             frameWidth: 30,
 *             frameHeight: 40,
 *             interval: 1,
 *             animations: {
 *                 animationName: [ 0, 1 ]
 *             }
 *         });
 *     Game.addElement( sprite );
 *
 *         // set a static frame
 *     sprite.setFrame( 1 );
 *
 *         // or play a specific animation
 *     sprite.play( 'animationName' );
 *
 *         // play a one-shot animation and do something when it finishes
 *     sprite.play( 'explosion', { loop: false } );
 *     sprite.addEventListener( 'animationend', function( data ) {
 *         data.sprite.destroy();
 *     });
 *
 * Events:
 *
 * - `animationend` -- `listener( data: { sprite: Sprite; animationId: string; } );`
 *   Dispatched when a non-looping animation (played with `{ loop: false }`) reaches its last frame.
 *
 * Examples -- `clone`, `sprite`
 */
export class Sprite extends Bitmap {
    interval: number; // time between each frame
    protected _count_interval: number; // count time to compare with the set interval

    protected _frames_per_line: number;

    protected _animations: { [id: string]: number[] };
    protected _current_animation: number[] | null;
    protected _current_animation_id: string | null;
    protected _current_animation_position: number; // position in the array in '_current_animation'
    protected _loop: boolean; // whether the current animation loops or plays once

    constructor(args: SpriteArgs) {
        super(args);

        this._width = args.frameWidth;
        this._height = args.frameHeight;
        this._half_width = args.frameWidth / 2;
        this._half_height = args.frameHeight / 2;

        this._frames_per_line = Math.floor(args.image.width / args.frameWidth);

        this._current_animation_position = 0;
        this._count_interval = 0;
        this._current_animation = null;
        this._current_animation_id = null;
        this._loop = true;

        this.setFrame(0);

        // no animation set
        if (typeof args.animations === "undefined") {
            this._animations = {};
            this.interval = 1;
        } else {
            this._animations = args.animations;
            this.interval = args.interval ?? 1;
        }
    }

    /**
     * Show a specific frame of the sprite.
     *
     * @param frame The position of the frame.
     */
    setFrame(frame: number) {
        const line = Math.floor(frame / this._frames_per_line);
        const column = frame - line * this._frames_per_line;

        this._source_x = column * this._width;
        this._source_y = line * this._height;
    }

    /**
     * Play a previously set animation.
     *
     * @param animationId The name of the animation.
     * @param options Playback options. `loop` (default `true`) controls whether the animation loops or plays
     *                once (dispatching an `animationend` event on the last frame). `reset` (default `false`)
     *                restarts the animation from the first frame when its already the current one.
     * @return If it was successful.
     */
    play(animationId: string, options?: SpritePlayOptions) {
        // doesnt't exist an animation with the given id (only its own properties, not inherited ones like `toString`)
        if (
            !Object.prototype.hasOwnProperty.call(this._animations, animationId)
        ) {
            return false;
        }

        const next = this._animations[animationId];

        if (!Array.isArray(next) || next.length === 0) {
            return false;
        }

        const loop = options?.loop ?? true;
        const reset = options?.reset ?? false;

        // we're already playing that animation (and it didn't finish yet)
        if (next === this._current_animation && this._has_logic) {
            this._loop = loop;

            if (reset === true) {
                this._current_animation_position = 0;
                this._count_interval = 0;
                this.setFrame(next[0]);
            }

            return true;
        }

        this._current_animation = next;
        this._current_animation_id = animationId;
        this._current_animation_position = 0;
        this._count_interval = 0;
        this._loop = loop;

        this._has_logic = true;

        this.setFrame(next[this._current_animation_position]);

        return true;
    }

    /**
     * Stop the animation. Will keep the current frame displayed.
     */
    stop() {
        this._has_logic = false;
    }

    /**
     * Change to the next frame.
     * When looping (the default), wraps back to the first frame after the last one.
     * When not looping, stops on the last frame and dispatches the `animationend` event.
     */
    nextFrame() {
        if (this._current_animation === null) {
            return;
        }

        this._current_animation_position++;

        if (
            this._current_animation_position >= this._current_animation.length
        ) {
            if (this._loop) {
                this._current_animation_position = 0;
            } else {
                // stop on the last frame and notify listeners
                this._current_animation_position =
                    this._current_animation.length - 1;
                this._has_logic = false;

                this.setFrame(
                    this._current_animation[this._current_animation_position],
                );

                this.dispatchEvent("animationend", {
                    sprite: this,
                    animationId: this._current_animation_id,
                });

                return;
            }
        }

        this.setFrame(
            this._current_animation[this._current_animation_position],
        );
    }

    /**
     * Changes the current sprite frame, based on the interval set.
     * When more than one interval passed since the last update, it advances that many frames (so the animation keeps its speed).
     *
     * @param deltaTime Time elapsed since the last update.
     */
    override logic(deltaTime: number) {
        const animation = this._current_animation;

        if (animation === null) {
            return;
        }

        // no interval, change the frame on every update
        if (!(this.interval > 0)) {
            this.nextFrame();
            return;
        }

        this._count_interval += deltaTime;

        if (this._count_interval < this.interval) {
            return;
        }

        // keep the time past the interval, so the animation doesn't fall behind
        let frames = Math.floor(this._count_interval / this.interval);
        this._count_interval = Math.max(
            this._count_interval - frames * this.interval,
            0,
        );

        // whole loops of the animation end up on the same frame
        if (this._loop) {
            frames %= animation.length;
        }

        // a non-looping animation stops (no logic) once it reaches the last frame
        while (frames > 0 && this._has_logic) {
            frames--;
            this.nextFrame();
        }
    }

    /**
     * @return A cloned sprite object.
     */
    override clone() {
        const element = new Sprite({
            x: this.x,
            y: this.y,
            image: this.image,
            frameWidth: this._width,
            frameHeight: this._height,
            animations: copyAnimations(this._animations),
            interval: this.interval,
        });
        this._copyPropertiesTo(element);

        return element;
    }
}
