module Game
{
export module Vector
    {
    export interface Vector
        {
        x: number;
        y: number;
        }


    export function add( one: Vector, two: Vector )
        {
        return {
                x: one.x + two.x,
                y: one.y + two.y
            };
        }


    export function subtract( one: Vector, two: Vector )
        {
        return {
                x: one.x - two.x,
                y: one.y - two.y
            };
        }


    export function magnitude( vector: Vector )
        {
        var x = vector.x;
        var y = vector.y;

        return Math.sqrt( x * x + y * y );
        }


    export function multiply( vector: Vector, scalar: number )
        {
        return {
                x: vector.x * scalar,
                y: vector.y * scalar
            };
        }


    export function dotProduct( one: Vector, two: Vector )
        {
        return one.x * two.x + one.y * two.y;
        }


    export function rotate( center: Vector, vector: Vector, angle: number )
        {
        var centerX = center.x;
        var centerY = center.y;
        var cos = Math.cos( angle );
        var sin = Math.sin( angle );
        var diffX = vector.x - centerX;
        var diffY = vector.y - centerY;

        return {
                x: centerX + diffX * cos - diffY * sin,
                y: centerY + diffX * sin + diffY * cos
            };
        }


    export function normalLeft( vector: Vector )
        {
        return {
                x: vector.y,
                y: -vector.x
            };
        }


    export function normalRight( vector: Vector )
        {
        return {
                x: -vector.y,
                y: vector.x
            };
        }


    export function normalize( vector: Vector )
        {
        var x = vector.x;
        var y = vector.y;
        var length = Math.sqrt( x * x + y * y );

        return {
                x: x / length,
                y: y / length
            };
        }


    export function projection( one: Vector, two: Vector )
        {
        var dotProd = dotProduct( one, two );
        var twoX = two.x;
        var twoY = two.y;
        var twoLengthSquared = twoX * twoX + twoY * twoY;

        return {
                x: dotProd / twoLengthSquared * twoX,
                y: dotProd / twoLengthSquared * twoY
            };
        }
    }
}