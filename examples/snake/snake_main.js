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

var Direction = {
    left: 0,
    right: 1,
    up: 2,
    down: 3
};

SnakeGame.start = function()
{
GRID = new Game.Grid({
        squareSize: 10,
        columns: 20,
        lines: 20,
        refX: 20,
        refY: 20
    });

SNAKE = new Snake({
        column: 10,
        line: 10,
        direction: Direction.right
    });


document.body.addEventListener( 'keydown', SnakeGame.keyDown );

SNAKE.addTail();
SNAKE.addTail();
SNAKE.addTail();


GRID.addEventListener( 'collision', function( elementA, elementB )
    {

    });


Game.addToGameLoop( function()
    {
    SNAKE.tick();
    }, 0.1 );
Game.addToGameLoop( function()
    {
    var position = GRID.getRandomPosition();

    var food = new Food({
            column: position.column,
            line: position.line
        });

    ALL_FOOD.push( food );
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
GRID = null;
SNAKE = null;

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
console.log( 'Game Over!' );

SnakeGame.restart();
};


SnakeGame.getGrid = function()
{
return GRID;
};


window.Direction = Direction;
window.SnakeGame = SnakeGame;

}(window));

