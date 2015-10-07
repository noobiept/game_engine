window.onload = function()
{
Game.init( document.body, 400, 400 );

    // collision categories
var categories = {
    target: 1,
    unit: 2
};


    // example 1 -- add a star (custom Circle)
var star1 = new Star({
        x: 300,
        y: 200,
        fillColor: 'red',
        strokeColor: 'black',
        outerRadius: 10,
        innerRadius: 4,
        spikes: 5,
        category: categories.target
    });
star1.addEventListener( 'click', function()
    {
    console.log( 'Star clicked!' );
    });
Game.addElement( star1 );


    // example 2 - it plays well with other classes (Weapon/Bullet in this example)
var unit = new Unit({
        x: 100,
        y: 200,
        category: categories.unit,
        collidesWith: categories.target
    });

unit.addEventListener( 'collision', function( data )
    {
    if ( data.bullet )
        {
        data.bullet.remove();
        }

    console.log( 'Hit!' );
    });
Game.addElement( unit );

    // the weapon will shoot a star shaped bullet
var star2 = new Star({
        fillColor: 'white',
        strokeColor: 'black',
        outerRadius: 5,
        innerRadius: 2,
        spikes: 8
    });
var starBullet = new Game.Bullet({
        movementSpeed: 100,
        children: star2
    });
var id = unit.weapon.addBulletType( starBullet );

    // fire at a given interval
unit.weapon.forceFire( star1, id, 1 );
};

