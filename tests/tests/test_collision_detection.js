QUnit.module( 'CollisionDetection' );


    // boxBoxCollision //
QUnit.test( 'boxBoxCollision() - Test with valid arguments.', function( assert )
{
var result;
var expect;

result = Game.CollisionDetection.boxBox( 0, 0, 1, 1, 2, 2, 1, 1 );
expect = false;

assert.deepEqual( result, expect, "Doesn't collide." );

result = Game.CollisionDetection.boxBox( 0, 0, 2, 1, 2, 0, 1, 4 );
expect = true;

assert.deepEqual( result, expect, 'Boxes touching.' );

result = Game.CollisionDetection.boxBox( 0, 0, 2, 2, 0, 0, 1, 1 );
expect = true;

assert.deepEqual( result, expect, 'One box inside the other.' );
});


    // circleCircleCollision //
QUnit.test( 'circleCircleCollision() - Test with valid arguments.', function( assert )
{
var result;
var expect;

result = Game.CollisionDetection.circleCircle( 0, 0, 2, 5, 5, 2 );
expect = false;

assert.deepEqual( result, expect, 'No collision.' );

result = Game.CollisionDetection.circleCircle( 0, 0, 2, 4, 0, 2 );
expect = true;

assert.deepEqual( result, expect, 'Start of the collision.' );

result = Game.CollisionDetection.circleCircle( 0, 0, 4, 0, 0, 2 );
expect = true;

assert.deepEqual( result, expect, 'Second circle inside the first.' );
});


    // circlePointCollision //
QUnit.test( 'circlePointCollision() - Test with valid arguments.', function( assert )
{
var result;
var expect;

result = Game.CollisionDetection.circlePoint( 0, 0, 4, 5, 5 );
expect = false;

assert.deepEqual( result, expect, 'No collision.' );

result = Game.CollisionDetection.circlePoint( 0, 0, 4, 4, 0 );
expect = true;

assert.deepEqual( result, expect, 'Point on the border of the circle.' );

result = Game.CollisionDetection.circlePoint( 0, 0, 4, 0, 0 );
expect = true;

assert.deepEqual( result, expect, 'Point inside the circle.' );
});


    // pointBoxCollision //
QUnit.test( 'pointBoxCollision() - Test with valid arguments.', function( assert )
{
var result;
var expect;

result = Game.CollisionDetection.pointBox( 0, 0, 2, 2, 10, 10 );
expect = false;

assert.deepEqual( result, expect, 'No collision.' );

result = Game.CollisionDetection.pointBox( 10, 5, 0, 0, 10, 10 );
expect = true;

assert.deepEqual( result, expect, "Point on the border of the box." );

result = Game.CollisionDetection.pointBox( 0, 0, -2, -2, 4, 4 );
expect = true;

assert.deepEqual( result, expect, 'Point inside the box.' );

result = Game.CollisionDetection.pointBox( 2, 5, 0, 0, 10, 10 );
expect = true;

assert.deepEqual( result, expect, 'Point inside the box.' );
});

