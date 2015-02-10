function Food( args )
{
args.width = 10;
args.height = 10;
args.color = 'red';

Game.Rectangle.call( this, args );

this.column = args.column;
this.line = args.line;

Game.addElement( this );

SnakeGame.getGrid().add( this, this.column, this.line );
}

Utilities.inheritPrototype( Food, Game.Rectangle );


