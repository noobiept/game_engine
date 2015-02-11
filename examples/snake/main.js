window.onload = function()
{
Game.init( document.body, 400, 400 );

SnakeGame.start();
};



(function(window)
{
var SnakeGame = {};


var GRID;
var SNAKE;
var ALL_FOOD = [];
var TAIL_SIZE;

var COLLISION_CALLBACKS = [];

var Direction = {
    left: 0,
    right: 1,
    up: 2,
    down: 3
};

SnakeGame.start = function()
{
var canvas = Game.getCanvas();
var squareSize = 10;
var columns = 25;
var lines = 25;

    // center the grid
var refX = (canvas.width - squareSize * columns) / 2;
var refY = (canvas.height - squareSize * lines) / 2;


GRID = new Game.Grid({
        squareSize: squareSize,
        columns: columns,
        lines: lines,
        refX: refX,
        refY: refY,
        background: { color: 'gray', fill: false }
    });


SNAKE = new Snake({
        column: Math.round( columns / 2 ),
        line: Math.round( lines / 2 ),
        direction: Direction.right
    });

var fontSize = 20;

TAIL_SIZE = new Game.Text({
        x: 0,
        y: canvas.height - fontSize,
        fontSize: fontSize
    });
Game.addElement( TAIL_SIZE );

document.body.addEventListener( 'keydown', SnakeGame.keyDown );

SNAKE.addTail();
SNAKE.addTail();
SNAKE.addTail();

updateTailSize();


GRID.addEventListener( 'collision', function( data )
    {
    var elementA = data.element;
    var elementB = data.collidedWith;

    var constructorA = elementA.constructor;
    var constructorB = elementB.constructor;

    if ( constructorA === Tail )
        {
            // collision between tails
        if ( constructorB === Tail )
            {
                // this isn't executed right away since the listener will trigger during the tail's tick movement, so its better to wait for the update to finish, and then execute these functions
                // look at the functions added to the game loop
            COLLISION_CALLBACKS.push( function()
                {
                SnakeGame.gameOver();
                });
            }

            // collision between a tail and food
        else if ( constructorB === Food )
            {
            COLLISION_CALLBACKS.push( function()
                {
                SNAKE.addTail();
                elementB.remove();
                updateTailSize();
                });
            }
        }

        // means A is Food, and B is Tail
    else
        {
        COLLISION_CALLBACKS.push( function()
            {
            SNAKE.addTail();
            elementA.remove();
            updateTailSize();
            });
        }
    });


Game.addToGameLoop( function()
    {
    SNAKE.tick();


    while ( COLLISION_CALLBACKS.length > 0 )
        {
        var callback = COLLISION_CALLBACKS.pop();

        callback();
        }
    }, 0.1 );

Game.addToGameLoop( function()
    {
    var position = GRID.getRandomEmptyPosition( 5 );

    if ( position !== null )
        {
        var food = new Food({
                column: position.column,
                line: position.line
            });

        ALL_FOOD.push( food );
        }
    }, 1 );
};


SnakeGame.keyDown = function( event )
{
var key = event.keyCode;

if ( key === Utilities.KEY_CODE.a )
    {
    SNAKE.changeDirection( Direction.left );
    }

else if ( key === Utilities.KEY_CODE.d )
    {
    SNAKE.changeDirection( Direction.right );
    }

else if ( key === Utilities.KEY_CODE.w )
    {
    SNAKE.changeDirection( Direction.up );
    }

else if ( key === Utilities.KEY_CODE.s )
    {
    SNAKE.changeDirection( Direction.down );
    }
};



SnakeGame.clear = function()
{
SNAKE.remove();
SNAKE = null;
GRID.remove();
GRID = null;
TAIL_SIZE.remove();
TAIL_SIZE = null;

COLLISION_CALLBACKS.length = 0;

for (var a = ALL_FOOD.length - 1 ; a >= 0 ; a--)
    {
    ALL_FOOD[ a].remove();
    }

ALL_FOOD.length = 0;

document.body.removeEventListener( 'keydown', Game.keyDown );
Game.removeAllCallbacks();
};


SnakeGame.restart = function()
{
SnakeGame.clear();
SnakeGame.start();
};


SnakeGame.gameOver = function()
{
var canvas = Game.getCanvas();

var fontSize = 20;

var message = new Game.Text({
        x: canvas.width / 2,
        y: canvas.height - fontSize,
        fontSize: fontSize,
        text: 'Game Over!',
        timeout: 1,
        textAlign: 'center'
    });
Game.addElement( message );

SnakeGame.restart();
};


SnakeGame.getGrid = function()
{
return GRID;
};


function updateTailSize()
{
TAIL_SIZE.text = 'Tails: ' + SNAKE.getTailSize();
}


window.Direction = Direction;
window.SnakeGame = SnakeGame;

}(window));

