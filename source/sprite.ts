import { Bitmap, BitmapArgs } from "./bitmap";

export interface SpriteArgs extends BitmapArgs {
    frameWidth: number;
    frameHeight: number;

    // if 'animations' is provided, then the rest of the optional arguments are required (only optional for non-animation)
    animations?: { [id: string]: number[] };
    interval?: number;
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
 *         data.sprite.remove();
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
        const next = this._animations[animationId];

        // doesnt't exist an animation with the given id
        if (!next) {
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
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic(deltaTime: number) {
        this._count_interval += deltaTime;

        if (this._count_interval >= this.interval) {
            this._count_interval = 0;

            this.nextFrame();
        }
    }

    /**
     * @return A cloned sprite object.
     */
    clone() {
        const element = new Sprite({
            x: this.x,
            y: this.y,
            image: this.image,
            frameWidth: this._width,
            frameHeight: this._height,
            animations: this._animations,
            interval: this.interval,
        });
        element.opacity = this.opacity;
        element.visible = this.visible;
        element.scaleX = this.scaleX;
        element.scaleY = this.scaleY;
        element._rotation = this._rotation;

        return element;
    }
}
