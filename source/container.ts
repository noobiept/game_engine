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
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup` -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
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
        this._has_logic = true;

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
     * Remove all of this container's children.
     */
    removeAllChildren()
        {
        for (var a = this._children.length - 1 ; a >= 0 ; a--)
            {
            this._children[ a ]._container = null;
            this._children[ a ].remove();
            }

        this._children.length = 0;
        }


    /**
     * Make sure the children are removed as well.
     */
    remove()
        {
        this.removeAllChildren();
        super.remove();
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
        ctx.scale( this.scaleX, this.scaleY );
        ctx.rotate( this._rotation );

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
     * Check if the given x/y position intersects with any of this container's children. Returns all the elements it intersects.
     */
    intersect( x: number, y: number )
        {
        var all = [];
        var elements;

        for (var a = this._children.length - 1 ; a >= 0 ; a--)
            {
            elements = this._children[ a ].intersect( x, y );

            if ( elements.length > 0 )
                {
                all = all.concat( elements );
                }
            }

        return all;
        }


    mouseClickEvents( x, y, event )
        {
        var found = false;

        for (var a = this._children.length - 1 ; a >= 0 ; a--)
            {
            if ( this._children[ a ].mouseClickEvents( x, y, event ) )
                {
                found = true;
                }
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
            this._width = this._height = 0;
            this._half_width = this._half_height = 0;
            }

        var firstChild = this._children[ 0 ];
        var leftMost = firstChild.x;
        var rightMost = firstChild.x + firstChild._width;
        var topMost = firstChild.y;
        var bottomMost = firstChild.y + firstChild._height;
        var length = this._children.length;

        for (var a = 1 ; a < length ; a++)
            {
            var element = this._children[ a ];

            if ( element.x < leftMost )
                {
                leftMost = element.x;
                }

            else if ( element.x + element._width > rightMost )
                {
                rightMost = element.x + element._width;
                }


            if ( element.y < topMost )
                {
                topMost = element.y;
                }

            else if ( element.y + element._height > bottomMost )
                {
                bottomMost = element.y + element._height;
                }
            }

        this._width = rightMost - leftMost;
        this._height = bottomMost - topMost;
        this._half_width = this._width / 2;
        this._half_height = this._height / 2;
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

        var container = new Game.Container({
                x: this.x,
                y: this.y,
                children: children
            });
        container.opacity = this.opacity;
        container.visible = this.visible;
        container.scaleX = this.scaleX;
        container.scaleY = this.scaleY;
        container._rotation = this._rotation;

        return container;
        }
    }
}