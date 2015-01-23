window.onload = function()
{
Game.init( document.body, 400, 400 );

Game.Preload.load( 'mystery_ship.png', function( element )
    {
    var image = new Game.Bitmap( 200, 200, element );

    image.rotate( 10, true );
    image.addEventListener( 'click', function( event )
        {
        console.log( 'bitmap' );
        });

    Game.addElement( image );
    });
};