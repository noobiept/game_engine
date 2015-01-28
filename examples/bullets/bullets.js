window.onload = function()
{
Game.init( document.body, 400, 400 );

var size = 10;
var unitShape = new Game.Rectangle( 0, 0, size, size, 'green' );

var unit = new Game.Unit({
        movement_speed: 100
    });
unit.addChild( unitShape );


unit.x = 200 - size / 2;
unit.y = 200 - size / 2;

Game.addElement( unit );


    // fire in whatever direction the unit is facing
unit.fireBullet();

    // specify an angle
unit.fireBullet( Math.PI );
unit.fireBullet( Math.PI / 2 );
unit.fireBullet( -Math.PI / 2 );
};