(function(window)
{
function Square( args )
{
if ( typeof args === 'undefined' )
    {
    args = {};
    }

args.width = Square.SIZE;
args.height = Square.SIZE;
args.color = 'blue';

Game.Rectangle.call( this, args );

Game.addElement( this );
}


Square.SIZE = 20;

Utilities.inheritPrototype( Square, Game.Rectangle );


window.Square = Square;

})(window);