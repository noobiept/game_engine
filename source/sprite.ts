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

        this.width = args.frameWidth;
        this.height = args.frameHeight;
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

    setFrame( frame )
        {
        var line = Math.floor( frame / this._frames_per_line );
        var column = frame - line * this._frames_per_line;

        this._source_x = column * this.width;
        this._source_y = line * this.height;
        }


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


    nextFrame()
        {
        this._current_animation_position++;

        if ( this._current_animation_position >= this._current_animation.length )
            {
            this._current_animation_position = 0;
            }

        this.setFrame( this._current_animation[ this._current_animation_position ] );
        }


    logic( deltaTime )
        {
        this._count_interval += deltaTime;

        if ( this._count_interval >= this.interval )
            {
            this._count_interval = 0;

            this.nextFrame();
            }
        }
    }
}