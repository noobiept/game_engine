var UnitState = {
    idle_left: 0,
    idle_right: 1,
    walk_left: 2,
    walk_right: 3
};


function Unit( x, y, state )
{
Game.Sprite.call( this, {
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

this.setState( state );
}


Game.Utilities.inheritPrototype( Unit, Game.Sprite );


Unit.prototype.handleInput = function( input )
{
switch( this.state )
    {
    case UnitState.idle_left:
    case UnitState.idle_right:
        if ( input === Input.press_leftArrow )
            {
            this.setState( UnitState.walk_left );
            }

        else if ( input === Input.press_rightArrow )
            {
            this.setState( UnitState.walk_right );
            }
        break;

    case UnitState.walk_left:
        if ( input === Input.release_leftArrow )
            {
            this.setState( UnitState.idle_left );
            }

        else if ( input === Input.press_rightArrow )
            {
            this.setState( UnitState.walk_right );
            }
        break;

    case UnitState.walk_right:
        if ( input === Input.release_rightArrow )
            {
            this.setState( UnitState.idle_right );
            }

        else if ( input === Input.press_leftArrow )
            {
            this.setState( UnitState.walk_left );
            }
        break;
    }
};


Unit.prototype.setState = function( state )
{
switch( state )
    {
    case UnitState.idle_left:
        this.play( 'idle_left' );
        this.dispatchEvent( 'idle' );
        break;

    case UnitState.idle_right:
        this.play( 'idle_right' );
        this.dispatchEvent( 'idle' );
        break;

    case UnitState.walk_left:
        this.play( 'walk_left' );
        this.dispatchEvent( 'walk_left' );
        break;

    case UnitState.walk_right:
        this.play( 'walk_right' );
        this.dispatchEvent( 'walk_right' );
        break;

    default:
        return;
    }

this.state = state;
};