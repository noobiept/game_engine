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
var twoStateButton = new Game.GameMenu.TwoState({
        text: 'Start',
        text2: 'Stop',
        callback: function( button )
            {
            console.log( 'Start!!' );
            },
        callback2: function( button )
            {
            console.log( 'Stop!' );
            }
    });
var multipleOptions = new Game.GameMenu.MultipleOptions({
        options: [ 'One', 'Two', 'Three' ],
        callback: function( button, position, htmlElement )
            {
            console.log( position, ':', htmlElement.innerHTML );
            }
    });


menu.add( value );
menu.add( button );
menu.add( boolean );
menu.add( twoStateButton );
menu.add( multipleOptions );

var count = 0;

Game.addToGameLoop( function()
    {
    count++;

    value.setValue( count );
    }, 1 );
};