var CATEGORIES = {
    player: 1,
    enemy: 2
};


window.onload = function()
{
Game.init( document.body, 400, 400 );
Game.activateMouseMoveEvents( 50 );


    // add the player
var player = new Player( 200, 200 );

player.addEventListener( 'collision', function( data )
    {
    console.log( 'Collision!' );
    });
Game.addElement( player );

    // its movement is controlled with the mouse
Game.addToGameLoop( function()
    {
    var position = Game.getMousePosition();

    var rect = Game.getCanvas().getHtmlCanvasElement().getBoundingClientRect();

    player.x = position.x - rect.left;
    player.y = position.y - rect.top;
    }, 0.05 );


    // container for the enemy units
var enemiesContainer = new Game.Container({
        x: 100,
        y: 100
    });
enemiesContainer.scaleX = 2;
Game.addElement( enemiesContainer );


var enemy1 = new Enemy( 110, 130 );
enemy1.scaleX = 0.8;
Game.addElement( enemy1 );

var enemy2 = new Enemy( 100, 100 );
enemy2.rotation = -Math.PI / 4;
enemy2.scaleY = 2;
enemiesContainer.addChild( enemy2 );


window.addEventListener( 'keydown', function( event )
    {
    var step = 0.1;

    switch( event.keyCode )
        {
        case Game.Utilities.KEY_CODE.leftArrow:
            player.scaleX -= step;
            break;

        case Game.Utilities.KEY_CODE.rightArrow:
            player.scaleX += step;
            break;

        case Game.Utilities.KEY_CODE.upArrow:
            player.scaleY -= step;
            break;

        case Game.Utilities.KEY_CODE.downArrow:
            player.scaleY += step;
            break;

        case Game.Utilities.KEY_CODE.space:
            player.weapon.forceFire();
            break;

        case Game.Utilities.KEY_CODE.r:
            player.rotation += Math.PI / 6;
            break;
        }
    });
};


function Player( x, y )
{
Game.Rectangle.call( this, {
        x: x,
        y: y,
        width: 10,
        height: 10,
        color: 'blue',
        category: CATEGORIES.player,
        collidesWith: CATEGORIES.enemy
    });

this._has_logic = true;
this.weapon = new Game.Weapon({
        element: this,
        bulletContainer: Game.getCanvas()
    });
}

Game.Utilities.inheritPrototype( Player, Game.Rectangle );


Player.prototype.logic = function( deltaTime )
{
this.weapon.logic( deltaTime );
};


function Enemy( x, y )
{
Game.Rectangle.call( this, {
        x: x,
        y: y,
        width: 20,
        height: 20,
        color: 'red',
        category: CATEGORIES.enemy
    });
}

Game.Utilities.inheritPrototype( Enemy, Game.Rectangle );
