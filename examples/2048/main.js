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

    // duration of the animation
var MOVE_DURATION = 0.1;
var REMOVE_DURATION = 0.1;
var ADD_DURATION = 0.5;

Main.start = function()
{
var canvas = Game.getCanvas();

var gridSize = 4;   // lines/columns
var gridLength = Block.size * gridSize;

GRID = new Game.Grid({
        refX: canvas.width / 2 - gridLength / 2 + Block.size / 2,
        squareSize: Block.size,
        columns: gridSize,
        lines: gridSize,
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

var tween = new Game.Tween( block );

block.opacity = 0;

tween.to( { opacity: 1 }, ADD_DURATION );
tween.start();

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
var columns = GRID.columns;
var lines = GRID.lines;

var line, column;
var block;

    // combine
for (line = 0 ; line < lines ; line++)
    {
    var firstBlock = null;

    for (column = columns - 1 ; column >= 0 ; column--)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            if ( firstBlock === null )
                {
                firstBlock = block;
                }

            else
                {
                if ( firstBlock.value === block.value )
                    {
                    block.setValue( firstBlock.value * 2 );

                    GRID.removeElement( firstBlock.column, firstBlock.line );
                    firstBlock.remove( REMOVE_DURATION );
                    break;  // only one combination per line
                    }

                else
                    {
                    firstBlock = block;
                    }
                }
            }
        }
    }


    // count and move
    // loop in the opposite direction
for (line = 0 ; line < lines ; line++)
    {
    var position = 0;

    for (column = position ; column < columns ; column++)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            GRID.move( block.column, block.line, position, line, MOVE_DURATION );

            position++;
            }
        }
    }


checkGameState();
}

function moveRight()
{
var columns = GRID.columns;
var lines = GRID.lines;

var line, column;
var block;

    // combine
for (line = 0 ; line < lines ; line++)
    {
    var firstBlock = null;

    for (column = 0 ; column < columns ; column++)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            if ( firstBlock === null )
                {
                firstBlock = block;
                }

            else
                {
                if ( firstBlock.value === block.value )
                    {
                    block.setValue( firstBlock.value * 2 );

                    GRID.removeElement( firstBlock.column, firstBlock.line );
                    firstBlock.remove( REMOVE_DURATION );
                    break;  // only one combination per line
                    }

                else
                    {
                    firstBlock = block;
                    }
                }
            }
        }
    }


    // count and move
    // loop in the opposite direction
for (line = 0 ; line < lines ; line++)
    {
    var position = columns - 1;

    for (column = position ; column >= 0 ; column--)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            GRID.move( block.column, block.line, position, line, MOVE_DURATION );

            position--;
            }
        }
    }


checkGameState();
}


function moveUp()
{
var columns = GRID.columns;
var lines = GRID.lines;

var line, column;
var block;

    // combine
for (column = 0 ; column < columns ; column++)
    {
    var firstBlock = null;

    for (line = lines - 1 ; line >= 0 ; line--)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            if ( firstBlock === null )
                {
                firstBlock = block;
                }

            else
                {
                if ( firstBlock.value === block.value )
                    {
                    block.setValue( firstBlock.value * 2 );

                    GRID.removeElement( firstBlock.column, firstBlock.line );
                    firstBlock.remove( REMOVE_DURATION );
                    break;  // only one combination per line
                    }

                else
                    {
                    firstBlock = block;
                    }
                }
            }
        }
    }


    // count and move
    // loop in the opposite direction
for (column = 0 ; column < columns ; column++)
    {
    var position = 0;

    for (line = position ; line < lines ; line++)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            GRID.move( block.column, block.line, column, position, MOVE_DURATION );

            position++;
            }
        }
    }


checkGameState();
}

function moveDown()
{
var columns = GRID.columns;
var lines = GRID.lines;

var line, column;
var block;

    // combine
for (column = 0 ; column < columns ; column++)
    {
    var firstBlock = null;

    for (line = 0 ; line < lines ; line++)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            if ( firstBlock === null )
                {
                firstBlock = block;
                }

            else
                {
                if ( firstBlock.value === block.value )
                    {
                    block.setValue( firstBlock.value * 2 );

                    GRID.removeElement( firstBlock.column, firstBlock.line );
                    firstBlock.remove( REMOVE_DURATION );
                    break;  // only one combination per line
                    }

                else
                    {
                    firstBlock = block;
                    }
                }
            }
        }
    }


    // count and move
    // loop in the opposite direction
for (column = 0 ; column < columns ; column++)
    {
    var position = lines - 1;

    for (line = position ; line >= 0 ; line--)
        {
        block = GRID.get( column, line );

        if ( block !== null )
            {
            GRID.move( block.column, block.line, column, position, MOVE_DURATION );

            position--;
            }
        }
    }


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
    var text = 'Game has ended. ';

    if ( gameEnded === 1 )
        {
        text += 'Victory!';
        }

    else
        {
        text += 'Defeat!';
        }

    var canvas = Game.getCanvas();

    var message = new Game.Text({
            x: canvas.width / 2,
            y: canvas.height,
            text: text,
            textAlign: 'center',
            textBaseline: 'bottom',
            timeout: 2
        });
    Game.addElement( message );

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

