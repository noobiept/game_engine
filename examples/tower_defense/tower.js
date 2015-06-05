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
this.damage = 10;
this.attack_interval = 0.5;
this.cost = 50;

this.attack_count = 0;
this.can_attack = true;

this.x = args.column * Main.SQUARE_SIZE + width / 2;
this.y = args.line * Main.SQUARE_SIZE + height / 2;
}

Utilities.inheritPrototype( Tower, Game.Unit );



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