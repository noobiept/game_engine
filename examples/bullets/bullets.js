window.onload = function()
{
var width = 400;
var height = 400;

Game.init( document.body, width, height );

    // add a unit
var size = 10;
var unitShape = new Game.Rectangle({
        width: size,
        height: size,
        color: 'green'
    });

var unit = new Game.Unit({
        movement_speed: 100,
        children: unitShape
    });

unit.x = width / 2 - size / 2;
unit.y = height / 2 - size / 2;

Game.addElement( unit );

    // add a target
var targetRect = new Game.Rectangle({
        width: 10,
        height: 10,
        color: 'red'
    });
var target = new Game.Unit({
        movement_speed: 50,
        children: targetRect
    });
target.x = 10;
target.y = 10;

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