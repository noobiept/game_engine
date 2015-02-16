window.onload = function()
{
Game.init( document.body, 400, 400 );

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
var canvas = Game.getCanvas();

GRID = new Game.Grid({
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
function secondPhase()
{
var canvas = Game.getCanvas();

canvas.removeEventListener( 'click', clickEvent );

Game.addToGameLoop( gameLogic, 0.5 );
}


function clickEvent( event )
{
var canvas = Game.getCanvas();
var canvasRect = canvas.getBoundingClientRect();

var x = event.x - canvasRect.left;
var y = event.y - canvasRect.top;

var gridPosition = GRID.toGrid( x, y );

var previous = GRID.getPosition( gridPosition.column, gridPosition.line );

if ( previous !== null )
    {
    GRID.removeElement( previous );
    Game.removeElement( previous );
    }

else
    {
    var element = new Square();

    GRID.addElement( element, gridPosition.column, gridPosition.line );
    }
}



function gameLogic()
{
    //HERE
}



Main.clear = function()
{
GRID.remove();
GRID = null;

var canvas = Game.getCanvas();

canvas.removeEventListener( 'click', clickEvent );

Game.removeAllCallbacks();
};


Main.restart = function()
{
Main.clear();
Main.start();
};


window.Main = Main;

}(window));