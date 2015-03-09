window.onload = function()
{
var container = document.querySelector( '#CanvasContainer' );

Game.init( container, 400, 400 );

var menu = new Game.Html.HtmlContainer({
        parent: document.body
    });


    // example 1 - add/remove a message
var message1;
var message1_button = new Game.Html.TwoState({
        text: 'Add',
        text2: 'Remove',
        callback: function( button )
            {
            message1 = new Game.Message({
                    container: container,
                    text: 'Hello there!'
                });
            },
        callback2: function( button )
            {
            message1.remove();
            }
    });
menu.addChild( message1_button );


    // example 2 - add a message on a timeout
var message2_button = new Game.Html.Button({
        text: 'With timeout',
        callback: function( button )
            {
            new Game.Message({
                    container: container,
                    text: 'Timeout!',
                    timeout: 1
                });
            }
    });
menu.addChild( message2_button );


    // example 3 - add a button component that on click removes the message
var message3_button = new Game.Html.Button({
        text: 'With components',
        callback: function( button )
            {
            var component = new Game.Html.Button({
                    text: 'Other',
                    callback: function( button )
                        {
                        console.log( 'An action!' );
                        }
                });
            var component2 = new Game.Html.Button({
                    text: 'Close',
                    callback: function( button )
                        {
                        message3.remove();
                        }
                });

            var message3 = new Game.Message({
                    container: container,
                    text: 'Nice message!',
                    components: [ component, component2 ]
                });
            }
    });
menu.addChild( message3_button );
};