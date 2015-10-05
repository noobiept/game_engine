function Unit( args )
{
args.width = 20;
args.height = 20;
args.color = 'green';

Game.Rectangle.call( this, args );

this._has_logic = true;
this.weapon = new Game.Weapon({
        element: this,
        bulletContainer: Game.getCanvas()
    });
}

Game.Utilities.inheritPrototype( Unit, Game.Rectangle );


Unit.prototype.logic = function( deltaTime )
{
this.weapon.logic( deltaTime );
};