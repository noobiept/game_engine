window.onload = function()
{
Game.init( document.body, 400, 400 );

var assetsPath = '../assets/';


    // save to global object (to get the data, use the Game.Preload.get())
    // advantage in not needing to keep track of the preload object
    // disadvantage in that you may overwrite stuff (if you try to add with the same id)
var preload = new Game.Preload({ saveGlobal: true });

preload.addEventListener( 'complete', complete );

preload.load( 'mystery_ship', assetsPath + 'images/mystery_ship.png' );
preload.load( 'scumm_bar', assetsPath + 'sounds/scumm_bar.ogg' );
preload.load( 'json_test', assetsPath + 'json/test.json' );
preload.load( 'text_test', assetsPath + 'texts/test.txt', Game.Preload.TYPES.text );


    // save in object (to get the data, use preload2.get())
var preload2 = new Game.Preload();


var manifest = [
        { id: 'one', path: 'ship_one_1.png' },
        { id: 'two', path: 'ship_two_1.png' },
        { id: 'three', path: 'ship_three_1.png' }
    ];

preload2.addEventListener( 'fileload', function( data )
    {
    console.log( 'Loaded,', data.id );
    });
preload2.addEventListener( 'progress', function( progress )
    {
    console.log( progress );
    });
preload2.addEventListener( 'complete', function()
    {
    var one = preload2.get( 'one' );
    var two = preload2.get( 'two' );
    var three = preload2.get( 'three' );

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
preload2.loadManifest( manifest, assetsPath + 'images/' );
};


function complete()
{
    // example 1 -- load an image
var bitmap = new Game.Bitmap({
        x: 200,
        y: 200,
        image: Game.Preload.get( 'mystery_ship' )
    });

bitmap.rotate( 90, true );
bitmap.addEventListener( 'click', function( event )
    {
    console.log( 'bitmap' );
    });

Game.addElement( bitmap );


    // example 2 -- play a sound
Game.Sound.play( Game.Preload.get( 'scumm_bar' ) );


    // example 3 -- load json data
var obj = Game.Preload.get( 'json_test' );

var rectangle = new Game.Rectangle({
        x: obj.x,
        y: obj.y,
        width: obj.width,
        height: obj.height,
        color: obj.color
    });

Game.addElement( rectangle );


    // example 4 -- load and display text
var textElement = new Game.Text({
        x: 200,
        y: 10,
        text: Game.Preload.get( 'text_test' ),
        fontFamily: 'serif',
        fontSize: 25
    });

textElement.textAlign = 'center';

Game.addElement( textElement );
}