window.onload = function()
{
Game.init( document.body, 400, 400 );

    // set up the game menu
var menu = new Game.Html.HtmlContainer({ cssId: 'GameMenu' });

document.body.appendChild( menu.container );

var start = new Game.Html.TwoState({
        cssId: 'Start',
        cssClass: 'button',
        value: 'Start',
        value2: 'Restart',
        callback: function()
            {
            Main.secondPhase();
            },
        callback2: function()
            {
            Main.restart();
            }
    });
menu.addChild( start );

    // start the game on the first phase
Main.firstPhase();
};



(function(window)
{
function Main()
{

}

var GRID;

/*
    Starts the initial phase where you add some squares
 */
Main.firstPhase = function()
{
var canvas = Game.getCanvas().getHtmlCanvasElement();

GRID = new Game.ElementGrid({
        squareSize: Square.SIZE,
        columns: Math.floor( canvas.width / Square.SIZE ),
        lines: Math.floor( canvas.height / Square.SIZE ),
        background: { color: 'gray', fill: false }
    });


canvas.addEventListener( 'click', clickEvent );
};


/*
    Second phase of the game, where based on the initial setup done previously, the game is played out by itself
 */
Main.secondPhase = function()
{
var canvas = Game.getCanvas().getHtmlCanvasElement();

canvas.removeEventListener( 'click', clickEvent );

Game.addToGameLoop( gameLogic, 0.5 );
};


function clickEvent( event )
{
var canvas = Game.getCanvas().getHtmlCanvasElement();
var canvasRect = canvas.getBoundingClientRect();

var x = event.clientX - canvasRect.left;
var y = event.clientY - canvasRect.top;

var gridPosition = GRID.toGrid( x, y );

var previous = GRID.get( gridPosition.column, gridPosition.line );

if ( previous !== null )
    {
    removeSquare( previous );
    }

else
    {
    addSquare( gridPosition.column, gridPosition.line );
    }
}


function addSquare( column, line )
{
var element = new Square();

GRID.add( element, column, line );
}


function removeSquare( square )
{
GRID.remove( square.column, square.line );
Game.removeElement( square );
}



function gameLogic()
{
var changes = [];

for (var column = 0 ; column < GRID.columns ; column++)
    {
    for (var line = 0 ; line < GRID.lines ; line++)
        {
        var square = GRID.get( column, line );
        var neighbors = GRID.getNeighbors( column, line );
        var howMany = neighbors.length;

        if ( square !== null )
            {
            if ( howMany <= 1 || howMany >= 4 )
                {
                changes.push({ column: column, line: line, setAlive: false });
                }
            }

        else
            {
            if ( howMany === 3 )
                {
                changes.push({ column: column, line: line, setAlive: true });
                }
            }
        }
    }


for (var a = 0 ; a < changes.length ; a++)
    {
    var change = changes[ a ];

    if ( change.setAlive === true )
        {
        addSquare( change.column, change.line );
        }

    else
        {
        var element = GRID.get( change.column, change.line );

        if ( element )
            {
            removeSquare( element );
            }
        }
    }
}



Main.clear = function()
{
for (var column = 0 ; column < GRID.columns ; column++)
    {
    for (var line = 0 ; line < GRID.lines ; line++)
        {
        var element = GRID.get( column, line );

        if ( element )
            {
            element.remove();
            }
        }
    }

GRID.clear();
GRID = null;

var canvas = Game.getCanvas().getHtmlCanvasElement();

canvas.removeEventListener( 'click', clickEvent );

Game.removeAllCallbacks();
};


Main.restart = function()
{
Main.clear();
Main.firstPhase();
};



window.Main = Main;

}(window));