/// <reference path="element.ts" />

module Game
{
export interface ContainerArgs extends ElementArgs
    {
        children?: any; // Element or Element[]
    }


/**
 * Basic Usage:
 *
 *     var container = new Game.Container();
 *
 *     var rectangle = new Game.Rectangle({
 *             width: 10,
 *             height: 10,
 *             color: 'red'
 *         });
 *     container.addChild( rectangle );
 *
 *     Game.addElement( container );
 *
 * Events:
 *
 * - `click` -- `listener( data: { event: MouseEvent; } );`
 *
 * Examples -- `basic_example`, `clone`, `minesweeper`
 */
export class Container extends Element
    {
    _children: Element[];


    constructor( args?: ContainerArgs )
        {
        super( args );

        this._children = [];

        if ( typeof args !== 'undefined' )
            {
            if ( typeof args.children !== 'undefined' )
                {
                this.addChild( args.children );
                }
            }
        }

    /**
     *     addChild( element );
     *     addChild( element1, element2 );
     *     addChild( [ element1, element2 ] );
     *
     * @param elements Either `Element` or `...Element` or `Element[]`.
     */
    addChild( elements: any )
        {
        var children = arguments;

        if ( elements instanceof Array )
            {
            children = elements;
            }

        var length = children.length;

        for (var a = 0 ; a < length ; a++)
            {
            var element = children[ a ];

            this._children.push( element );

            element._container = this;
            }

        this.calculateDimensions();
        }


    /**
     *     removeChild( element );
     *     removeChild( element1, element2 );
     *     removeChild( [ element1, element2 ] );
     *
     * @param args Either `Element` or `...Element` or `Element[]`.
     */
    removeChild( args: any )
        {
        var children = arguments;

        if ( args instanceof Array )
            {
            children = args;
            }

        var length = children.length;

        for (var a = 0 ; a < length ; a++)
            {
            var element = children[ a ];
            var index = this._children.indexOf( element );

            if ( index >= 0 )
                {
                this._children.splice( index, 1 );
                }

            element.container = null;
            }
        }


    /**
     * Draw all the elements in the container.
     *
     * @param ctx The canvas rendering context.
     */
    draw( ctx: CanvasRenderingContext2D )
        {
        ctx.save();
        ctx.globalAlpha *= this.opacity;
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );

        var length = this._children.length;
        var child;

        for (var a = 0 ; a < length ; a++)
            {
            child = this._children[ a ];

            if ( child.visible )
                {
                child.drawElement( ctx );
                }
            }

        ctx.restore();
        }


    /**
     * Normally draws the element, but in the case of the container just draw its children.
     *
     * @param ctx The canvas rendering context.
     */
    drawElement( ctx: CanvasRenderingContext2D )
        {
        this.draw( ctx );   // to allow containers to be inside containers
        }


    /**
     * Check if a mouse event intersects with any of the elements that are part of this container, and dispatch the appropriate events (can be from the children and from the container as well).
     *
     * @param x The x position.
     * @param y The y position.
     * @param event The triggered mouse event.
     * @return If an element did intersect.
     */
    mouseEvents( x: number, y: number, event: MouseEvent )
        {
            // check if the mouse event intersects with any of the elements that are part of this container
        var found = false;

        for (var a = this._children.length - 1 ; a >= 0 ; a--)
            {
            var element = this._children[ a ];

            if ( element.mouseEvents( x, y, event ) )
                {
                found = true;
                }
            }

            // see if we need to dispatch the listeners associated with the container
        if ( found === true && this.hasListeners( event.type ) )
            {
            this.dispatchEvent( event.type, { event: event } );
            }

        return found;
        }


    /**
     * Calculate the width/height of the container (based on the dimensions of the children elements).
     */
    calculateDimensions()
        {
        if ( this._children.length === 0 )
            {
            this.width = this.height = 0;
            }

        var firstChild = this._children[ 0 ];
        var leftMost = firstChild.x;
        var rightMost = firstChild.x + firstChild.width;
        var topMost = firstChild.y;
        var bottomMost = firstChild.y + firstChild.height;
        var length = this._children.length;

        for (var a = 1 ; a < length ; a++)
            {
            var element = this._children[ a ];

            if ( element.x < leftMost )
                {
                leftMost = element.x;
                }

            else if ( element.x + element.width > rightMost )
                {
                rightMost = element.x + element.width;
                }


            if ( element.y < topMost )
                {
                topMost = element.y;
                }

            else if ( element.y + element.height > bottomMost )
                {
                bottomMost = element.y + element.height;
                }
            }

        this.width = rightMost - leftMost;
        this.height = bottomMost - topMost;
        }


    /**
     * Call the logic of the children elements.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic( deltaTime: number )
        {
        for (var a = this._children.length - 1 ; a >= 0 ; a--)
            {
            var element = this._children[ a ];

            if ( element._has_logic === true )
                {
                element.logic( deltaTime );
                }
            }
        }


    /**
     * Clones the container (as well as the children).
     *
     * @return A new cloned container.
     */
    clone()
        {
        var children = [];
        var length = this._children.length;

        for (var a = 0 ; a < length ; a++)
            {
            children.push( this._children[ a ].clone() );
            }

        return new Game.Container({
                x: this.x,
                y: this.y,
                children: children
            });
        }
    }
}