window.onload = function()
{
Game.init( document.body, 400, 400 );

var manifest = [
        { id: 'sprite', path: 'sprite_example.png' },
        { id: 'sprite2', path: 'sprite_example2.png' }
    ];
Game.Preload.loadManifest( manifest, '', start );
};


function start()
{
var image = Game.Preload.get( 'sprite' );

var sprite = new Game.Sprite({
        x: 20,
        y: 20,
        image: image,
        frameWidth: 40,
        frameHeight: 40
    });

sprite.setFrame( 1 );


var sprite2 = new Game.Sprite({
        x: 150,
        y: 150,
        image: image,
        frameWidth: 40,
        frameHeight: 40,
        interval: 0.1,
        animations: {
            main: [ 0, 1, 2, 3 ],
            half: [ 0, 2 ]
        }
    });
sprite2.play( 'main' );


var sprite3 = new Game.Sprite({
        x: 380,
        y: 380,
        image: image,
        frameWidth: 40,
        frameHeight: 40,
        interval: 0.1,
        animations: {
            half: [ 0, 2 ]
        }
    });
sprite3.play( 'half' );


var sprite4 = new Game.Sprite({
        x: 250,
        y: 250,
        image: Game.Preload.get( 'sprite2' ),
        frameWidth: 40,
        frameHeight: 40,
        interval: 0.1,
        animations: {
            main: [ 0, 1, 2, 3, 4, 5 ]
        }
    });
sprite4.play( 'main' );

Game.addElement( sprite );
Game.addElement( sprite2 );
Game.addElement( sprite3 );
Game.addElement( sprite4 );
}