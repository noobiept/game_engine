window.onload = function()
{
var width = 400;
var height = 400;

Game.init( document.body, width, height );

var categories = {
    green: 1,
    red: 2
};

    // add a unit
var size = 10;
var centerX = width / 2 - size / 2;
var centerY = height / 2 - size / 2;

var unit = new Unit({
        x: centerX,
        y: centerY,
        width: size,
        height: size,
        color: 'green',
        movementSpeed: 100,
        category: categories.green,
        collidesWith: categories.red
    });
Game.addElement( unit );

    // add a target
var target = new Unit({
        x: 5,
        y: 5,
        width: 10,
        height: 10,
        color: 'red',
        movementSpeed: 50,
        category: categories.red
    });
Game.addElement( target );

target.movement.moveTo( 5, centerY );


    // fire in whatever direction the unit is facing
unit.weapon.forceFire();

    // specify an angle
unit.weapon.forceFire( Math.PI );
unit.weapon.forceFire( Math.PI / 2 );
unit.weapon.forceFire( -Math.PI / 2, 0, 1 );     // fire at an interval

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
var id = unit.weapon.addBulletType( bullet );

unit.weapon.forceFire( target, id );
};


function Unit( args )
{
Game.Rectangle.call( this, args );

this._has_logic = true;

this.movement = new Game.Movement({
        element: this,
        movementSpeed: args.movementSpeed
    });

this.weapon = new Game.Weapon({
        element: this,
        bulletContainer: Game.getCanvas()
    });
this.addEventListener( 'collision', function( data )
    {
    if ( data.bullet )
        {
        data.bullet.remove();
        }

    console.log( 'Collision!' );
    })
}

Game.Utilities.inheritPrototype( Unit, Game.Rectangle );


Unit.prototype.logic = function( deltaTime )
{
this.movement.logic( deltaTime );
this.weapon.logic( deltaTime );
};


