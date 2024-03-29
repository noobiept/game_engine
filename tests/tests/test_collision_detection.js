QUnit.module( 'CollisionDetection' );


    // polygonPolygonList //
QUnit.test( 'polygonPolygonList()', function( assert )
{
Game.CollisionDetection.init();

var one = new Game.Rectangle({
        x: 100,
        y: 100,
        width: 20,
        height: 10,
        color: 'blue'
    });
var two = new Game.Rectangle({
        width: 10,
        height: 20,
        color: 'red'
    });

var tests = [
        { rotation1: 0, rotation2: 0, x2: 100, y2: 115, collide: true },
        { rotation1: 0, rotation2: 0, x2: 100, y2: 116, collide: false },
        { rotation1: 0, rotation2: 0, x2: 100, y2: 84, collide: false },
        { rotation1: 0, rotation2: 0, x2: 100, y2: 85, collide: true },
        { rotation1: 0, rotation2: 0, x2: 84, y2: 100, collide: false },
        { rotation1: 0, rotation2: 0, x2: 85, y2: 100, collide: true },
        { rotation1: 0, rotation2: 0, x2: 115, y2: 100, collide: true },
        { rotation1: 0, rotation2: 0, x2: 116, y2: 100, collide: false },
        { rotation1: Math.PI / 4, rotation2: 0, x2: 108, y2: 86, collide: true },
        { rotation1: Math.PI / 4, rotation2: 0, x2: 109, y2: 86, collide: false },
        { rotation1: Math.PI / 4, rotation2: 0, x2: 90, y2: 113, collide: false },
        { rotation1: Math.PI / 4, rotation2: 0, x2: 90, y2: 112, collide: true },
        { rotation1: Math.PI / 4, rotation2: -Math.PI / 3, x2: 114, y2: 115, collide: true },
        { rotation1: Math.PI / 4, rotation2: -Math.PI / 3, x2: 115, y2: 115, collide: false },
        { rotation1: Math.PI / 4, rotation2: Math.PI / 3, x2: 82, y2: 94, collide: true },
        { rotation1: Math.PI / 4, rotation2: Math.PI / 3, x2: 82, y2: 93, collide: false }
    ];

for (var a = 0 ; a < tests.length ; a++)
    {
    var test = tests[ a ];

    one.rotation = test.rotation1;
    two.rotation = test.rotation2;
    two.x = test.x2;
    two.y = test.y2;

    one.updateVertices( 0, 0, 1, 1, 0 );
    two.updateVertices( 0, 0, 1, 1, 0 );

    var collides = Game.CollisionDetection.polygonPolygonList( one.getVertices(), two.getVertices() );

    assert.deepEqual( collides, test.collide );
    }

Game.CollisionDetection.clear();
});


    // polygonPoint //
QUnit.test( 'polygonPoint()', function( assert )
{
Game.CollisionDetection.init();

var rect = new Game.Rectangle({
        width: 10,
        height: 10,
        color: 'red'
    });
rect.updateVertices( 0, 0, 1, 1, 0 );

var tests = [
        { x: -5, y: 0, collide: true },
        { x: -5.1, y: 0, collide: false },
        { x: 4.9, y: 0, collide: true },
        { x: 5.1, y: 0, collide: false },
        { x: 0, y: 4.9, collide: true },
        { x: 0, y: 5.1, collide: false },
        { x: 0, y: -5, collide: true },
        { x: 0, y: -5.1, collide: false }
    ];

for (var a = 0 ; a < tests.length ; a++)
    {
    var info = tests[ a ];

    var collides = Game.CollisionDetection.polygonPoint( rect.vertices, info );

    assert.deepEqual( collides, info.collide );
    }

Game.CollisionDetection.clear();
});


    // boxBox //
QUnit.test( 'boxBox()', function( assert )
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


    // circleCircle //
QUnit.test( 'circleCircle()', function( assert )
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


    // circlePoint //
QUnit.test( 'circlePoint()', function( assert )
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


    // pointBox //
QUnit.test( 'pointBox()', function( assert )
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
