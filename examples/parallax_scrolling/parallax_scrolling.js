window.onload = function()
{
Game.init( document.body, 400, 400 );

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


var rogue = new Game.Sprite({
        x: centerX,
        y: centerY + 50,
        image: Game.Preload.get( 'rogue' ),
        frameWidth: 32,
        frameHeight: 32,
        interval: 0.3,
        animations: {
            idle_left: [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ],
            idle_right: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
            walk_left: [ 70, 71, 72, 73, 74, 75, 76, 77, 78, 79 ],
            walk_right: [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ]
        }
    });
rogue.play( 'idle_right' );
Game.addElement( rogue );


window.addEventListener( 'keydown', function( event )
    {
    var key = event.keyCode;

    switch( key )
        {
        case Game.Utilities.KEY_CODE.leftArrow:
            frontTrees.scroll_left();
            rogue.play( 'walk_left' );
            break;

        case Game.Utilities.KEY_CODE.rightArrow:
            frontTrees.scroll_right();
            rogue.play( 'walk_right' );
            break;
        }
    });
window.addEventListener( 'keyup', function( event )
    {
    var key = event.keyCode;

    switch( key )
        {
        case Game.Utilities.KEY_CODE.leftArrow:
            rogue.play( 'idle_left' );
            break;

        case Game.Utilities.KEY_CODE.rightArrow:
            rogue.play( 'idle_right' );
            break;
        }
    });
}