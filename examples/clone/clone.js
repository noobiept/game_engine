window.onload = function()
{
var manifest = [
        { id: 'image', path: 'images/ship_one_1.png' },
        { id: 'sprite', path: 'sprites/sprite_example.png' },
        { id: 'scrolling_bitmap', path: 'scrolling_bitmap/vertical_scrolling.png' }
    ];

var preload = new Game.Preload({ saveGlobal: true });

preload.addEventListener( 'complete', start );
preload.loadManifest( manifest, '../assets/' );
};



function start()
{
Game.init( document.body, 400, 400 );

var startX = 20;


    // Rectangle
var rect = new Game.Rectangle({
        x: startX,
        y: 30,
        width: 20,
        height: 20,
        color: 'green'
    });
rect.scaleX = 1.2;
rect.scaleY = 1.6;
rect.rotate( 45, true );
rect.opacity = 0.5;

Game.addElement( rect );

animate( rect );


    // Circle
var circle = new Game.Circle({
        x: startX,
        y: 85,
        radius: 15,
        color: 'red'
    });
Game.addElement( circle );

animate( circle );


    // Text
var text = new Game.Text({
        x: startX,
        y: 140,
        text: 'Hi!',
        textAlign: 'center',
        textBaseline: 'middle'
    });
text.rotate( 90, true );

Game.addElement( text );

animate( text );


    // Bitmap
var bitmap = new Game.Bitmap({
        x: startX,
        y: 195,
        image: Game.Preload.get( 'image' )
    });
Game.addElement( bitmap );

animate( bitmap );


    // Sprite
var sprite = new Game.Sprite({
        x: startX,
        y: 250,
        image: Game.Preload.get( 'sprite' ),
        frameWidth: 40,
        frameHeight: 40
    });
Game.addElement( sprite );

animate( sprite );


    // ScrollingBitmap
var scrolling = new Game.ScrollingBitmap({
        x: startX,
        y: 305,
        image: Game.Preload.get( 'scrolling_bitmap' ),
        direction: Game.ScrollingBitmapArgs.Direction.top,
        step: 1,
        interval: 0.1
    });
Game.addElement( scrolling );

animate( scrolling );


    // Container
var containerRect = rect.clone();

containerRect.x = 0;
containerRect.y = 0;

var container = new Game.Container({
        x: startX,
        y: 360,
        children: containerRect
    });
Game.addElement( container );

animate( container );
}




function animate( element )
{
var duration = 2;
var tween = new Game.Tween( element );

tween.to({ x: 380 }, duration ).call( function()
    {
    var clone = element.clone();

    Game.addElement( clone );

    var cloneTween = new Game.Tween( clone );

    cloneTween.to({ x: 20 }, duration ).start();
    }).start();
}