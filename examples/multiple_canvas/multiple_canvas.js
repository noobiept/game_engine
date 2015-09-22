window.onload = function()
{
var preload = new Game.Preload({ saveGlobal: true });

preload.addEventListener( 'complete', start );
preload.load( 'background', '../assets/scrolling_bitmap/parallax-forest.png' );
};


function start()
{
var width = 272;
var height = 160;

Game.init( document.body, width, height );

var canvas1 = Game.getCanvas();
var canvas2 = new Game.Canvas({
        width: width,
        height: height
    });

    // since we only need to draw the background once, no need to keep re-drawing it on the game loop
canvas2.update_on_loop = false;
canvas2.events_enabled = false;

    // add this canvas in the 0 position, which is one most to the back
Game.addCanvas( canvas2, 0 );

    // add the background to canvas2
var background = new Game.Bitmap({
        x: width / 2,
        y: height / 2,
        image: Game.Preload.get( 'background' )
    });
canvas2.addChild( background );
canvas2.draw();


    // add a rectangle to canvas1. This one will get updated on the game loop (since we didn't change the .update_on_loop property)
var rect = new Game.Rectangle({
        x: 10,
        y: height - 20,
        width: 20,
        height: 20,
        color: 'red'
    });
canvas1.addChild( rect );


    // move it across the canvas
var move = new Game.Tween( rect );

move.to({
        x: width - 10
    }, 2 ).start();
}