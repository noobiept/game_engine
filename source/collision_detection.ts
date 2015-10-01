/// <reference path="vector.ts" />

module Game
{
export module CollisionDetection
    {
    export type Vertices = { x: number, y: number }[];


    /**
     * Checks the collision between all the elements provided.
     */
    export function checkAll( elements: Element[] )
        {
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


    /**
     * Uses the `Separating Axis Theorem` to determine if two elements have collided.
     *
     * Works for convex polygon shapes.
     */
    export function polygonPolygon( one: Vertices, two: Vertices )
        {
        var axes1 = getAxes( one );
        var axes2 = getAxes( two );

        var a;
        var axis;
        var projection1, projection2;


            // loop over the axes 1
        for (a = 0 ; a < axes1.length ; a++)
            {
            axis = axes1[ a ];

            projection1 = projectShapeIntoAxis( one, axis );
            projection2 = projectShapeIntoAxis( two, axis );

                // no overlap between the shapes
            if ( !projectionOverlaps( projection1, projection2 ) )
                {
                return false;
                }
            }

            // loop over the axes 2
        for (a = 0 ; a < axes2.length ; a++)
            {
            axis = axes2[ a ];

            projection1 = projectShapeIntoAxis( one, axis );
            projection2 = projectShapeIntoAxis( two, axis );

                // no overlap between the shapes
            if ( !projectionOverlaps( projection1, projection2 ) )
                {
                return false;
                }
            }

            // if the shape's projections overlap for all the axes, then they are intersecting
        return true;
        }


    export function polygonPolygonList( list1: Vertices[], list2: Vertices[] )
        {
        for (var a = list1.length - 1 ; a >= 0 ; a--)
            {
            var one = list1[ a ];

            for (var b = list2.length - 1 ; b >= 0 ; b--)
                {
                var two = list2[ b ];

                var collided = polygonPolygon( one, two );

                if ( collided )
                    {
                    return true;
                    }
                }
            }

        return false;
        }


    export function polygonPoint( vertices: Vertices, point )
        {
        var isInside = false;
        var minX = vertices[ 0 ].x;
        var maxX = minX;
        var minY = vertices[ 0 ].y;
        var maxY = minY;
        var a, b;

        for (a = 1 ; a < vertices.length ; a++)
            {
            var vertex = vertices[ a ];

            minX = Math.min( vertex.x, minX );
            maxX = Math.max( vertex.x, maxX );
            minY = Math.min( vertex.y, minY );
            maxY = Math.max( vertex.y, maxY );
            }

        if ( point.x < minX ||
             point.x > maxX ||
             point.y < minY ||
             point.y > maxY )
            {
            return false;
            }

        a = 0;
        b = vertices.length - 1;

        for ( ; a < vertices.length ; b = a++)
            {
            if ( (vertices[a].y > point.y) !== (vertices[b].y > point.y) &&
                 point.x < (vertices[b].x - vertices[a].x) * (point.y - vertices[a].y) / (vertices[b].y - vertices[a].y) + vertices[a].x )
                {
                isInside = !isInside;
                }
            }

        return isInside;
        }


    function getAxes( vertices: Vertices )
        {
        var verticesLength = vertices.length;

            // the number of axes will be the number of vertices
        var axes = [];

        for (var a = 0 ; a < verticesLength ; a++)
            {
                // current vertex
            var point1 = vertices[ a ];

                // next vertex
            var next = a + 1;

            if ( next >= verticesLength )
                {
                next = 0;
                }

            var point2 = vertices[ next ];

                // subtract the two to get the edge vector
            var edge = Vector.subtract( point1, point2 );

            axes[ a ] = Vector.normalRight( edge );
            }

        return axes;
        }


    function projectShapeIntoAxis( vertices: Vertices, axis: Vector.Vector )
        {
            // project a shape onto an axis
        var min = Vector.dotProduct( axis, vertices[ 0 ] );
        var max = min;

        for (var a = 1 ; a < vertices.length ; a++)
            {
            var p = Vector.dotProduct( axis, vertices[ a ] );

            if ( p < min )
                {
                min = p;
                }

            else if ( p > max )
                {
                max = p;
                }
            }

        return {
                min: min,
                max: max
            };
        }


    function projectionOverlaps( one, two )
        {
        return !(one.min > two.max || two.min > one.max);
        }


    // ------ The functions below assume the axis are aligned (no rotations) ------ //

    /**
     * Detects collision between 2 boxes.
     */
    export function boxBox( oneX: number, oneY: number, oneWidth: number, oneHeight: number, twoX: number, twoY: number, twoWidth: number, twoHeight: number )
        {
        return !(
                ( oneY + oneHeight < twoY ) ||
                ( oneY > twoY + twoHeight ) ||
                ( oneX > twoX + twoWidth ) ||
                ( oneX + oneWidth < twoX )
            );
        }


    /**
     * Detects collision between two circles.
     */
    export function circleCircle( x1: number, y1: number, radius1: number, x2: number, y2: number, radius2: number )
        {
        var distX = x1 - x2;
        var distY = y1 - y2;

        if ( Math.pow( distX, 2 ) + Math.pow( distY, 2 ) <= Math.pow( radius1 + radius2, 2 ) )
            {
            return true;
            }

        return false;
        }


    /**
     * Detects collision between a circle and a point.
     */
    export function circlePoint( circleX: number, circleY: number, circleRadius: number, pointX: number, pointY: number )
        {
        var distanceX = circleX - pointX;
        var distanceY = circleY - pointY;

            // pythagoras
        var squareDistance = distanceX * distanceX + distanceY * distanceY;

        if ( squareDistance <= circleRadius * circleRadius )
            {
            return true;
            }

        return false;
        }


    /**
     * Detects collision between a point and a box.
     */
    export function pointBox( pointX: number, pointY: number, boxX: number, boxY: number, boxWidth: number, boxHeight: number )
        {
        if ( pointX < boxX ||
             pointX > boxX + boxWidth ||
             pointY < boxY ||
             pointY > boxY + boxHeight )
            {
            return false;
            }

        return true;
        }
    }
}