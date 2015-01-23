/// <reference path="element.ts" />

module Game
{
export class Container extends Element
    {
    _children: Element[];


    constructor()
        {
        super();

        this._children = [];
        }


    addChild( element: Element )
        {
        this._children.push( element );

        element._container = this;

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
    }
}