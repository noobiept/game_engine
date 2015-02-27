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
        callback: function( button )
            {
            console.log( 'clicked!' );
            button.setActive( false );
            }
    });
var boolean = new Game.GameMenu.Boolean({
        value: true,
        preText: 'State: ',
        callback: function( button )
            {
            console.log( button.value );
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
var range = new Game.GameMenu.Range({
        min: 2,
        max: 8,
        value: 4,
        step: 2,
        onChange: function( button )
            {
            console.log( button.getValue() );
            },
        preText: 'Range'
    });


menu.add( value );
menu.add( button, boolean, twoStateButton );
menu.add( [ multipleOptions, range ] );

var count = 0;

Game.addToGameLoop( function()
    {
    count++;

    value.setValue( count );
    }, 1 );
};