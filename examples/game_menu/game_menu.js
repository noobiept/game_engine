window.onload = function()
{
Game.init( document.body, 400, 400 );

var menu = new Game.GameMenu({
        parent: document.body,
        cssId: 'Menu',
        cssClass: [ 'Test1', 'Test2' ]
    });

var value = new Game.GameMenu.Value({ preText: 'Value: ', value: 0 });
var button = new Game.GameMenu.Button({
        text: 'Click me!',
        callback: function()
            {
            console.log( 'clicked!' );
            button.setActive( false );
            }
    });
var boolean = new Game.GameMenu.Boolean({
        value: true,
        preText: 'State: ',
        callback: function( value )
            {
            console.log( value );
            }
    });



menu.add( value );
menu.add( button );
menu.add( boolean );

var count = 0;

Game.addToGameLoop( function()
    {
    count++;

    value.setValue( count );
    }, 1 );
};