window.onload = function()
{
Game.init( document.body, 400, 400 );

var snake = new Snake({
        x: 200,
        y: 200
    });
Game.addElement( snake );


document.body.addEventListener( 'keydown', function( event )
    {
    var key = event.keyCode;

    if ( key === Utilities.KEY_CODE.a )
        {
        snake.moveAngle( 180, true );
        }

    else if ( key === Utilities.KEY_CODE.d )
        {
        snake.moveAngle( 0, true );
        }

    else if ( key === Utilities.KEY_CODE.w )
        {
        snake.moveAngle( -90, true );
        }

    else if ( key === Utilities.KEY_CODE.s )
        {
        snake.moveAngle( 90, true );
        }
    });
};


function Snake( args )
{
Game.Unit.call( this, args );

var rect = new Game.Rectangle({
        width: 20,
        height: 20,
        color: 'green'
    });
this.addChild( rect );
}

Utilities.inheritPrototype( Snake, Game.Unit );


