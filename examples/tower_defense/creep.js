function Creep( args )
{
var center = Main.SQUARE_SIZE / 2;

args.x = args.column * Main.SQUARE_SIZE + center;
args.y = args.line * Main.SQUARE_SIZE + center;
args.radius = 5;
args.color = 'rgb(150, 0, 24)';

Game.Circle.call( this, args );

this.health = args.health;
this.column = args.column;
this.line = args.line;
this._has_logic = true;

    // how much money you get from the creep
this.worth = 10;

this.movement = new Game.Movement({
        element: this,
        movementSpeed: 60
    });

this.checkDestination();
}

Game.Utilities.inheritPrototype( Creep, Game.Circle );


/**
 * Move to a column/line position. Once it reaches the destination, check to where it needs to go next.
 */
Creep.prototype.moveTo = function( column, line )
{
var center = Main.SQUARE_SIZE / 2;
var _this = this;

this.movement.moveTo(
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
    this.moveTo( next.column, next.line );
    }
};


Creep.prototype.logic = function( deltaTime )
{
this.movement.logic( deltaTime );
};