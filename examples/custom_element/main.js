window.onload = function()
{
Game.init( document.body, 400, 400 );


    // example 1 -- add a star (custom Circle)
var star = new Star({
        x: 300,
        y: 200,
        fillColor: 'red',
        strokeColor: 'black',
        outerRadius: 10,
        innerRadius: 4,
        spikes: 5
    });
star.addEventListener( 'click', function()
    {
    console.log( 'Star clicked!' );
    });
Game.addElement( star );


    // example 2 - it plays well with other classes (Unit/Bullet in this example)
var unitRect = new Game.Rectangle({
        width: 20,
        height: 20,
        color: 'green'
    });
var bulletStarArgs = {
        fillColor: 'white',
        strokeColor: 'black',
        outerRadius: 5,
        innerRadius: 2,
        spikes: 8
    };

var unit = new Game.Unit({
        x: 100,
        y: 200,
        children: unitRect,
        bullet_shape: { classRef: Star, args: bulletStarArgs },
        bullet_container: Game.getCanvas()
    });
unit.fireBullet( star, 1 );

Game.addElement( unit );
};

