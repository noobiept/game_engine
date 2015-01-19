/// <reference path="element.ts" />

module Game
{
export class Container extends Element
    {
    children: Element[];

    constructor()
        {
        super();

        this.children = [];
        }


    addChild( element: Element )
        {
        this.children.push( element );

        element.container = this;
        }


    removeChild( element )
        {
        var index = this.children.indexOf( element );

        if ( index >= 0 )
            {
            this.children.splice( index, 1 );
            }

        element.container = null;
        }


    draw( ctx )
        {
        for (var a = this.children.length - 1 ; a >= 0 ; a--)
            {
            this.children[ a ].drawElement( ctx, this.x, this.y );
            }
        }


    intersect( x, y, event )
        {
        var found = false;

        for (var a = this.children.length - 1 ; a >= 0 ; a--)
            {
            var element = this.children[ a ];

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
    }
}