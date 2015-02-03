window.onload = function()
{
Game.init( document.body, 400, 400 );

One.collidesWith = [ One, Two ];
Two.collidesWith = [ One ];


var one = new One( 100, 100 );
var two = new Two( 200, 100 );

one.addEventListener( 'collision', function( data )
    {
    console.log( 'Collision!' );

    var element = data.element;
    var collidedWith = data.collidedWith;

    element.stop();
    collidedWith.remove();
    Game.removeElement( collidedWith );
    });


one.moveTo( 300, 100 );
};



function One( x, y )
{
var shape = new Game.Rectangle( 0, 0, 10, 10, 'blue' );

Game.Unit.call( this, {
        children: shape
    });

this.x = x;
this.y = y;

Game.addElement( this );
}

Utilities.inheritPrototype( One, Game.Unit );



function Two( x, y )
{
var shape = new Game.Rectangle( 0, 0, 10, 10, 'red' );

Game.Unit.call( this, {
        children: shape
    });

this.x = x;
this.y = y;

Game.addElement( this );
}

Utilities.inheritPrototype( Two, Game.Unit );

