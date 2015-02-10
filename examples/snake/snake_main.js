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

var COLLISION_CALLBACKS = [];

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
GRID = null;
SNAKE = null;
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

