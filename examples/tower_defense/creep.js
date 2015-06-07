function Creep( args )
{
Game.Unit.call( this, args );

var shape = new Game.Circle({
        radius: 5,
        color: 'rgb(150, 0, 24)'
    });
this.addChild( shape );

var center = Main.SQUARE_SIZE / 2;

this.x = args.column * Main.SQUARE_SIZE + center;
this.y = args.line * Main.SQUARE_SIZE + center;

this.column = args.column;
this.line = args.line;

    // how much money you get from the creep
this.worth = 5;

this.checkDestination();
}

Utilities.inheritPrototype( Creep, Game.Unit );


/**
 * Move to a column/line position. Once it reaches the destination, check to where it needs to go next.
 */
Creep.prototype.moveTo2 = function( column, line )
{
var center = Main.SQUARE_SIZE / 2;
var _this = this;

this.moveTo(
    column * Main.SQUARE_SIZE + center,
    line * Main.SQUARE_SIZE + center,
    function()
        {
        _this.column = column;
        _this.line = line;
        _this.checkDestination();
        }
    );
};


/**
 * See where to go from the current column/line position.
 * If it reached the end, then the unit is removed.
 */
Creep.prototype.checkDestination = function()
{
var next = Main.getNextPosition( this.column, this.line );

    // we reached the end
if ( next.column === this.column &&
     next.line   === this.line )
    {
    Main.addLife( -1 );
    this.remove();

        // checks if the game is over
    Main.gameOver();
    }

else
    {
    this.moveTo2( next.column, next.line );
    }
};