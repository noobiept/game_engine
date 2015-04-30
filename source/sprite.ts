/// <reference path="bitmap.ts" />

module Game
{
export interface SpriteArgs extends BitmapArgs
    {
    frameWidth: number;
    frameHeight: number;

       // if 'animations' is provided, then the rest of the optional arguments are required (only optional for non-animation)
    animations?: { [id: string]: number[] };
    interval?: number;
    }


/**
 * Basic usage:
 *
 *     var sprite = new Game.Sprite({
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
 * Events:
 *
 * - `click` -- `listener( data: { event: MouseEvent; } );`
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup` -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
 *
 * Examples -- `clone`, `sprite`
 */
export class Sprite extends Bitmap
    {
    interval: number;           // time between each frame
    _count_interval: number;    // count time to compare with the set interval

    _frames_per_line: number;

    _animations: { [id: string]: number[] };
    _current_animation: number[];
    _current_animation_position: number;    // position in the array in '_current_animation'

    constructor( args: SpriteArgs )
        {
        super( args );

        this._width = args.frameWidth;
        this._height = args.frameHeight;
        this._half_width = args.frameWidth / 2;
        this._half_height = args.frameHeight / 2;

        this._frames_per_line = Math.floor( args.image.width / args.frameWidth );

        this._current_animation_position = 0;
        this._count_interval = 0;

        this.setFrame( 0 );

        if ( typeof args.animations === 'undefined' )
            {
            this._animations = {};
            this.interval = 1;
            }

        else
            {
            this._animations = args.animations;
            this.interval = args.interval;
            }
        }


    /**
     * Show a specific frame of the sprite.
     *
     * @param frame The position of the frame.
     */
    setFrame( frame: number )
        {
        var line = Math.floor( frame / this._frames_per_line );
        var column = frame - line * this._frames_per_line;

        this._source_x = column * this._width;
        this._source_y = line * this._height;
        }


    /**
     * Play a previously set animation.
     *
     * @param animationId The name of the animation.
     * @return If it was successful.
     */
    play( animationId: string )
        {
        this._current_animation = this._animations[ animationId ];

        if ( !this._current_animation )
            {
            return false;
            }

        this._has_logic = true;

        this._current_animation_position = 0;

        this.setFrame( this._current_animation[ this._current_animation_position ] );

        return true;
        }


    /**
     * Change to the next frame. If we're on the last frame then it changes to the first one (frame 0).
     */
    nextFrame()
        {
        this._current_animation_position++;

        if ( this._current_animation_position >= this._current_animation.length )
            {
            this._current_animation_position = 0;
            }

        this.setFrame( this._current_animation[ this._current_animation_position ] );
        }


    /**
     * Changes the current sprite frame, based on the interval set.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic( deltaTime: number )
        {
        this._count_interval += deltaTime;

        if ( this._count_interval >= this.interval )
            {
            this._count_interval = 0;

            this.nextFrame();
            }
        }


    /**
     * @return A cloned sprite object.
     */
    clone()
        {
        var element = new Game.Sprite({
                x: this.x,
                y: this.y,
                image: this.image,
                frameWidth: this._width,
                frameHeight: this._height,
                animations: this._animations,
                interval: this.interval
            });
        element.opacity = this.opacity;
        element.visible = this.visible;
        element.scaleX = this.scaleX;
        element.scaleY = this.scaleY;
        element._rotation = this._rotation;

        return element;
        }
    }
}