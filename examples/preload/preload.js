window.onload = function()
{
Game.init( document.body, 400, 400 );

Game.Preload.load( 'mystery_ship', 'mystery_ship.png', function( image )
    {
    var bitmap = new Game.Bitmap({
            x: 200,
            y: 200,
            image: image
        });

    bitmap.rotate( 90, true );
    bitmap.addEventListener( 'click', function( event )
        {
        console.log( 'bitmap' );
        });

    Game.addElement( bitmap );
    });


Game.Preload.load( 'scumm_bar', 'scumm_bar.ogg', function( audioBuffer )
    {
    Game.Sound.play( audioBuffer );
    });


Game.Preload.load( 'json_test', 'test.json', function( obj )
    {
    var rectangle = new Game.Rectangle({
            x: obj.x,
            y: obj.y,
            width: obj.width,
            height: obj.height,
            color: obj.color
        });

    Game.addElement( rectangle );
    });

Game.Preload.load( 'text_test', 'test.txt', function( text )
    {
    var textElement = new Game.Text({
            x: 200,
            y: 10,
            text: text,
            fontFamily: 'serif',
            fontSize: 25
        });

    textElement.textAlign = 'center';

    Game.addElement( textElement );
    });


var manifest = [
        { id: 'one', path: 'ship_one_1.png' },
        { id: 'two', path: 'ship_two_1.png' },
        { id: 'three', path: 'ship_three_1.png' }
    ];

Game.Preload.loadManifest( manifest, 'a/', function()
    {
    var one = Game.Preload.get( 'one' );
    var two = Game.Preload.get( 'two' );
    var three = Game.Preload.get( 'three' );

    var oneBitmap = new Game.Bitmap({
            x: 50,
            y: 350,
            image: one
        });
    var twoBitmap = new Game.Bitmap({
            x: 200,
            y: 350,
            image: two
        });
    var threeBitmap = new Game.Bitmap({
            x: 350,
            y: 350,
            image: three
        });

    Game.addElement( oneBitmap );
    Game.addElement( twoBitmap );
    Game.addElement( threeBitmap );
    });
};