window.onload = function()
{
Main.init();
};


var Main;
(function(Main) {


var MAP_INFO = {
    columns: 16,
    lines: 16,
    start: [
        {
        column: 1,
        line: 0
        },
        {
        column: 15,
        line: 3
        }
    ],
    end: {
        column: 13,
        line: 7
        },
        // '1' means its a passable position
        // '0' means its not passable
    map: [
            [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1 ],
            [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0 ],
            [ 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0 ],
            [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        ]
    };

var PATH;           // has the path that the creeps need to do to reach the destination
var MENU_MONEY;     // reference to the menu element that shows the current money value

    // top level container for all the elements
var TERRAINS_CONTAINER;
var BULLETS_CONTAINER;
var CREEPS_CONTAINER;
var TOWERS_CONTAINER;

Main.SQUARE_SIZE = 25;


Main.init = function()
{
Game.init( document.body, 400, 400 );
Game.addToGameLoop( tick, 0 );

TERRAINS_CONTAINER = new Game.Container();
BULLETS_CONTAINER = new Game.Container();
CREEPS_CONTAINER = new Game.Container();
TOWERS_CONTAINER = new Game.Container();

    // the order the containers are added, sets the stacking order of the elements (what elements are drawn first, and therefore are below the others)
Game.addElement( TERRAINS_CONTAINER );
Game.addElement( TOWERS_CONTAINER );
Game.addElement( CREEPS_CONTAINER );
Game.addElement( BULLETS_CONTAINER );

    // set the possible collisions between the elements
Tower.collidesWith = [ Creep ];

    // initialize the menu
var menu = new Game.Html.HtmlContainer();
var money = new Game.Html.Value({
        value: 0,
        preText: 'Money:'
    });
var restart = new Game.Html.Button({
        value: 'Restart',
        callback: restart
    });

menu.addChild( money, restart );
document.body.appendChild( menu.container );

MENU_MONEY = money;


    // start the game
Main.start( MAP_INFO );
};


Main.start = function( mapInfo )
{
var column;
var line;

    // starting money
Main.setMoney( 200 );


    // add the terrain
for (line = 0 ; line < mapInfo.lines ; line++)
    {
    for (column = 0 ; column < mapInfo.columns ; column++)
        {
        var value = mapInfo.map[ line ][ column ];

            // add the terrain
        var terrain = new Terrain({
            x: Main.SQUARE_SIZE * column + Main.SQUARE_SIZE / 2,
            y: Main.SQUARE_SIZE * line + Main.SQUARE_SIZE / 2
        });
        terrain.setPassable( value );

        TERRAINS_CONTAINER.addChild( terrain );
        }
    }


    // calculate the path
PATH = PathFinding.getPath( mapInfo );


    // on click, add a tower (if it is on a valid position)
Game.getCanvasContainer().addEventListener( 'click', addTower );


    // add some creeps every second
Game.addToGameLoop( function()
    {
    for (var a = 0 ; a < mapInfo.start.length ; a++)
        {
        var position = mapInfo.start[ a ];

        var creep = new Creep({
            column: position.column,
            line: position.line
        });
        CREEPS_CONTAINER.addChild( creep );
        }
    }, 1 );
};


Main.getNextPosition = function( column, line )
{
return PATH[ line ][ column ];
};


function restart()
{

}


function addTower( event )
{
    // check if we have the necessary money
if ( Main.getMoney() < Tower.COST )
    {
    return;
    }

var canvasRect = Game.getCanvas().getHtmlCanvasElement().getBoundingClientRect();

var x = event.clientX - canvasRect.left;
var y = event.clientY - canvasRect.top;

var column = Math.floor( x / Main.SQUARE_SIZE );
var line = Math.floor( y / Main.SQUARE_SIZE );

    // check if the position is valid for a tower
if ( column >= 0 &&
     column < MAP_INFO.columns &&
     line >= 0 &&
     line < MAP_INFO.lines &&
     MAP_INFO.map[ line ][ column ] === 0 )
    {
    var tower = new Tower({
            column: column,
            line: line,
            bullet_container: BULLETS_CONTAINER
        });
    TOWERS_CONTAINER.addChild( tower );
    }
}


Main.setMoney = function( money )
{
MENU_MONEY.setValue( money );
};


Main.addMoney = function( money )
{
var current = MENU_MONEY.getValue();

MENU_MONEY.setValue( current + money );
};


Main.getMoney = function()
{
return MENU_MONEY.getValue();
};


function tick()
{
if ( Tower._all )
    {
        // towers will attack a creep that is within its range
    for (var a = 0 ; a < Tower._all.length ; a++)
        {
        var tower = Tower._all[ a ];

        if ( tower.can_attack &&
             Creep._all )
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
}


})(Main || (Main = {}));