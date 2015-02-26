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
            args.refX = args.squareSize / 2;
            }

        if ( typeof args.refY === 'undefined' )
            {
            args.refY = args.squareSize / 2;
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


    addElement( element, column, line )
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
        element.column = column;
        element.line = line;

        if ( previous !== null )
            {
            this.dispatchEvent( 'collision', {
                    element: element,
                    collidedWith: previous
                });
            }

        return previous;
        }


    moveElement( element, destColumn, destLine, duration? )
        {
        return this.movePosition( element.column, element.line, destColumn, destLine, duration );
        }

    /*
        move an element to a different position in the grid
     */
    movePosition( sourceColumn, sourceLine, destColumn, destLine, duration? )
        {
        var element = this._grid[ sourceColumn ][ sourceLine ];
        var previous = this._grid[ destColumn ][ destLine ];

        if ( element === null ||
             element === previous )
            {
            return null;
            }


        this._grid[ destColumn ][ destLine ] = element;
        this._grid[ sourceColumn ][ sourceLine ] = null;

        var canvasPosition = this.toCanvas( destColumn, destLine );

        element.column = destColumn;
        element.line = destLine;

            // move immediately
        if ( typeof duration === 'undefined' || duration <= 0 )
            {
            element.x = canvasPosition.x;
            element.y = canvasPosition.y;
            }

            // use a tween for the animation
        else
            {
            var tween = new Game.Tween( element );

            tween.to({
                    x: canvasPosition.x,
                    y: canvasPosition.y
                }, duration );
            tween.start();
            }


        if ( previous !== null )
            {
            previous.column = -1;
            previous.line = -1;

            this.dispatchEvent( 'collision', {
                    element: element,
                    collidedWith: previous
                });
            }

        return previous;
        }


    removeElement( element )
        {
        return this.removePosition( element.column, element.line );
        }


    removePosition( column, line )
        {
        if ( !this.isInGrid( column, line ) )
            {
            return null;
            }

        var previous = this._grid[ column ][ line ];

        this._grid[ column ][ line ] = null;

        if ( previous !== null )
            {
            previous.column = -1;
            previous.line = -1;
            }

        return previous;
        }


    getElement( column, line )
        {
        if ( !this.isInGrid( column, line ) )
            {
            return null;
            }

        var element = this._grid[ column ][ line ];

        if ( !element )
            {
            return null;
            }

        return element;
        }


    getElement2( x, y )
        {
        var position = this.toGrid( x, y );

        return this.getElement( position.column, position.line );
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


    getRandomEmptyPosition()
        {
        var empty = this.getEmptyPositions();

        if ( empty.length > 0 )
            {
            var index = Utilities.getRandomInt( 0, empty.length - 1 );

            return empty[ index ];
            }

        return null;
        }

    getEmptyPositions()
        {
        var emptyPositions = [];

        for (var column = 0 ; column < this.columns ; column++)
            {
            for (var line = 0 ; line < this.lines ; line++)
                {
                if ( this._grid[ column ][ line ] === null )
                    {
                    emptyPositions.push({
                            column: column,
                            line: line
                        });
                    }
                }
            }

        return emptyPositions;
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

    /*
        Clear grid related elements etc

        Called when we don't need the grid anymore
     */
    clear()
        {
        if ( this._background !== null )
            {
            this._background.remove();
            }
        }

    /*
        Get the neighbor elements around the position given
     */
    getNeighbors( refColumn, refLine, range? )
        {
        if ( typeof range === 'undefined' )
            {
            range = 1;
            }

        var neighbors = [];
        var start = this.normalizePosition( refColumn - range, refLine - range );
        var end = this.normalizePosition( refColumn + range, refLine + range );
        var element;

        for (var column = start.column ; column <= end.column ; column++)
            {
            for (var line = start.line ; line <= end.line ; line++)
                {
                    // don't include the reference position
                if ( !(column === refColumn && line === refLine) )
                    {
                    element = this.getElement( column, line );

                    if ( element !== null )
                        {
                        neighbors.push( element );
                        }
                    }
                }
            }

        return neighbors;
        }
    }
}