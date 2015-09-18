module Game
{
export module CollisionDetection
    {
    export type Vertices = { x: number, y: number }[];


    /**
     * Uses the `Separating Axis Theorem` to determine if two elements have collided.
     *
     * Works for convex polygon shapes.
     */
    export function polygon( one: Vertices, two: Vertices )
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

                // get either perpendicular vector
                // edge method is (x, y) => (-y, x) or (y, -x)
                // the normals of the edges can be obtained by flipping the coordinates and negating one
            var normal = Vector.normalRight( edge );

            axes[ a ] = normal;
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
    }
}