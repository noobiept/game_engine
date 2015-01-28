window.onload = function()
{
Game.init( document.body, 400, 400 );

Game.Preload.load( 'mystery_ship', 'mystery_ship.png', function( image )
    {
    var bitmap = new Game.Bitmap( 200, 200, image );

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
    var rectangle = new Game.Rectangle( obj.x, obj.y, obj.width, obj.height, obj.color );

    Game.addElement( rectangle );
    });

Game.Preload.load( 'text_test', 'test.txt', function( text )
    {
    var textElement = new Game.Text( text, 'monospace', 20 );

    textElement.x = 10;
    textElement.y = 10;

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

    var oneBitmap = new Game.Bitmap( 50, 350, one );
    var twoBitmap = new Game.Bitmap( 200, 350, two );
    var threeBitmap = new Game.Bitmap( 350, 350, three );

    Game.addElement( oneBitmap );
    Game.addElement( twoBitmap );
    Game.addElement( threeBitmap );
    });
};