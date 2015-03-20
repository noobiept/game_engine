window.onload = function()
{
Game.init( document.body, 400, 400 );

var container = Game.getCanvasContainer();
var menu = new Game.Html.HtmlContainer();

document.body.appendChild( menu.container );

    // example 1 - add/remove a message
var message1;
var message1_button = new Game.Html.TwoState({
        value: 'Add',
        value2: 'Remove',
        callback: function( button )
            {
            message1 = new Game.Message({
                    text: 'Hello there!',
                    container: container
                });
            },
        callback2: function( button )
            {
            message1.clear();
            }
    });
menu.addChild( message1_button );


    // example 2 - add a message on a timeout
var message2_button = new Game.Html.Button({
        value: 'With timeout',
        callback: function( button )
            {
            var message2 = new Game.Message({
                    text: 'Timeout!',
                    container: container,
                    timeout: 1
                });
            }
    });
menu.addChild( message2_button );


    // example 3 - add a button component that on click removes the message
var message3_button = new Game.Html.Button({
        value: 'With buttons',
        callback: function( button )
            {
            var button1 = new Game.Html.Button({
                    value: 'Other',
                    callback: function( button )
                        {
                        console.log( 'An action!' );
                        }
                });
            var button2 = new Game.Html.Button({
                    value: 'Close',
                    callback: function( button )
                        {
                        message3.clear();
                        }
                });

            var message3 = new Game.Message({
                    text: 'Nice message!',
                    container: container,
                    background: true,
                    buttons: [ button1, button2 ]
                });
            }
    });
menu.addChild( message3_button );
};