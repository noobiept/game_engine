function Terrain( args )
{
args.color = 'black';   // random color, since the 'color' argument is required for 'Game.Rectangle'
args.width = Main.SQUARE_SIZE;
args.height = Main.SQUARE_SIZE;

Game.Rectangle.call( this, args );

this.setPassable( false );
}

Utilities.inheritPrototype( Terrain, Game.Rectangle );


Terrain.prototype.setPassable = function( passable )
{
if ( passable === true )
    {
    this.color = 'rgb(100, 100, 100)';
    }

else
    {
    this.color = 'rgb(1, 50, 32)';
    }
};