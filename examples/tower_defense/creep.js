function Creep( args )
{
Game.Unit.call( this, args );

var shape = new Game.Circle({
        radius: 5,
        color: 'gray'
    });
this.addChild( shape );
}

Utilities.inheritPrototype( Creep, Game.Unit );