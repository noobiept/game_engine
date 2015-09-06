var UnitState = {
    idle: 0,
    walk_left: 1,
    walk_right: 2
};


function Unit( x, y, state )
{
var rogue = new Game.Sprite({
        x: x,
        y: y,
        image: Game.Preload.get( 'rogue' ),
        frameWidth: 32,
        frameHeight: 32,
        interval: 0.3,
        animations: {
            idle_left: [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ],
            idle_right: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
            walk_left: [ 70, 71, 72, 73, 74, 75, 76, 77, 78, 79 ],
            walk_right: [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ]
        }
    });

this.sprite = rogue;
this.setState( state );
}


Unit.prototype.setState = function( state )
{
switch( state )
    {
    case UnitState.idle:
        if ( this.state === UnitState.walk_left )
            {
            this.sprite.play( 'idle_left' );
            }

        else
            {
            this.sprite.play( 'idle_right' );
            }
        break;

    case UnitState.walk_left:
        this.sprite.play( 'walk_left' );
        break;

    case UnitState.walk_right:
        this.sprite.play( 'walk_right' );
        break;

    default:
        return;
    }

this.state = state;
};