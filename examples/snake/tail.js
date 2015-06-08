function Tail( args )
{
if ( typeof args.path === 'undefined' )
    {
    args.path = [];
    }

args.width = 10;
args.height = 10;
args.color = 'green';

Game.Rectangle.call( this, args );

this.direction = args.direction;
this.path = args.path;
this.column = args.column;
this.line = args.line;

Game.addElement( this );

SnakeGame.getGrid().add( this, this.column, this.line );
}

Game.Utilities.inheritPrototype( Tail, Game.Rectangle );


Tail.prototype.tick = function()
{
if ( this.path.length > 0 )
    {
    var destination = this.path[ 0 ];

    if ( this.column === destination.column &&
         this.line   === destination.line )
        {
        this.path.shift();
        this.direction = destination.direction;
        }
    }


var direction = this.direction;
var prevColumn = this.column;
var prevLine = this.line;

if ( direction === Direction.left )
    {
    this.column--;
    }

else if ( direction === Direction.right )
    {
    this.column++;
    }

else if ( direction === Direction.up )
    {
    this.line--;
    }

else if ( direction === Direction.down )
    {
    this.line++;
    }

var grid = SnakeGame.getGrid();

if ( grid.isInGrid( this.column, this.line ) )
    {
    grid.move( prevColumn, prevLine, this.column, this.line );
    }

else
    {
    SnakeGame.gameOver();
    }
};
