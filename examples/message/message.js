window.onload = function()
{
Game.init( document.body, 400, 400 );

var container = Game.getCanvasContainer();
var menu = new Game.Html.HtmlContainer();
var body;

document.body.appendChild( menu.container );

    // example 1 - add/remove a message
var message1;
var message1_button = new Game.Html.TwoState({
        value: 'Add',
        value2: 'Remove',
        callback: function( button )
            {
            body = 'Hello there!';

            message1 = new Game.Message({
                    body: body,
                    container: container
                });
            },
        callback2: function( button )
            {
            message1.clear();
            }
    });
menu.addChild( message1_button );


    // example 2 - add a message on a timeout, and where the body is an html element
var message2_button = new Game.Html.Button({
        value: 'With timeout',
        callback: function( button )
            {
            body = document.createElement( 'div' );
            body.innerHTML = 'Timeout!';

            var message2 = new Game.Message({
                    body: body,
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

            var element1 = document.createElement( 'div' );
            var element2 = document.createElement( 'div' );

            element1.innerHTML = 'Nice message!';
            element2.innerHTML = 'Indeed.';

            body = [ element1, element2 ];

            var message3 = new Game.Message({
                    body: body,
                    container: container,
                    background: true,
                    buttons: [ button1, button2 ]
                });
            }
    });
menu.addChild( message3_button );


    // example 4 - configuration message
var message4_button = new Game.Html.Button({
        value: 'Configuration',
        callback: function( button )
            {
            var range = new Game.Html.Range({
                    preText: 'Range:',
                    value: 5,
                    min: 0,
                    max: 10
                });
            var text = new Game.Html.Text({
                    preText: 'Text:'
                });

            var ok = new Game.Html.Button({
                    value: 'Ok',
                    callback: function( button )
                        {
                        console.log( range.getValue(), text.getValue() );

                        message4.clear();
                        }
                });
            var cancel = new Game.Html.Button({
                    value: 'Cancel',
                    callback: function( button )
                        {
                        message4.clear();
                        }
                });

            body = [ range, text ];

            var message4 = new Game.Message({
                    body: body,
                    container: container,
                    background: true,
                    buttons: [ ok, cancel ]
                });
            }
    });
menu.addChild( message4_button );
};