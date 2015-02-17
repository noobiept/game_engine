window.onload = function()
{
Game.init( document.body, 400, 400 );

var menu = new Game.GameMenu({
        parent: document.body,
        cssId: 'Menu',
        cssClass: [ 'Test1', 'Test2' ]
    });

var value = new Game.GameMenu.Value({ value: 0 });
var button = new Game.GameMenu.Button({
        text: 'Click me!',
        callback: function()
        {
        console.log( 'clicked!' );
        }
    });

menu.add( value );
menu.add( button );

var count = 0;

Game.addToGameLoop( function()
    {
    count++;

    value.setValue( count );
    }, 1 );
};