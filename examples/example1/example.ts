/// <reference path="../../source/game.ts" />

window.onload = function()
{
Game.init( document.body, 400, 400 );

var rect = new Game.Rectangle( 0, 0, 10, 10 );
var right = true;

Game.addElement( rect );
Game.addToGameLoop( function()
    {
    if ( right )
        {
        rect.x++;
        }

    else
        {
        rect.x--;
        }

    if ( rect.x > 400 )
        {
        right = false;
        }

    else if ( rect.x < 0 )
        {
        right = true;
        }
    });
};