window.onload = function()
{
Game.init( document.body, 400, 400 );

    // define to which kind of units it can collide with
One.collidesWith = [ One, Two ];
Two.collidesWith = [ One ];


    // example 1 - remove a unit on collision, and stop the other
var one = new One( 100, 50 );
var two = new Two( 200, 50 );

one.addEventListener( 'collision', function( data )
    {
    addText( 'Collision!', two.x, two.y );

    var element = data.element;
    var collidedWith = data.collidedWith;

    element.stop();
    collidedWith.remove();
    });
one.moveTo( 300, 50 );


    // example 2 - collision depends on what classes were set in 'collidesWith', even if its the same class
var three = new One( 100, 150 );
var four = new One( 200, 150 );

three.moveLoop([
        { x: 300, y: 150 },
        { x: 100, y: 150 }
    ]);
three.addEventListener( 'collision', function( data )
    {
    addText( 'Can collide with units of same type.', four.x, four.y );
    });


    // example 3 - since 'Two' doesn't collide with 'Two', here the message won't be printed
var five = new Two( 100, 250 );
var six = new Two( 200, 250 );

five.moveLoop([
        { x: 300, y: 250 },
        { x: 100, y: 250 }
    ]);
five.addEventListener( 'collision', function( data )
    {
    console.log( 'No collision here!' );
    });


    // example 4 - bullets respect the collision detection of the unit it was fired from
var seven = new One( 150, 350 );
var eight = new Two( 250, 350 );

seven.fireBullet( 0, 5 );
seven.addEventListener( 'collision', function( data )
    {
    addText( 'Bullet collision!', eight.x, eight.y );
    });
};


function addText( text, x, y )
{
var text = new Game.Text({
        text: text,
        timeout: 1
    });
text.x = x;
text.y = y;
text.textAlign = 'center';

Game.addElement( text );
}




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

