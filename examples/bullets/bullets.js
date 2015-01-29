window.onload = function()
{
var width = 400;
var height = 400;

Game.init( document.body, width, height );

    // add a unit
var size = 10;
var unitShape = new Game.Rectangle( 0, 0, size, size, 'green' );

var unit = new Game.Unit({
        movement_speed: 100
    });
unit.addChild( unitShape );


unit.x = width / 2 - size / 2;
unit.y = height / 2 - size / 2;

Game.addElement( unit );

    // add a target
var targetRect = new Game.Rectangle( 0, 0, 10, 10, 'red' );
var target = new Game.Unit({
        movement_speed: 50
    });
target.x = 10;
target.y = 10;
target.addChild( targetRect );

Game.addElement( target );

target.moveTo( 10, 100 );

    // fire in whatever direction the unit is facing
unit.fireBullet();

    // specify an angle
unit.fireBullet( Math.PI );
unit.fireBullet( Math.PI / 2 );
unit.fireBullet( -Math.PI / 2, 1 );

    // specify a target
unit.fireBullet( target );
};