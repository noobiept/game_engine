window.onload = function()
{
Main.init();
};


var Main;
(function(Main) {


var MAP_INFO = {
    columns: 20,
    lines: 20,
    start: {
        column: 0,
        line: 10
    },
    end: {
        column: 19,
        line: 10
    }
};


Main.init = function()
{
Game.init( document.body, 500, 500 );
Game.addToGameLoop( tick, 0 );

Main.start();
};


Main.start = function()
{
var tower = new Tower({
        x: 60,
        y: 200
    });
Game.addElement( tower );


var tower2 = new Tower({
        x: 200,
        y: 200
    });
Game.addElement( tower2 );


var creep = new Creep({
        x: 10,
        y: 220
    });
Game.addElement( creep );

creep.moveTo( 400, 220 );
};



function tick()
{
    // towers will attack a creep that is within its range
for (var a = 0 ; a < Tower._all.length ; a++)
    {
    var tower = Tower._all[ a ];

    if ( tower.can_attack )
        {
        for (var b = 0 ; b < Creep._all.length ; b++)
            {
            var creep = Creep._all[ b ];

                // fire 1 bullet if the creep is within the tower's range
            if ( Utilities.circleCircleCollision(
                        tower.x,
                        tower.y,
                        tower.range,
                        creep.x,
                        creep.y,
                        creep.getWidth() / 2
                    ))
                {
                tower.fireBullet( creep );
                break;
                }
            }
        }
    }
}


})(Main || (Main = {}));