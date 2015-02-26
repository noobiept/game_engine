window.onload = function()
{
Game.init( document.body, 400, 400 );

var manifest = [
        { id: 'one', path: 'one.png' },
        { id: 'two', path: 'two.png' },
        { id: 'three', path: 'three.png' },
        { id: 'four', path: 'four.png' },
        { id: 'five', path: 'five.png' },
        { id: 'six', path: 'six.png' },
        { id: 'seven', path: 'seven.png' },
        { id: 'eight', path: 'eight.png' },
        { id: 'hidden', path: 'hidden.png' },
        { id: 'hidden_mouse_over', path: 'hidden_mouse_over.png' },
        { id: 'blank', path: 'blank.png' },
        { id: 'mine', path: 'mine.png' },
        { id: 'mine_flag', path: 'mine_flag.png' },
        { id: 'question_mark', path: 'question_mark.png' }
    ];

Game.Preload.loadManifest( manifest, '../assets/images/', Main.start );
};



(function(window)
{
function Main()
{

}

var GRID;
var NUMBER_OF_MINES = 10;
var TIMER;
var COLUMNS = 10;
var LINES = 10;

Main.start = function()
{
GRID = new Game.Grid({
        squareSize: Square.SIZE,
        columns: COLUMNS,
        lines: LINES
    });

var emptyPositions = GRID.getEmptyPositions();
var minesPositions = Utilities.getSeveralRandomInts( 0, emptyPositions.length - 1, NUMBER_OF_MINES );
var square;
var column, line;

    // add all the squares
for (column = 0 ; column < COLUMNS ; column++)
    {
    for (line = 0 ; line < LINES ; line++)
        {
        square = new Square();

        Game.addElement( square );

        GRID.addElement( square, column, line );
        }
    }


    // add the mines
for (var a = minesPositions.length - 1 ; a >= 0 ; a--)
    {
    var index = minesPositions[ a ];
    var position = emptyPositions[ index ];

    square = GRID.getElement( position.column, position.line );
    square.value = Square.VALUE.mine;
    }


    // add the remaining values
for (column = 0 ; column < COLUMNS ; column++)
    {
    for (line = 0 ; line < LINES ; line++)
        {
        var minesAround = Main.minesAround( column, line );

        GRID.getElement( column, line ).value = minesAround;
        }
    }
};


Main.clear = function()
{

};


Main.restart = function()
{
Main.clear();
Main.start();
};


Main.minesAround = function( column, line )
{
var neighbors = GRID.getNeighbors( column, line );
var count = 0;

for (var a = neighbors.length - 1 ; a >= 0 ; a--)
    {
    if ( neighbors[ a ].value === Square.VALUE.mine )
        {
        count++;
        }
    }

return count;
};



window.Main = Main;

})(window);