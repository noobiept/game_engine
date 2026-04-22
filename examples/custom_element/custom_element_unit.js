class Unit extends Game.Rectangle
{
constructor( args )
    {
    args.width = 20;
    args.height = 20;
    args.color = 'green';

    super( args );

    this._has_logic = true;
    this.weapon = new Game.Weapon({
            element: this,
            bulletContainer: Game.getCanvas()
        });
    }


logic( deltaTime )
    {
    this.weapon.logic( deltaTime );
    }
}
