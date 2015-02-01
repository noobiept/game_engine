/// <reference path="element.ts" />

module Game
{
export interface ContainerArgs
    {
        children?: any; // Element or Element[]
    }


export class Container extends Element
    {
    _children: Element[];


    constructor( args?: ContainerArgs )
        {
        super();

        this._children = [];

        if ( typeof args !== 'undefined' )
            {
            if ( typeof args.children !== 'undefined' )
                {
                this.addChild( args.children );
                }
            }
        }

    /*
        addChild( element );
        addChild( element1, element2 );
        addChild( [ element1, element2 ] );
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


    removeChild( element )
        {
        var index = this._children.indexOf( element );

        if ( index >= 0 )
            {
            this._children.splice( index, 1 );
            }

        element.container = null;
        }


    draw( ctx )
        {
        ctx.save();
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );

        for (var a = this._children.length - 1 ; a >= 0 ; a--)
            {
            this._children[ a ].drawElement( ctx );
            }

        ctx.restore();
        }

    drawElement( ctx )
        {
        this.draw( ctx );   // to allow containers to be inside containers
        }

    intersect( x, y, event )
        {
        var found = false;

        for (var a = this._children.length - 1 ; a >= 0 ; a--)
            {
            var element = this._children[ a ];

            if ( element.intersect( x, y, event ) )
                {
                found = true;
                }
            }

        if ( found === true )
            {
            this.dispatchEvent( event );
            }

        return found;
        }


    /*
        calculate the width/height of the container
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


    logic( deltaTime )
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
    }
}