module Game
{
export interface GridArgs
    {
        squareSize: number;
        columns: number;
        lines: number;
        refX?: number;
        refY?: number;
    }

export class Grid
    {
    _grid: Element[][];
    columns: number;
    lines: number;
    square_size: number;
    ref_x: number;
    ref_y: number;

    constructor( args: GridArgs )
        {
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

        return previous;
        }

    remove( column, line )
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
    }
}