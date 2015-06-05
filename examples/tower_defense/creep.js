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
}

Utilities.inheritPrototype( Creep, Game.Unit );


Creep.prototype.queueMoveTo2 = function( column, line )
{
var center = Main.SQUARE_SIZE / 2;

this.queueMoveTo( column * Main.SQUARE_SIZE + center, line * Main.SQUARE_SIZE + center );
};