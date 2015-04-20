window.onload = function()
{
Game.init( document.body, 400, 400 );

var menu = new Game.Html.HtmlContainer({
        cssId: 'Menu',
        cssClass: [ 'Test1', 'Test2' ]
    });
document.body.appendChild( menu.container );


var value = new Game.Html.Value({ preText: 'Value: ', value: 0 });
var button = new Game.Html.Button({
        value: 'Click me!',
        callback: function( button )
            {
            console.log( 'clicked!' );
            button.setActive( false );
            }
    });
var boolean = new Game.Html.Boolean({
        value: true,
        preText: 'State: ',
        callback: function( button )
            {
            console.log( button.value );
            }
    });
var twoStateButton = new Game.Html.TwoState({
        value: 'Start',
        value2: 'Stop',
        callback: function( button )
            {
            console.log( 'Start!!' );
            },
        callback2: function( button )
            {
            console.log( 'Stop!' );
            }
    });
var multipleOptions = new Game.Html.MultipleOptions({
        options: [ 'One', 'Two', 'Three' ],
        callback: function( button, position, htmlElement )
            {
            console.log( position, ':', htmlElement.innerHTML );
            }
    });
var range = new Game.Html.Range({
        min: 2,
        max: 8,
        value: 4,
        step: 0.2,
        onChange: function( button )
            {
            console.log( button.getValue() );
            },
        preText: 'Range'
    });


menu.addChild( value );
menu.addChild( button, boolean, twoStateButton );
menu.addChild( [ multipleOptions, range ] );

var count = 0;

Game.addToGameLoop( function()
    {
    count++;

    value.setValue( count );
    }, 1 );
};