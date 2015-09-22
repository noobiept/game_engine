window.onload = function()
{
Game.init( document.body, 272, 160 );

var path = '../assets/';
var preload = new Game.Preload({ saveGlobal: true });

var manifest = [
        { id: 'back-trees', path: 'scrolling_bitmap/parallax-forest-back-trees.png' },
        { id: 'front-trees', path: 'scrolling_bitmap/parallax-forest-front-trees.png' },
        { id: 'lights', path: 'scrolling_bitmap/parallax-forest-lights.png' },
        { id: 'middle-trees', path: 'scrolling_bitmap/parallax-forest-middle-trees.png' },
        { id: 'rogue', path: 'sprites/rogue.png' }
    ];
preload.addEventListener( 'complete', start );
preload.loadManifest( manifest, path );
};


    // possible valid inputs
var Input = {
    press_leftArrow: 0,
    press_rightArrow: 1,
    release_leftArrow: 2,
    release_rightArrow: 3
};


function start()
{
var canvas = Game.getCanvas();
var centerX = canvas.getWidth() / 2;
var centerY = canvas.getHeight() / 2;


var backTrees = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get( 'back-trees' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 2,
        interval: 0.5
    });
Game.addElement( backTrees );


var lights = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get( 'lights' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 1,
        interval: 2
    });
Game.addElement( lights );


var middleTrees = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get( 'middle-trees' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 1,
        interval: 0.3
    });
Game.addElement( middleTrees );


    // without an interval, its going to be controlled manually
var frontTrees = new Game.ScrollingBitmap({
        x: centerX,
        y: centerY,
        image: Game.Preload.get( 'front-trees' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 2
    });
Game.addElement( frontTrees );


var rogue = new Unit( centerX, centerY + 50, UnitState.idle_right );
Game.addElement( rogue );


    // move the front trees based on the unit movement
rogue.addEventListener( 'idle', function()
    {
    frontTrees.clearInterval();
    });
rogue.addEventListener( 'walk_left', function()
    {
    frontTrees.setDirection( Game.ScrollingBitmapArgs.Direction.left );
    frontTrees.setInterval( 0.1 );
    });
rogue.addEventListener( 'walk_right', function()
    {
    frontTrees.setDirection( Game.ScrollingBitmapArgs.Direction.right );
    frontTrees.setInterval( 0.1 );
    });


    // by pressing/releasing the left/right arrow key, we can change the state of the game
var currentInput = -1;
var nextInput = -1;


window.addEventListener( 'keydown', function( event )
    {
    var key = event.keyCode;

    switch( key )
        {
        case Game.Utilities.KEY_CODE.leftArrow:
            nextInput = Input.press_leftArrow;
            break;

        case Game.Utilities.KEY_CODE.rightArrow:
            nextInput = Input.press_rightArrow;
            break;
        }
    });
window.addEventListener( 'keyup', function( event )
    {
    var key = event.keyCode;

    switch( key )
        {
        case Game.Utilities.KEY_CODE.leftArrow:
            nextInput = Input.release_leftArrow;
            break;

        case Game.Utilities.KEY_CODE.rightArrow:
            nextInput = Input.release_rightArrow;
            break;
        }
    });


    // handle the input
Game.addToGameLoop( function()
    {
    if ( currentInput !== nextInput )
        {
        currentInput = nextInput;

        rogue.handleInput( nextInput );
        }
    }, 0 );
}