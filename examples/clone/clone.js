window.onload = function()
{
var manifest = [
        { id: 'image', path: 'images/ship_one_1.png' },
        { id: 'sprite', path: 'sprites/sprite_example.png' }
    ];

Game.Preload.loadManifest( manifest, '../assets/', start );
};



function start()
{
Game.init( document.body, 400, 400 );

var startX = 20;


    // Rectangle
var rect = new Game.Rectangle({
        x: startX,
        y: 40,
        width: 20,
        height: 20,
        color: 'green'
    });
Game.addElement( rect );

animate( rect );


    // Circle
var circle = new Game.Circle({
        x: startX,
        y: 100,
        radius: 15,
        color: 'red'
    });
Game.addElement( circle );

animate( circle );


    // Text
var text = new Game.Text({
        x: startX,
        y: 160,
        text: 'Hi!',
        textAlign: 'center',
        textBaseline: 'middle'
    });
Game.addElement( text );

animate( text );


    // Bitmap
var bitmap = new Game.Bitmap({
        x: startX,
        y: 220,
        image: Game.Preload.get( 'image' )
    });
Game.addElement( bitmap );

animate( bitmap );


    // Sprite
var sprite = new Game.Sprite({
        x: startX,
        y: 280,
        image: Game.Preload.get( 'sprite' ),
        frameWidth: 40,
        frameHeight: 40
    });
Game.addElement( sprite );

animate( sprite );


    // Container
var containerRect = rect.clone();

containerRect.x = 0;
containerRect.y = 0;

var container = new Game.Container({
        x: startX,
        y: 340,
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