window.onload = function()
{
Game.init( document.body, 400, 400 );


    // example 1 -- add a star (custom Circle)
var star1 = new Star({
        x: 300,
        y: 200,
        fillColor: 'red',
        strokeColor: 'black',
        outerRadius: 10,
        innerRadius: 4,
        spikes: 5
    });
star1.addEventListener( 'click', function()
    {
    console.log( 'Star clicked!' );
    });
Game.addElement( star1 );


    // example 2 - it plays well with other classes (Unit/Bullet in this example)
    // add a unit
var unitShape = new Game.Rectangle({
        width: 20,
        height: 20,
        color: 'green'
    });
var unit = new Game.Unit({
        x: 100,
        y: 200,
        children: unitShape
    });
unit.addEventListener( 'collision', function( data )
    {
    console.log( 'Hit!' );
    });
Game.addElement( unit );

    // add a weapon to the unit
var weapon = new Game.Weapon({
        bulletContainer: Game.getCanvas()
    });
unit.addWeapon( weapon );

    // the weapon will shoot a star shaped bullet
var star2 = new Star({
        fillColor: 'white',
        strokeColor: 'black',
        outerRadius: 5,
        innerRadius: 2,
        spikes: 8
    });
var starBullet = new Game.Bullet({
        movement_speed: 100,
        angleOrTarget: 0,
        children: star2
    });
var id = weapon.addBulletType( starBullet );

    // fire at a given interval
weapon.forceFire( star1, id, 1 );
};

