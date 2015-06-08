window.onload = function()
{
Game.init( document.body, 400, 400 );

var grid = new Game.ElementGrid({
        squareSize: 10,
        columns: 20,
        lines: 20,
        refX: 50,
        refY: 50,
        background: { fill: false, color: 'gray' }
    });

var canvas = Game.getCanvas().getHtmlCanvasElement();
var canvasRect = canvas.getBoundingClientRect();

canvas.addEventListener( 'click', function( event )
    {
    var x = event.clientX - canvasRect.left;
    var y = event.clientY - canvasRect.top;

    var gridPosition = grid.toGrid( x, y );
    var normalized = grid.normalizePosition( gridPosition.column, gridPosition.line );

    var rectangle = new Game.Rectangle({
            width: 10,
            height: 10,
            color: 'blue'
        });
    var previous = grid.add( rectangle, normalized.column, normalized.line );

    if ( previous !== null )
        {
        Game.removeElement( previous );
        }

    Game.addElement( rectangle );
    });
};