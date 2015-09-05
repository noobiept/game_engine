window.onload = function()
{
Game.init( document.body, 400, 400 );

var assetsPath = '../assets/';

var preload = new Game.Preload({ save_global: true });

preload.addEventListener( 'complete', start );
preload.load( 'background', assetsPath + 'scrolling_bitmap/parallax-forest.png' );
};


function start()
{
var canvas = Game.getCanvas();

var background = new Game.ScrollingBitmap({
        x: canvas.getWidth() / 2,
        y: canvas.getHeight() / 2,
        image: Game.Preload.get( 'background' ),
        direction: Game.ScrollingBitmapArgs.Direction.left,
        step: 1,
        interval: 0.2
    });
Game.addElement( background );
}