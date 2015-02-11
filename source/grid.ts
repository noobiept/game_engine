/// <reference path="event_dispatcher.ts" />

module Game
{
export interface GridArgs extends EventDispatcherArgs
    {
        squareSize: number;
        columns: number;
        lines: number;
        refX?: number;
        refY?: number;
        background?: { color: string; fill: boolean; };
    }

export class Grid extends EventDispatcher
    {
    _grid: Element[][];
    columns: number;
    lines: number;
    square_size: number;
    ref_x: number;
    ref_y: number;
    _background: Rectangle;

    constructor( args: GridArgs )
        {
        super( args );

        this._grid = [];

        for (var column = 0 ; column < args.columns ; column++)
            {
            this._grid[ column ] = [];

            for (var line = 0 ; line < args.lines ; line++)
                {
                this._grid[ column ][ line ] = null;
                }
            }


        if ( typeof args.refX === 'undefined' )
            {
            args.refX = 0;
            }

        if ( typeof args.refY === 'undefined' )
            {
            args.refY = 0;
            }

        if ( typeof args.background !== 'undefined' )
            {
            var width = args.squareSize * args.columns;
            var height = args.squareSize * args.lines;

            this._background = new Game.Rectangle({
                    x: args.refX + width / 2 - args.squareSize / 2,
                    y: args.refY + height / 2 - args.squareSize / 2,
                    width: width,
                    height: height,
                    color: args.background.color,
                    fill: args.background.fill
                });
            Game.addElement( this._background );
            }

        else
            {
            this._background = null;
            }

        this.square_size = args.squareSize;
        this.columns = args.columns;
        this.lines = args.lines;
        this.ref_x = args.refX;
        this.ref_y = args.refY;
        }

    toCanvas( column: number, line: number )
        {
        return {
                x: this.ref_x + column * this.square_size,
                y: this.ref_y + line * this.square_size
            };
        }

    toGrid( x, y )
        {
        return {
                column: Math.round( (x - this.ref_x) / this.square_size ),
                line: Math.round( (y - this.ref_y) / this.square_size )
            };
        }

    add( element, column, line )
        {
        if ( column < 0 )
            {
            column = 0;
            }

        else if ( column >= this.columns )
            {
            column = this.columns - 1;
            }

        if ( line < 0 )
            {
            line = 0;
            }

        else if ( line >= this.lines )
            {
            line = this.lines - 1;
            }

        var previous = this._grid[ column ][ line ];

        this._grid[ column ][ line ] = element;

        var canvasPosition = this.toCanvas( column, line );

        element.x = canvasPosition.x;
        element.y = canvasPosition.y;

        if ( previous !== null )
            {
            this.dispatchEvent( 'collision', {
                    element: element,
                    collidedWith: previous
                });
            }

        return previous;
        }


    /*
        move an element to a different position in the grid
     */
    move( sourceColumn, sourceLine, destColumn, destLine )
        {
        var element = this._grid[ sourceColumn ][ sourceLine ];

        if ( element === null )
            {
            return null;
            }

        var previous = this._grid[ destColumn ][ destLine ];

        this._grid[ destColumn ][ destLine ] = element;
        this._grid[ sourceColumn ][ sourceLine ] = null;

        var canvasPosition = this.toCanvas( destColumn, destLine );

        element.x = canvasPosition.x;
        element.y = canvasPosition.y;

        if ( previous !== null )
            {
            this.dispatchEvent( 'collision', {
                    element: element,
                    collidedWith: previous
                });
            }

        return previous;
        }

    removeElement( column, line )
        {
        var previous = this._grid[ column ][ line ];

        this._grid[ column ][ line ] = null;

        return previous;
        }

    get( column, line )
        {
        return this._grid[ column ][ line ];
        }

    isEmpty( column, line )
        {
        if ( this._grid[ column ][ line ] )
            {
            return false;
            }

        return true;
        }

    normalizePosition( column, line )
        {
        if ( column < 0 )
            {
            column = 0;
            }

        else if ( column >= this.columns )
            {
            column = this.columns - 1;
            }


        if ( line < 0 )
            {
            line = 0;
            }

        else if ( line >= this.lines )
            {
            line = this.lines - 1;
            }

        return {
                column: column,
                line: line
            }
        }

    /*
        If this position is valid for this grid (is within it)
     */
    isInGrid( column, line )
        {
        if ( column < 0 ||
             column >= this.columns ||
             line < 0 ||
             line >= this.lines )
            {
            return false;
            }

        return true;
        }


    getRandomPosition()
        {
        return {
                column: Utilities.getRandomInt( 0, this.columns - 1 ),
                line: Utilities.getRandomInt( 0, this.lines - 1 )
            }
        }


    getRandomEmptyPosition( tries: number )
        {
        for ( ; tries > 0 ; tries--)
            {
            var position = this.getRandomPosition();

            if ( this.isEmpty( position.column, position.line ) )
                {
                return position;
                }
            }

        return null;
        }

    getDimensions()
        {
        return {
                x: this.ref_x,
                y: this.ref_y,
                width: this.square_size * this.columns,
                height: this.square_size * this.lines
            }
        }

    remove()
        {
        if ( this._background !== null )
            {
            this._background.remove();
            }
        }
    }
}