function Tower( args )
{
var width = Main.SQUARE_SIZE;
var height = Main.SQUARE_SIZE;

args.x = args.column * Main.SQUARE_SIZE + width / 2;
args.y = args.line * Main.SQUARE_SIZE + height / 2;
args.width = width;
args.height = height;
args.color = 'purple';

Game.Rectangle.call( this, args );

this._has_logic = true;
this.range = 50;     // attack range

    // towers cost money
Main.addMoney( -Tower.COST );

    // set the 'collision' listener to know when it hits a creep
this.addEventListener( 'collision', function( data )
    {
    var tower = data.element;
    var creep = data.collidedWith;

    creep.health -= tower.weapon.damage;

    if ( creep.health <= 0 )
        {
        if ( !creep._removed )
            {
            Main.addMoney( creep.worth );
            Game.safeRemove( creep );
            }
        }

    if ( data.bullet )
        {
        Game.safeRemove( data.bullet );
        }
    });

    // add weapon
this.weapon = new Game.Weapon({
        element: this,
        bulletContainer: args.bulletContainer,
        fireInterval: 0.5,
        damage: 50
    });
}

Game.Utilities.inheritPrototype( Tower, Game.Rectangle );

    // cost of each tower
Tower.COST = 50;


Tower.prototype.logic = function( deltaTime )
{
this.weapon.logic( deltaTime );
};