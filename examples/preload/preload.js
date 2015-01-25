window.onload = function()
{
Game.init( document.body, 400, 400 );

Game.Preload.load( 'mystery_ship', 'mystery_ship.png', function( image )
    {
    var bitmap = new Game.Bitmap( 200, 200, image );

    bitmap.rotate( 10, true );
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
    console.log( obj );
    });

Game.Preload.load( 'text_test', 'test.txt', function( text )
    {
    console.log( text );
    });
};