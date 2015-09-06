window.onload = function()
{
Game.init( document.body, 272, 160 );

var path = '../assets/';
var preload = new Game.Preload({ save_global: true });

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


var rogue = new Unit( centerX, centerY + 50, UnitState.idle );
Game.addElement( rogue.sprite );


    // by pressing the left/right arrow key, we can change the state of the game
var nextState = rogue.state;

window.addEventListener( 'keydown', function( event )
    {
    var key = event.keyCode;

    switch( key )
        {
        case Game.Utilities.KEY_CODE.leftArrow:
            nextState = UnitState.walk_left;
            break;

        case Game.Utilities.KEY_CODE.rightArrow:
            nextState = UnitState.walk_right;
            break;
        }
    });
window.addEventListener( 'keyup', function( event )
    {
    var key = event.keyCode;

    switch( key )
        {
        case Game.Utilities.KEY_CODE.leftArrow:
        case Game.Utilities.KEY_CODE.rightArrow:
            nextState = UnitState.idle;
            break;
        }
    });


Game.addToGameLoop( function()
    {
    if ( nextState !== rogue.state )
        {
        rogue.setState( nextState );

        switch( nextState )
            {
            case UnitState.idle:
                frontTrees.clearInterval();
                break;

            case UnitState.walk_left:
                frontTrees.setDirection( Game.ScrollingBitmapArgs.Direction.left );
                frontTrees.setInterval( 0.1 );
                break;

            case UnitState.walk_right:
                frontTrees.setDirection( Game.ScrollingBitmapArgs.Direction.right );
                frontTrees.setInterval( 0.1 );
            }
        }
    }, 0 );
}