var GRID;

var Direction = {
    left: 0,
    right: 1,
    up: 2,
    down: 3
};

window.onload = function()
{
Game.init( document.body, 400, 400 );

GRID = new Game.Grid({
        squareSize: 10,
        columns: 20,
        lines: 20,
        refX: 20,
        refY: 20
    });

var snake = new Snake({
        column: 10,
        line: 10,
        direction: Direction.right
    });


document.body.addEventListener( 'keydown', function( event )
    {
    var key = event.keyCode;

    if ( key === Utilities.KEY_CODE.a )
        {
        snake.changeDirection( Direction.left );
        }

    else if ( key === Utilities.KEY_CODE.d )
        {
        snake.changeDirection( Direction.right );
        }

    else if ( key === Utilities.KEY_CODE.w )
        {
        snake.changeDirection( Direction.up );
        }

    else if ( key === Utilities.KEY_CODE.s )
        {
        snake.changeDirection( Direction.down );
        }
    });

snake.addTail();
snake.addTail();
snake.addTail();


Game.addToGameLoop( function()
    {
    snake.tick();
    }, 0.1 );
};
