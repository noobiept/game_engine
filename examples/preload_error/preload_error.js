window.onload = function()
{
Game.init( document.body, 400, 400 );


var preload = new Game.Preload();
var doesntExist = 'doesnt_exist.png';   // we'll try to load a file that doesn't exist

var manifest = [
        { id: 'one', path: 'one.png' },
        { id: 'two', path: doesntExist },
        { id: 'three', path: 'three.png' },
        { id: 'four', path: 'four.png' },
        { id: 'five', path: doesntExist },
        { id: 'six', path: 'six.png' },
        { id: 'seven', path: 'seven.png' },
        { id: 'eight', path: doesntExist }
    ];

preload.addEventListener( 'complete', function( data )
    {
    var loaded = data.loaded_ids;
    var failed = data.failed_ids;

        // add the images that were successfully loaded
    for (var a = 0 ; a < loaded.length ; a++)
        {
        var image = preload.get( loaded[ a ] );
        var bitmap = new Game.Bitmap({
                x: 20 + a * 50,
                y: 20 + a * 50,
                image: image
            });
        Game.addElement( bitmap );
        }

        // list the ids of the elements that failed to load
    console.log( 'Failed to load: ' + failed.join( ' ' ) );
    });
preload.loadManifest( manifest, '../assets/images/' );
};
