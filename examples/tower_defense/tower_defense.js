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
        },
    passableTerrain: [
            { column: 0, line: 10 },
            { column: 1, line: 10 },
            { column: 2, line: 10 },
            { column: 3, line: 10 },
            { column: 4, line: 10 },
            { column: 5, line: 10 },
            { column: 6, line: 10 },
            { column: 7, line: 10 },
            { column: 8, line: 10 },
            { column: 9, line: 10 }
        ]
    };
var GRID;
var TERRAINS = [];

    // top level container for all the elements
var TERRAINS_CONTAINER;
var BULLETS_CONTAINER;
var CREEPS_CONTAINER;
var TOWERS_CONTAINER;

Main.SQUARE_SIZE = 25;


Main.init = function()
{
Game.init( document.body, 500, 500 );
Game.addToGameLoop( tick, 0 );

GRID = new Game.Grid({
        squareSize: Main.SQUARE_SIZE,
        columns: MAP_INFO.columns,
        lines: MAP_INFO.lines
    });

TERRAINS_CONTAINER = new Game.Container();
BULLETS_CONTAINER = new Game.Container();
CREEPS_CONTAINER = new Game.Container();
TOWERS_CONTAINER = new Game.Container();

    // the order the containers are added, sets the stacking order of the elements (what elements are drawn first, and therefore are below the others)
Game.addElement( TERRAINS_CONTAINER );
Game.addElement( TOWERS_CONTAINER );
Game.addElement( CREEPS_CONTAINER );
Game.addElement( BULLETS_CONTAINER );

Main.start( MAP_INFO );
};


Main.start = function( mapInfo )
{
    // add the terrain
var line;
var column;
var a;

for (line = 0 ; line < mapInfo.lines ; line++)
    {
    for (column = 0 ; column < mapInfo.columns ; column++)
        {
        var terrain = new Terrain({
            x: Main.SQUARE_SIZE * column + Main.SQUARE_SIZE / 2,
            y: Main.SQUARE_SIZE * line + Main.SQUARE_SIZE / 2
        });
        TERRAINS_CONTAINER.addChild( terrain );

        TERRAINS.push( terrain );
        }
    }


for (a = mapInfo.passableTerrain.length - 1 ; a >= 0 ; a--)
    {
    var terrainInfo = mapInfo.passableTerrain[ a ];

    var position = terrainInfo.column + terrainInfo.line * mapInfo.columns;

    TERRAINS[ position ].setPassable( true );
    }

var tower = new Tower({
        x: 60,
        y: 200,
        bullet_container: BULLETS_CONTAINER
    });
TOWERS_CONTAINER.addChild( tower );


var tower2 = new Tower({
        x: 200,
        y: 200,
        bullet_container: BULLETS_CONTAINER
    });
TOWERS_CONTAINER.addChild( tower2 );


var creep = new Creep({
        x: 10,
        y: 220
    });
CREEPS_CONTAINER.addChild( creep );

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