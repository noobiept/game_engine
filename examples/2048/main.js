window.onload = function()
{
Game.init( document.body, 400, 400 );

Main.start();
};


(function(window)
{
function Main()
{

}

var SPAWN_VALUES = [ 2,4 ];
var GRID;

Main.start = function()
{
GRID = new Game.Grid({
        squareSize: Block.size,
        columns: 4,
        lines: 4,
        background: { color: 'gray', fill: false }
    });

Main.addRandomBlock();

document.body.addEventListener( 'keyup', keyEvents );
};

Main.clear = function()
{
document.body.removeEventListener( 'keyup', keyEvents );

var columns = GRID.columns;
var lines = GRID.lines;

for (var column = 0 ; column < columns ; column++)
    {
    for (var line = 0 ; line < lines ; line++)
        {
        var element = GRID.get( column, line );

        if ( element )
            {
            element.remove();
            }
        }
    }

GRID.remove();
GRID = null;
};


Main.restart = function()
{
Main.clear();
Main.start();
};


Main.addRandomBlock = function()
{
var position = GRID.getRandomEmptyPosition();

if ( !position )
    {
    return;
    }

var valueIndex = Utilities.getRandomInt( 0, SPAWN_VALUES.length - 1 );

var value = SPAWN_VALUES[ valueIndex ];

var block = new Block({
        value: value
    });
Game.addElement( block );

GRID.add( block, position.column, position.line );
};


function keyEvents( event )
{
var key = event.keyCode;

switch( key )
    {
    case Utilities.KEY_CODE.leftArrow:
    case Utilities.KEY_CODE.a:

        moveLeft();
        break;

    case Utilities.KEY_CODE.rightArrow:
    case Utilities.KEY_CODE.d:

        moveRight();
        break;

    case Utilities.KEY_CODE.upArrow:
    case Utilities.KEY_CODE.w:

        moveUp();
        break;

    case Utilities.KEY_CODE.downArrow:
    case Utilities.KEY_CODE.s:

        moveDown();
        break;
    }
}


function moveLeft()
{
checkGameState();
}

function moveRight()
{
checkGameState();
}


function moveUp()
{
checkGameState();
}

function moveDown()
{
checkGameState();
}

/*
    Check after every move, to see if the game has ended, and if not, add a new block
 */
function checkGameState()
{
var gameEnded = hasGameEnded();

    // game has ended
if ( gameEnded !== 0 )
    {
    var text = 'Game has ended.\n\n';

    if ( gameEnded === 1 )
        {
        text += 'Victory!';
        }

    else
        {
        text += 'Defeat!';
        }

    console.log( text );
    Main.restart();
    }

    // keep going on
else
    {
    Main.addRandomBlock();
    }
}

/*
    - win:
        - when there's a block with a 2048 value

    - loose:
        - no more empty spaces and no adjacent blocks with the same value

    - returns:
        - 0 if game hasn't ended
        - 1 if ended in victory
        - -1 if ended in a loss
 */
function hasGameEnded()
{
    // check if there's a block value of 2048
var columns = GRID.columns;
var lines = GRID.lines;
var column, line;
var block;

for (column = 0 ; column < columns ; column++)
    {
    for (line = 0 ; line < lines ; line++)
        {
        block = GRID.get( column, line );

        if ( block && block.value >= 2048 )
            {
            return 1;
            }
        }
    }


    // check if there's an empty space (if there is, means the game hasn't ended)
if ( GRID.getRandomEmptyPosition() )
    {
    return 0;
    }


    // the grid is all filled, need to check if there's adjacent blocks with the same value
for (column = 0 ; column < columns ; column++)
    {
    for (line = 0 ; line < lines ; line++)
        {
        block = GRID.get( column, line );

            // check all positions around this one
        var left = GRID.get( column - 1, line );
        var right = GRID.get( column + 1, line );
        var up = GRID.get( column, line - 1 );
        var down = GRID.get( column, line + 1 );

        if ( (left && left.value === block.value) ||
             (right && right.value === block.value) ||
             (up && up.value === block.value) ||
             (down && down.value === block.value) )
            {
            return 0;
            }
        }
    }

return -1;
}



window.Main = Main;

}(window));

