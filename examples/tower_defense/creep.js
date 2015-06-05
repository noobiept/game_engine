function Creep( args )
{
Game.Unit.call( this, args );

var shape = new Game.Circle({
        radius: 5,
        color: 'rgb(150, 0, 24)'
    });
this.addChild( shape );
}

Utilities.inheritPrototype( Creep, Game.Unit );