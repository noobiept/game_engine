function Tower( args )
{
Game.Unit.call( this, args );

var width = Main.SQUARE_SIZE;
var height = Main.SQUARE_SIZE;

var shape = new Game.Rectangle({
        width: width,
        height: height,
        color: 'purple'
    });
this.addChild( shape );

this.range = 50;     // attack range

this.x = args.column * Main.SQUARE_SIZE + width / 2;
this.y = args.line * Main.SQUARE_SIZE + height / 2;


    // towers cost money
Main.addMoney( -Tower.COST );

    // set the 'collision' listener to know when it hits a creep
this.addEventListener( 'collision', function( data )
    {
    var tower = data.element;
    var creep = data.collidedWith;

    creep.health -= tower.getWeapon( 0 ).damage;

    if ( creep.health <= 0 )
        {
        if ( !creep._removed )
            {
            Main.addMoney( creep.worth );
            creep.remove();
            }
        }

    if ( data.bullet )
        {
        data.bullet.remove();
        }
    });

    // add weapon
var weapon = new Game.Weapon({
        bulletContainer: args.bullet_container,
        fireInterval: 0.5,
        damage: 50
    });
this.addWeapon( weapon );
}

Game.Utilities.inheritPrototype( Tower, Game.Unit );


    // cost of each tower
Tower.COST = 50;
