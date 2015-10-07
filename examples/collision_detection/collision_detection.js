    // for collision detection
var CATEGORY = {
    friendly: 1,
    enemy: 2
};


window.onload = function()
{
Game.init( document.body, 400, 400 );

    // we set 'One' to collide with 'Two', and 'Two' to collide with 'One'
    // example 1 - remove a unit on collision, and stop the other
var one = new One( 100, 50 );
var two = new Two( 200, 50 );

one.addEventListener( 'collision', function( data )
    {
    addText( 'Collision!', two.x, two.y );

    var element = data.element;
    var collidedWith = data.collidedWith;

    element.movement.stop();
    collidedWith.remove();
    });
one.movement.moveTo( 300, 50 );


    // example 2 - no collision between elements of the same type
var three = new One( 100, 150 );
var four = new One( 200, 150 );

three.movement.moveLoop([
        { x: 300, y: 150 },
        { x: 100, y: 150 }
    ]);
three.addEventListener( 'collision', function( data )
    {
    addText( 'No text here.', four.x, four.y );
    });


    // example 3 - collision occurs between 'One' and 'Two'
var five = new One( 100, 250 );
var six = new Two( 200, 250 );

five.movement.moveLoop([
        { x: 300, y: 250 },
        { x: 100, y: 250 }
    ]);
six.addEventListener( 'collision', function( data )
    {
    addText( 'Collision!', six.x, six.y );
    });

    // example 4 - bullets respect the collision detection of the unit it was fired from
var seven = new One( 150, 350 );
var eight = new Two( 250, 350 );

seven.addEventListener( 'collision', function( data )
    {
    addText( 'Bullet collision!', eight.x, eight.y );
    });
seven.weapon.forceFire( 0, 0, 3 );
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
Game.Rectangle.call( this, {
        width: 10,
        height: 10,
        color: 'blue',
        category: CATEGORY.friendly,
        collidesWith: CATEGORY.enemy
    });

this._has_logic = true;
this.x = x;
this.y = y;

this.weapon = new Game.Weapon({
        element: this,
        bulletContainer: Game.getCanvas()
    });
this.movement = new Game.Movement({
        element: this,
        movementSpeed: 100
    });

Game.addElement( this );
}

Game.Utilities.inheritPrototype( One, Game.Rectangle );


One.prototype.logic = function( deltaTime )
{
this.movement.logic( deltaTime );
this.weapon.logic( deltaTime );
};


function Two( x, y )
{
Game.Rectangle.call( this, {
        width: 10,
        height: 10,
        color: 'red',
        category: CATEGORY.enemy,
        collidesWith: CATEGORY.friendly
    });

this._has_logic = true;
this.x = x;
this.y = y;

this.movement = new Game.Movement({
        element: this,
        movementSpeed: 100
    });

Game.addElement( this );
}

Game.Utilities.inheritPrototype( Two, Game.Rectangle );


Two.prototype.logic = function( deltaTime )
{
this.movement.logic( deltaTime );
};