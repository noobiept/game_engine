window.onload = function()
{
Main.init();
};


var Main;
(function(Main) {


var MAP_INFO = {
    columns: 16,
    lines: 16,
    positionType: {
        passable: 1,
        blocked: 0
    },
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
var MENU_MONEY;     // reference to the menu element that shows/holds the current money value
var MENU_LIFE;      // reference to the menu element that shows/holds the current life value
var MENU_RESTART;
var TOWER_GRID;     // keeps track of where the towers are added
var CREEP_HEALTH;   // health of the next creeps to be added (it changes overtime)


    // top level container for all the elements
var TERRAINS_CONTAINER;
var BULLETS_CONTAINER;
var CREEPS_CONTAINER;
var TOWERS_CONTAINER;

Main.SQUARE_SIZE = 25;


Main.init = function()
{
Game.init( document.body, 400, 400 );

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
var life = new Game.Html.Value({
        value: 0,
        preText: 'Lives:'
    });
var money = new Game.Html.Value({
        value: 0,
        preText: 'Money:'
    });
var restart = new Game.Html.Button({
        value: 'Restart',
        callback: Main.restart
    });

menu.addChild( life, money, restart );
document.body.appendChild( menu.container );

MENU_MONEY = money;
MENU_LIFE = life;
MENU_RESTART = restart;


    // start the game
Main.start();
};


Main.start = function()
{
var column;
var line;

    // starting values
Main.setMoney( 200 );
Main.setLife( 10 );
CREEP_HEALTH = 100;


TOWER_GRID = new Game.Grid({
        columns: MAP_INFO.columns,
        lines: MAP_INFO.lines
    });

    // add the terrain
    // and initialize the tower's grid
for (line = 0 ; line < MAP_INFO.lines ; line++)
    {
    for (column = 0 ; column < MAP_INFO.columns ; column++)
        {
        var value = MAP_INFO.map[ line ][ column ];

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
PATH = Game.PathFinding.breadthFirstSearch( MAP_INFO.map, MAP_INFO.end, MAP_INFO.positionType );


    // on click, add a tower (if it is on a valid position)
Game.getCanvasContainer().addEventListener( 'click', addTower );


    // add some creeps every second
Game.addToGameLoop( addCreeps, 1 );
Game.addToGameLoop( tick, 0 );
};


Main.getNextPosition = function( column, line )
{
return PATH[ line ][ column ];
};


function clear()
{
clearListeners();
clearElements();
}

function clearElements()
{
TERRAINS_CONTAINER.removeAllChildren();
BULLETS_CONTAINER.removeAllChildren();
CREEPS_CONTAINER.removeAllChildren();
TOWERS_CONTAINER.removeAllChildren();
}


function clearListeners()
{
Game.getCanvasContainer().removeEventListener( 'click', addTower );
Game.removeFromGameLoop( addCreeps );
Game.removeFromGameLoop( tick );
}



Main.restart = function()
{
clear();
Main.start();
};


/**
 * Add a creep at every spawn position.
 */
function addCreeps()
{
    // add a creep in all the start/spawn positions
for (var a = 0 ; a < MAP_INFO.start.length ; a++)
    {
    var position = MAP_INFO.start[ a ];

    var creep = new Creep({
        column: position.column,
        line: position.line,
        health: CREEP_HEALTH
    });
    CREEPS_CONTAINER.addChild( creep );
    }

    // increase the creeps health
CREEP_HEALTH += 17;
}


/**
 * Add a tower on click event.
 */
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
     TOWER_GRID.isEmpty( column, line ) &&      // check if there isn't a tower already there
     MAP_INFO.map[ line ][ column ] === 0 )     // check if this is a position not in the creeps path
    {
    var tower = new Tower({
            column: column,
            line: line,
            bullet_container: BULLETS_CONTAINER
        });
    TOWERS_CONTAINER.addChild( tower );

    TOWER_GRID.add( tower, column, line );
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


Main.setLife = function( life )
{
MENU_LIFE.setValue( life );
};


Main.addLife = function( life )
{
var current = MENU_LIFE.getValue();

MENU_LIFE.setValue( current + life );
};


Main.getLife = function()
{
return MENU_LIFE.getValue();
};


Main.gameOver = function()
{
var life = Main.getLife();

if ( life <= 0 )
    {
        // stop the game
    clearListeners();
    Game.stopGameLoop();

    MENU_RESTART.setActive( false );

        // show a message telling the game is over
    var container = Game.getCanvasContainer();
    var button = new Game.Html.Button({
            value: 'Ok',
            callback: function( button )
                {
                message.clear();
                clearElements();
                Game.startGameLoop();
                MENU_RESTART.setActive( true );
                Main.start();
                }
        });
    var message = new Game.Message({
            body: 'Game Over!',
            container: container,
            background: true,
            buttons: button
        });
    }
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
                if ( Game.Utilities.circleCircleCollision(
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