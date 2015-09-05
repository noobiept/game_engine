window.onload = function()
{
Game.init( document.body, 400, 400 );

var path = '../assets/scrolling_bitmap/';
var preload = new Game.Preload({ save_global: true });

var manifest = [
        { id: 'back-trees', path: 'parallax-forest-back-trees.png' },
        { id: 'front-trees', path: 'parallax-forest-front-trees.png' },
        { id: 'lights', path: 'parallax-forest-lights.png' },
        { id: 'middle-trees', path: 'parallax-forest-middle-trees.png' }
    ];
preload.addEventListener( 'complete', start );
preload.loadManifest( manifest, path );
};


function start()
{
var canvas = Game.getCanvas();


var backTrees = new Game.ScrollingBitmap({
        x: canvas.getWidth() / 2,
        y: canvas.getHeight() / 2,
        image: Game.Preload.get( 'back-trees' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 2,
        interval: 0.5
    });
Game.addElement( backTrees );


var lights = new Game.ScrollingBitmap({
        x: canvas.getWidth() / 2,
        y: canvas.getHeight() / 2,
        image: Game.Preload.get( 'lights' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 1,
        interval: 2
    });
Game.addElement( lights );


var middleTrees = new Game.ScrollingBitmap({
        x: canvas.getWidth() / 2,
        y: canvas.getHeight() / 2,
        image: Game.Preload.get( 'middle-trees' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 1,
        interval: 0.3
    });
Game.addElement( middleTrees );


    // without an interval, its going to be controlled manually
var frontTrees = new Game.ScrollingBitmap({
        x: canvas.getWidth() / 2,
        y: canvas.getHeight() / 2,
        image: Game.Preload.get( 'front-trees' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 2
    });
Game.addElement( frontTrees );


window.addEventListener( 'keydown', function( event )
    {
    var key = event.keyCode;

    if ( key === Game.Utilities.KEY_CODE.leftArrow )
        {
        frontTrees.scroll_left();
        }

    else if ( key === Game.Utilities.KEY_CODE.rightArrow )
        {
        frontTrees.scroll_right();
        }
    });
}