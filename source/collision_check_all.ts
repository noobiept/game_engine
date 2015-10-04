/// <reference path="collision_detection.ts" />

module Game
{
export module CollisionDetection
    {
    /**
     * Useful when there's a small number of elements in the game.
     */
    export class CheckAll implements CollisionDetectionAlgorithm
        {
        _elements: Element[];


        constructor()
            {
            this._elements = [];
            }


        add( element: Element )
            {
            this._elements.push( element );
            }


        update( element: Element )
            {
                // no need to update
            }


        remove( element: Element )
            {
            var index = this._elements.indexOf( element );

            this._elements.splice( index, 1 );
            }


        /**
         * Checks the collision between all the elements provided.
         */
        checkCollision()
            {
            var elements = this._elements;
            var length = elements.length;

            for (var a = 0 ; a < length - 1 ; a++)
                {
                var one = elements[ a ];

                for (var b = a + 1 ; b < length ; b++)
                    {
                    var two = elements[ b ];

                    var oneCollidesWithTwo = (one.collidesWith & two.category) !== 0;
                    var twoCollidesWithOne = (two.collidesWith & one.category) !== 0;

                        // check if they can collide with each other
                    if ( oneCollidesWithTwo || twoCollidesWithOne )
                        {
                        if ( one.checkCollision( two ) )
                            {
                                // we'll only dispatch the event for the ones that care about it
                            if ( oneCollidesWithTwo )
                                {
                                one.dispatchEvent( 'collision', {
                                        element: one,
                                        collidedWith: two
                                    });
                                }

                            if ( twoCollidesWithOne )
                                {
                                two.dispatchEvent( 'collision', {
                                        element: two,
                                        collidedWith: one
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}