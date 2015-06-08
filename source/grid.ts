/// <reference path="utilities.ts" />

module Game
{
export interface GridArgs
    {
    columns: number;
    lines: number;
    }


/**
 * Generic grid, to hold any value in a 2d array. Values are added/retrieved by a column/line position.
 *
 * Basic Usage:
 *
 *     var grid = new Game.Grid({
 *             columns: 20,
 *             lines: 20
 *         });
 *     var value = 100;
 *     var column = 5;
 *     var line = 10;
 *
 *     grid.add( value, column, line );
 *
 * Examples -- `tower_defense`
 */
export class Grid
    {
    _grid: any[][];
    columns: number;
    lines: number;


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

        this.columns = args.columns;
        this.lines = args.lines;
        }


    /**
     * Adds a value to a given column/line position.
     * Throws an exception if its an invalid column/line position.
     *
     * @param value Any value to add to the grid.
     * @param column Column position.
     * @param line Line position.
     * @return The previous value.
     */
    add( value: any, column: number, line: number )
        {
        if ( !this.isInGrid( column, line ) )
            {
            throw new Error( 'Invalid column/line position.' );
            }

        var previous = this._grid[ column ][ line ];

        this._grid[ column ][ line ] = value;

        return previous;
        }


    /**
     * Move an value from one position to another.
     * Throws an exception if any of the positions are invalid.
     *
     * @param sourceColumn The column of the source value.
     * @param sourceLine The line of the source value.
     * @param destinationColumn The column of the destination.
     * @param destinationLine The line of the destination.
     * @return The previous value that was on the destination position.
     */
    move( sourceColumn: number, sourceLine: number, destinationColumn: number, destinationLine: number )
        {
        if ( !this.isInGrid( sourceColumn, sourceLine ) ||
             !this.isInGrid( destinationColumn, destinationLine ) )
            {
            throw new Error( 'Invalid column/line position.' );
            }


        var value = this._grid[ sourceColumn ][ sourceLine ];
        var previous = this._grid[ destinationColumn ][ destinationLine ];

        this._grid[ sourceColumn ][ sourceLine ] = null;
        this._grid[ destinationColumn ][ destinationLine ] = value;

        return previous;
        }


    /**
     * Remove a value from the grid.
     * Throws an exception if its an invalid column/line position.
     *
     * @param column The column position.
     * @param line The line position.
     * @return The value that was removed.
     */
    remove( column: number, line: number )
        {
        if ( !this.isInGrid( column, line ) )
            {
            throw new Error( 'Invalid column/line position.' );
            }

        var value = this._grid[ column ][ line ];

        this._grid[ column ][ line ] = null;

        return value;
        }


    /**
     * Get the value from a column/line position of the grid.
     * Throws an exception if its an invalid column/line position.
     *
     * @param column The column position.
     * @param line The line position.
     * @return The value on that position. The default value is `null`, so if there was no value set previously, that's what you'll get.
     */
    get( column: number, line: number )
        {
        if ( !this.isInGrid( column, line ) )
            {
            throw new Error( 'invalid column/line position.' );
            }

        return this._grid[ column ][ line ];
        }


    /**
     * Check if a given position is empty. A position is considered empty if it has the value `null`.
     * Throws an exception if its an invalid column/line position.
     *
     * @param column The column position.
     * @param line The line position.
     * @return If the position is empty or not.
     */
    isEmpty( column: number, line: number )
        {
        if ( !this.isInGrid( column, line ) )
            {
            throw new Error( 'Invalid column/line position.' );
            }

        if ( this._grid[ column ][ line ] === null )
            {
            return true;
            }

        return false;
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
     * Checks if a given column/line position is within the grid's dimensions.
     *
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
     * Get the neighbor values around the given position.
     * Throws an exception if the reference position is invalid.
     *
     * @param refColumn The reference column position.
     * @param refLine The reference line position.
     * @param range The range around the reference position to get.
     * @return The neighbor values.
     */
    getNeighbors( refColumn: number, refLine: number, range?: number )
        {
        if ( !this.isInGrid( refColumn, refLine ) )
            {
            throw new Error( 'Invalid column/line position.' );
            }

        if ( typeof range === 'undefined' )
            {
            range = 1;
            }

        var neighbors = [];
        var start = this.normalizePosition( refColumn - range, refLine - range );
        var end = this.normalizePosition( refColumn + range, refLine + range );
        var value;

        for (var column = start.column ; column <= end.column ; column++)
            {
            for (var line = start.line ; line <= end.line ; line++)
                {
                    // don't include the reference position
                if ( !(column === refColumn && line === refLine) )
                    {
                    value = this.get( column, line );

                    if ( value !== null )
                        {
                        neighbors.push( value );
                        }
                    }
                }
            }

        return neighbors;
        }
    }
}