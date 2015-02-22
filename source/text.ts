/// <reference path="element.ts" />

module Game
{
export interface TextArgs extends ElementArgs
    {
        text?: string;
        fontFamily?: string;
        fontSize?: number;
        timeout?: number;
        textAlign?: string;
        textBaseline?: string;
        fill?: boolean;
    }

export class Text extends Element
    {
    textAlign: string;
    textBaseline: string;
    fill: boolean;  // fill or stroke text

    _text: string;
    _font_family: string;
    _font_size: number;
    _font: string;   // font_family + font_size
    _timeout: number;
    _lines: string[];


    constructor( args: TextArgs )
        {
        var _this = this;

        if ( typeof args.text === 'undefined' )
            {
            args.text = '';
            }

        if ( typeof args.fontFamily === 'undefined' )
            {
            args.fontFamily = 'monospace';
            }

        if ( typeof args.fontSize === 'undefined' )
            {
            args.fontSize = 20;
            }

        if ( typeof args.textAlign === 'undefined' )
            {
            args.textAlign = 'start';
            }

        if ( typeof args.textBaseline === 'undefined' )
            {
            args.textBaseline = 'top';
            }

        if ( typeof args.fill === 'undefined' )
            {
            args.fill = true;
            }

        super( args );

        this._font_size = args.fontSize;
        this.text = args.text;
        this.font_family = args.fontFamily;  // this calls the set method that updates ._font as well

        this.textAlign = args.textAlign;
        this.textBaseline = args.textBaseline;
        this.fill = args.fill;
        this._timeout = args.timeout;

        if ( Utilities.isNumber( args.timeout ) && args.timeout > 0 )
            {
            var timeout = new Utilities.Timeout();

            timeout.start( function()
                {
                _this.remove();
                }, args.timeout * 1000 );
            }
        }


    drawElement( ctx )
        {
        ctx.save();
        ctx.globalAlpha *= this.opacity;
        ctx.font = this._font;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.textBaseline;

        var length = this._lines.length;

            // draw each line
        for (var a = 0 ; a < length ; a++)
            {
            var y = this.y + a * this.font_size;

            if ( this.fill )
                {
                ctx.fillText( this._lines[ a ], this.x, y );
                }

            else
                {
                ctx.strokeText( this._lines[ a ], this.x, y );
                }
            }

        ctx.restore();
        }


    set text( value: string )
        {
        this._text = value;
        this._lines = this._text.split( '\n' );

        var ctx = Game.getCanvasContext();

        var line = this._lines[ 0 ];
        var highestWidth = ctx.measureText( line ).width;
        var width;
        var length = this._lines.length;

        for (var a = 1 ; a < length ; a++)
            {
            line = this._lines[ a ];

            width = ctx.measureText( line ).width;

            if ( width > highestWidth )
                {
                highestWidth = width;
                }
            }

        this.width = highestWidth;
        this.height = this.font_size * length;     // 'font_size' not quite the same thing as height, but there's no way to determine the height right now so..
        }

    get text()
        {
        return this._text;
        }


    set font_family( font: string )
        {
        this._font_family = font;
        this._font = this._font_size + 'px ' + font;
        }

    get font_family()
        {
        return this._font_family;
        }


    set font_size( size: number )
        {
        this._font_size = size;
        this._font = size + 'px ' + this._font_family;
        }

    get font_size()
        {
        return this._font_size;
        }

    clone()
        {
        return new Game.Text({
                x: this.x,
                y: this.y,
                text: this._text,
                fontFamily: this._font_family,
                fontSize: this._font_size,
                timeout: this._timeout,
                textAlign: this.textAlign,
                textBaseline: this.textBaseline,
                fill: this.fill
            });
        }
    }
}