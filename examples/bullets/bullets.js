window.onload = function()
{
var width = 400;
var height = 400;

Game.init( document.body, width, height );

    // add a unit
var size = 10;
var centerX = width / 2 - size / 2;
var centerY = height / 2 - size / 2;

var unitShape = new Game.Rectangle({
        width: size,
        height: size,
        color: 'green'
    });

var unit = new Game.Unit({
        x: centerX,
        y: centerY,
        movement_speed: 100,
        children: unitShape,
        bullet_container: Game.getCanvas()
    });
Game.addElement( unit );

    // add a target
var targetRect = new Game.Rectangle({
        width: 10,
        height: 10,
        color: 'red'
    });
var target = new Game.Unit({
        x: 5,
        y: 5,
        movement_speed: 50,
        children: targetRect
    });
Game.addElement( target );

target.moveTo( 5, centerY );

    // fire in whatever direction the unit is facing
unit.fireBullet();

    // specify an angle
unit.fireBullet( Math.PI );
unit.fireBullet( Math.PI / 2 );
unit.fireBullet( -Math.PI / 2, 0, 1 );     // fire at an interval

    // specify a target
    // fire a different type of bullet
var alternateShape = new Game.Rectangle({
        width: 10,
        height: 5,
        color: 'purple'
    });
var bullet = new Game.Bullet({
        angleOrTarget: 0,
        children: alternateShape,
        movement_speed: 100
    });
var id = unit.addBulletType( bullet );

unit.fireBullet( target, id );
};