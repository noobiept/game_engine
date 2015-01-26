module Game
{
export interface SpriteArgs
    {
        x: number;
        y: number;
        image: HTMLImageElement;
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

    _animations: { [id: string]: number[] };
    _current_animation: number[];
    _current_animation_position: number;    // position in the array in '_current_animation'

    constructor( args: SpriteArgs )
        {
        super( args.x, args.y, args.image );

        this.width = args.frameWidth;
        this.height = args.frameHeight;

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
        this._source_x = frame * this.width;
        this._source_y = 0; //HERE -- work with not just frames in a single horizontal line, but with several vertical lines (4x1/2x2/etc)
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