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
var unitWeapon = new Game.Weapon({
        bulletContainer: Game.getCanvas()
    });

var unit = new Game.Unit({
        x: centerX,
        y: centerY,
        movementSpeed: 100,
        children: unitShape
    });
var weaponId = unit.addWeapon( unitWeapon );
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
        movementSpeed: 50,
        children: targetRect
    });
Game.addElement( target );

target.moveTo( 5, centerY );

    // use the `.getWeapon()` method to get the weapon
    // this is the same object as in the `unitWeapon` variable (just showing how you would get it later on)
var weapon = unit.getWeapon( weaponId );

    // fire in whatever direction the unit is facing
weapon.forceFire();

    // specify an angle
weapon.forceFire( Math.PI );
weapon.forceFire( Math.PI / 2 );
weapon.forceFire( -Math.PI / 2, 0, 1 );     // fire at an interval

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
        movementSpeed: 100
    });
var id = weapon.addBulletType( bullet );

weapon.forceFire( target, id );
};