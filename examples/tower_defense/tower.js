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
this.damage = 50;
this.attack_interval = 0.5;

this.attack_count = 0;
this.can_attack = true;

this.x = args.column * Main.SQUARE_SIZE + width / 2;
this.y = args.line * Main.SQUARE_SIZE + height / 2;


    // towers cost money
Main.addMoney( -Tower.COST );

    // set the 'collision' listener to know when it hits a creep
this.addEventListener( 'collision', function( data )
    {
    var tower = data.element;
    var creep = data.collidedWith;

    creep.health -= tower.damage;

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
}

Game.Utilities.inheritPrototype( Tower, Game.Unit );


    // cost of each tower
Tower.COST = 50;


Tower.prototype.base_logic = Tower.prototype.logic;
Tower.prototype.logic = function( deltaTime )
{
Tower.prototype.base_logic.call( this, deltaTime );

if ( !this.can_attack )
    {
    this.attack_count += deltaTime;

    if ( this.attack_count >= this.attack_interval )
        {
        this.attack_count = 0;
        this.can_attack = true;
        }
    }
};


Tower.prototype.base_fireBullet = Tower.prototype.fireBullet;
Tower.prototype.fireBullet = function( angleOrTarget, interval )
{
Tower.prototype.base_fireBullet.call( this, angleOrTarget, interval );

this.can_attack = false;
};