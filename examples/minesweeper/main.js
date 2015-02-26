window.onload = function()
{
Game.init( document.body, 400, 400 );

    // disable the context menu (when right-clicking)
Game.getCanvas().oncontextmenu = function( event ) { return false; };

var manifest = [
        { id: 'one', path: 'one.png' },
        { id: 'two', path: 'two.png' },
        { id: 'three', path: 'three.png' },
        { id: 'four', path: 'four.png' },
        { id: 'five', path: 'five.png' },
        { id: 'six', path: 'six.png' },
        { id: 'seven', path: 'seven.png' },
        { id: 'eight', path: 'eight.png' },
        { id: 'hidden', path: 'hidden.png' },
        { id: 'hidden_mouse_over', path: 'hidden_mouse_over.png' },
        { id: 'blank', path: 'blank.png' },
        { id: 'mine', path: 'mine.png' },
        { id: 'mine_flag', path: 'mine_flag.png' },
        { id: 'question_mark', path: 'question_mark.png' }
    ];

Game.Preload.loadManifest( manifest, '../assets/images/', Main.start );
};



(function(window)
{
function Main()
{

}

var GRID;
var NUMBER_OF_MINES = 10;
var TIMER;
var COLUMNS = 10;
var LINES = 10;
var SELECTED_SQUARE = null;
var CANVAS_RECT = null;

Main.start = function()
{
GRID = new Game.Grid({
        squareSize: Square.SIZE,
        columns: COLUMNS,
        lines: LINES
    });
CANVAS_RECT = Game.getCanvas().getBoundingClientRect();


var emptyPositions = GRID.getEmptyPositions();
var minesPositions = Utilities.getSeveralRandomInts( 0, emptyPositions.length - 1, NUMBER_OF_MINES );
var square;
var column, line;


    // add all the squares
for (column = 0 ; column < COLUMNS ; column++)
    {
    for (line = 0 ; line < LINES ; line++)
        {
        square = new Square();

        Game.addElement( square );

        GRID.addElement( square, column, line );
        }
    }


    // add the mines
for (var a = minesPositions.length - 1 ; a >= 0 ; a--)
    {
    var index = minesPositions[ a ];
    var position = emptyPositions[ index ];

    square = GRID.getElement( position.column, position.line );
    square.value = Square.VALUE.mine;
    }


    // add the remaining values
for (column = 0 ; column < COLUMNS ; column++)
    {
    for (line = 0 ; line < LINES ; line++)
        {
        square = GRID.getElement( column, line );

        if ( square.value !== Square.VALUE.mine )
            {
            var minesAround = Main.minesAround( column, line );

            square.value = minesAround;
            }
        }
    }


document.body.addEventListener( 'mousemove', mouseMove );
document.body.addEventListener( 'mouseup', mouseClick );
};


Main.clear = function()
{
GRID.remove();
GRID = null;

SELECTED_SQUARE = null;

document.body.removeEventListener( 'mousemove', mouseMove );
document.body.removeEventListener( 'mouseup', mouseClick );
};


Main.restart = function()
{
Main.clear();
Main.start();
};


Main.minesAround = function( column, line )
{
var neighbors = GRID.getNeighbors( column, line );
var count = 0;

for (var a = neighbors.length - 1 ; a >= 0 ; a--)
    {
    if ( neighbors[ a ].value === Square.VALUE.mine )
        {
        count++;
        }
    }

return count;
};



function mouseMove( event )
{
var x = event.clientX - CANVAS_RECT.left;
var y = event.clientY - CANVAS_RECT.top;

var square = GRID.getElement2( x, y );

if ( !square || SELECTED_SQUARE === square || square.state === Square.STATE.revealed )
    {
    return;
    }


if ( SELECTED_SQUARE && SELECTED_SQUARE.state !== Square.STATE.revealed )
    {
    SELECTED_SQUARE.setMouseOver( false );
    }

square.setMouseOver( true );

SELECTED_SQUARE = square;
}


function mouseClick( event )
{
var button = event.button;
var x = event.clientX - CANVAS_RECT.left;
var y = event.clientY - CANVAS_RECT.top;

var square = GRID.getElement2( x, y );

if ( !square || square.state === Square.STATE.revealed )
    {
    return;
    }


if ( button === Utilities.MOUSE_CODE.left )
    {
    revealSquare( square );
    }

else if ( button === Utilities.MOUSE_CODE.right )
    {
    if ( square.state === Square.STATE.hidden )
        {
        square.setState( Square.STATE.question_mark );
        }

    else if ( square.state === Square.STATE.question_mark )
        {
        square.setState( Square.STATE.mine_flag );
        }

    else
        {
        square.setState( Square.STATE.hidden );
        }

        // the .setState() sets the background to hidden, but when we click we have the mouse over
    square.setMouseOver( true );
    }

}



function revealSquare( square )
{
if ( square.state === Square.STATE.revealed )
    {
    return;
    }

square.setState( Square.STATE.revealed );


if ( square.value === Square.VALUE.mine )
    {
    gameOver( false );
    return;
    }


    // need to reveal all the blank values around it
if ( square.value === Square.VALUE.blank )
    {
    revealAdjacents( square );
    }


    // check if the game is won (when the un-revealed squares are all mines)
var gameWon = true;

for (var column = 0 ; column < GRID.columns ; column++)
    {
    for (var line = 0 ; line < GRID.lines ; line++)
        {
        var element = GRID.getElement( column, line );

        if ( element.state !== Square.STATE.revealed &&
             element.value !== Square.VALUE.mine )
            {
            gameWon = false;
            break;
            }
        }
    }


if ( gameWon )
    {
    gameOver( true );
    }
}


function revealAdjacents( square )
{
var adjacents = GRID.getNeighbors( square.column, square.line );

for (var a = adjacents.length - 1 ; a >= 0 ; a--)
    {
    var adjacent = adjacents[ a ];

    if ( adjacent.state !== Square.STATE.revealed )
        {
        adjacent.setState( Square.STATE.revealed );

            // recursively reveal the adjacents of blank squares
        if ( adjacent.value === Square.VALUE.blank )
            {
            revealAdjacents( adjacent );
            }
        }
    }
}



function revealAllMines()
{
    //HERE
}


function gameOver( hasWon )
{
revealAllMines();

var message = 'Game Over!\n';

if ( hasWon )
    {
    message += 'You Won!';
    }

else
    {
    message += 'You Lost!';
    }

console.log( message );
}



window.Main = Main;

})(window);