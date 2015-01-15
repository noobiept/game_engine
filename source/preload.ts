    // typescript isn't recognizing this, so its added here
interface Window { URL: any }

module Game
{
export module Preload
    {
    var EXTENSIONS = {
        image: [ 'png', 'jpg', 'jpeg' ]
    };

    export function load( url, callback )
        {
        var request = new XMLHttpRequest();

            // events: progress / load / error / abort  //HERE
        request.addEventListener( 'load', function( event )
            {
            var type = getType( this.responseURL );

            if ( type === 'image' )
                {
                var image = new Image();

                image.src = window.URL.createObjectURL( this.response );

                callback( image );
                }

            else
                {
                callback( this.response );
                }

            }, false );

        request.open( 'get', url, true );
        request.responseType = 'blob';
        request.send();
        }

    export function loadManifest( manifest, callback )
        {

        }

    export function get( id )
        {

        }

    function getType( file )
        {
        var extension = file.split( '.' ).pop();

        for ( var type in EXTENSIONS )
            {
            if ( EXTENSIONS.hasOwnProperty( type ) )
                {
                if ( EXTENSIONS[ type ].indexOf( extension ) >= 0 )
                    {
                    return type;
                    }
                }
            }

        return null;
        }
    }
}