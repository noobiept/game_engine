module Game
{
export class Text extends Element
    {
    _text: string;
    _font_family: string;
    _font_size: number;
    _font: string;   // font_family + font_size
    textAlign: string;
    fill: boolean;  // fill or stroke text


    constructor( text: string, fontFamily: string, fontSize: number )
        {
        super();

        this._font_size = fontSize;
        this.text = text;
        this.font_family = fontFamily;  // this calls the set method that updates ._font as well

        this.height = fontSize;     // not quite the same thing, but there's no way to determine the height right now so..
        this.textAlign = 'start';
        this.fill = true;
        }


    drawElement( ctx )
        {
        ctx.save();
        ctx.font = this._font;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = 'top';

        if ( this.fill )
            {
            ctx.fillText( this._text, this.x, this.y );
            }

        else
            {
            ctx.strokeText( this._text, this.x, this.y );
            }

        ctx.restore();
        }

    set text( value: string )
        {
        this._text = value;

        var textMetrics = Game.getCanvasContext().measureText( value );

        this.width = textMetrics.width;
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
    }
}