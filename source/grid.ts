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
        background?: { color: string; fill: boolean; canvasId?: number; };
    }


/**
 * Basic Usage:
 *
 *     var rectangle = new Game.Rectangle({
 *             width: 10,
 *             height: 10,
 *             color: 'green'
 *         });
 *     Game.addElement( rectangle );
 *
 *     var grid = new Game.Grid({
 *             squareSize: 10,
 *             columns: 20,
 *             lines: 20
 *         });
 *     grid.addElement( rectangle, 10, 10 );
 */
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

            if ( typeof args.background.canvasId === 'undefined' )
                {
                args.background.canvasId = 0;
                }

            Game.getCanvas( args.background.canvasId ).addElement( this._background );
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


    /**
     * Get the equivalent x/y position from a column/line position.
     *
     * @param column The column position.
     * @param line The line position.
     * @return The x/y position.
     */
    toCanvas( column: number, line: number )
        {
        return {
                x: this.ref_x + column * this.square_size,
                y: this.ref_y + line * this.square_size
            };
        }


    /**
     * Get the equivalent column/line position from a x/y position.
     *
     * @param x The x position.
     * @param y The y position.
     * @return The column/line position.
     */
    toGrid( x: number, y: number )
        {
        return {
                column: Math.round( (x - this.ref_x) / this.square_size ),
                line: Math.round( (y - this.ref_y) / this.square_size )
            };
        }


    /**
     * Add an `Element` to a grid position.
     *
     * @param element The element to be added.
     * @param column The column position.
     * @param line The line position.
     * @return The previous element that was in that position (or `null` if there wasn't one).
     */
    addElement( element: Element, column: number, line: number )
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


    /**
     * Move an element from one grid position to another (the element needs to be already in the grid).
     *
     * @param element The element to be moved.
     * @param destColumn The destination column position.
     * @param destLine The destination line position.
     * @param duration If duration >0, then a tween animation is going to be applied to the movement.
     * @return The previous element that was in the destination position (or null if there wasn't one).
     */
    moveElement( element: Element, destColumn: number, destLine: number, duration?: number )
        {
        return this.movePosition( element.column, element.line, destColumn, destLine, duration );
        }

    /**
     * Move an element from one grid position to another (the element needs to be already in the grid).
     *
     * @param sourceColumn The source column of an existing element.
     * @param sourceLine The source line of an existing element.
     * @param destColumn The destination column position.
     * @param destLine The destination line position.
     * @param duration If duration >0, then a tween animation is going to be applied to the movement.
     * @return The previous element that was in the destination position (or null if there wasn't one).
     */
    movePosition( sourceColumn: number, sourceLine: number, destColumn: number, destLine: number, duration?: number )
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


    /**
     * Remove an element from the grid.
     *
     * @param element The element to be removed.
     * @return The element that was removed.
     */
    removeElement( element )
        {
        return this.removePosition( element.column, element.line );
        }


    /**
     * Remove an element from the grid.
     *
     * @param column The column position.
     * @param line The line position.
     * @return The element that was removed.
     */
    removePosition( column: number, line: number )
        {
        if ( !this.isInGrid( column, line ) )
            {
            return null;
            }

        var element = this._grid[ column ][ line ];

        this._grid[ column ][ line ] = null;

        if ( element !== null )
            {
            element.column = -1;
            element.line = -1;
            }

        return element;
        }


    /**
     * Get an element from the grid.
     *
     * @param column The column position.
     * @param line The line position.
     * @return The element, or `null` if there wasn't an element in that position.
     */
    getElement( column: number, line: number )
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


    /**
     * Get an element from the grid.
     *
     * @param x The x position.
     * @param y The y position.
     * @return The element, or `null` if there wasn't an element in that position.
     */
    getElement2( x: number, y: number )
        {
        var position = this.toGrid( x, y );

        return this.getElement( position.column, position.line );
        }


    /**
     * @param column The column position.
     * @param line The line position.
     * @return If the position is empty or not.
     */
    isEmpty( column: number, line: number )
        {
        if ( this._grid[ column ][ line ] )
            {
            return false;
            }

        return true;
        }


    /**
     * Makes sure the position is within the grid's dimensions.
     * For example if you pass a column that is <0 then it will return a column with value 0 (since you can't have negative columns).
     *
     * @param column The column position.
     * @param line The line position.
     * @return The column/line position that is guaranteed to be within the grid's dimensions.
     */
    normalizePosition( column: number, line: number )
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


    /**
     * @param column The column position.
     * @param line The line position.
     * @return If this position is valid for this grid (is within it).
     */
    isInGrid( column: number, line: number )
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


    /**
     * @return A random column/line position that is within the grid's dimensions.
     */
    getRandomPosition()
        {
        return {
                column: Utilities.getRandomInt( 0, this.columns - 1 ),
                line: Utilities.getRandomInt( 0, this.lines - 1 )
            }
        }


    /**
     * @return A random empty column/line position, or `null` if there aren't any empty positions.
     */
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


    /**
     * @return An array with all the empty column/line positions of this grid (the array will be empty if there aren't any empty positions).
     */
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


    /**
     * @return The grid's dimensions.
     */
    getDimensions()
        {
        return {
                x: this.ref_x,
                y: this.ref_y,
                width: this.square_size * this.columns,
                height: this.square_size * this.lines
            }
        }


    /**
     * Clear grid related elements etc.
     * Called when we don't need the grid anymore.
     */
    clear()
        {
        if ( this._background !== null )
            {
            this._background.remove();
            }
        }


    /**
     * Get the neighbor elements around the given position.
     *
     * @param refColumn The reference column position.
     * @param refLine The reference line position.
     * @param range The range of elements around the reference position to get.
     * @return The neighbor elements.
     */
    getNeighbors( refColumn: number, refLine: number, range?: number )
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