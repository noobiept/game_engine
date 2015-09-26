/// <reference path="grid.ts" />
/// <reference path="event_dispatcher.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="game.ts" />
/// <reference path="tween.ts" />

module Game
{
export interface ElementGridArgs extends EventDispatcherArgs, GridArgs
    {
    squareSize: number;
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
 *     var grid = new Game.ElementGrid({
 *             squareSize: 10,
 *             columns: 20,
 *             lines: 20
 *         });
 *     grid.add( rectangle, 10, 10 );
 *
 * Events:
 *
 * - `collision` -- `listener( data: { element: Element; collidedWith: Element; } );`
 *
 * Examples -- `2048`, `game_of_life`, `grid`, `minesweeper`, `snake`
 */
export class ElementGrid extends Grid
    {
    square_size: number;
    ref_x: number;
    ref_y: number;
    protected _background: Rectangle;
    events: EventDispatcher;    // since typescript doesn't allow multiple class inheritance, we need to deal with the events through a property

    constructor( args: ElementGridArgs )
        {
        super( args );


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

            Game.getCanvas( args.background.canvasId ).addChild( this._background );
            }

        else
            {
            this._background = null;
            }

        this.events = new Game.EventDispatcher( args );
        this.square_size = args.squareSize;
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
     * Throws an exception if its an invalid column/line position.
     *
     * @param element The element to be added.
     * @param column The column position.
     * @param line The line position.
     * @return The previous element that was in that position (or `null` if there wasn't one).
     */
    add( element: Element, column: number, line: number )
        {
        var previous = super.add( element, column, line );
        var canvasPosition = this.toCanvas( column, line );

        element.x = canvasPosition.x;
        element.y = canvasPosition.y;
        element.column = column;
        element.line = line;

        if ( previous !== null )
            {
            this.events.dispatchEvent( 'collision', {
                    element: element,
                    collidedWith: previous
                });
            }

        return previous;
        }


    /**
     * Move an element from one grid position to another (the element needs to be already in the grid).
     * Throws an exception if any of the positions are invalid.
     *
     * @param sourceColumn The source column of an existing element.
     * @param sourceLine The source line of an existing element.
     * @param destColumn The destination column position.
     * @param destLine The destination line position.
     * @param duration If duration >0, then a tween animation is going to be applied to the movement.
     * @return The previous element that was in the destination position (or null if there wasn't one).
     */
    move( sourceColumn: number, sourceLine: number, destColumn: number, destLine: number, duration?: number )
        {
        var element = this.get( sourceColumn, sourceLine );

        if ( element === null ||
            (sourceColumn === destColumn &&
             sourceLine === destLine ))
            {
            return null;
            }

        var previous = super.move( sourceColumn, sourceLine, destColumn, destLine );

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

            this.events.dispatchEvent( 'collision', {
                    element: element,
                    collidedWith: previous
                });
            }

        return previous;
        }


    /**
     * Remove an element from the grid.
     * Throws an exception if its an invalid column/line position.
     *
     * @param column The column position.
     * @param line The line position.
     * @return The element that was removed.
     */
    remove( column: number, line: number )
        {
        var element = super.remove( column, line );

        if ( element !== null )
            {
            element.column = -1;
            element.line = -1;
            }

        return element;
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
    }
}