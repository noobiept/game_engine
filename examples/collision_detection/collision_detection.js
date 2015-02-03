window.onload = function()
{
Game.init( document.body, 400, 400 );

    // define to which kind of units it can collide with
One.collidesWith = [ One, Two ];
Two.collidesWith = [ One ];


    // example 1 - remove a unit on collision, and stop the other
var one = new One( 100, 100 );
var two = new Two( 200, 100 );

one.addEventListener( 'collision', function( data )
    {
    console.log( 'Collision!' );

    var element = data.element;
    var collidedWith = data.collidedWith;

    element.stop();
    collidedWith.remove();
    });
one.moveTo( 300, 100 );


    // example 2 - collision depends on what classes were set in 'collidesWith', even if its the same class
var three = new One( 100, 200 );
var four = new One( 200, 200 );

three.moveLoop([
        { x: 300, y: 200 },
        { x: 100, y: 200 }
    ]);
three.addEventListener( 'collision', function( data )
    {
    console.log( 'Can collide with units of same type.' );
    });


    // example 3 - since 'Two' doesn't collide with 'Two', here the message won't be printed
var five = new Two( 100, 300 );
var six = new Two( 200, 300 );

five.moveLoop([
        { x: 300, y: 300 },
        { x: 100, y: 300 }
    ]);
five.addEventListener( 'collision', function( data )
    {
    console.log( 'No collision here!' );
    });
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

