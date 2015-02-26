(function(window)
{
function Square( args )
{
Game.Container.call( this, args );

this.value = Square.VALUE.blank;
this.state = Square.STATE.hidden;

var hidden = Game.Preload.get( 'hidden' );

this.background = new Game.Bitmap({
        image: hidden
    });
this.front = new Game.Bitmap({
        image: hidden       // will be changed later
    });
this.front.visible = false;

this.addChild( this.background, this.front );
}

Utilities.inheritPrototype( Square, Game.Container );

Square.SIZE = 30;
Square.VALUE = {
    mine: 'mine',
    blank: 'blank',     //HERE
    one: 'one',
    two: 'two',
    three: 'three',
    four: 'four',
    five: 'five',
    six: 'six',
    seven: 'seven',
    eight: 'eight'
};
Square.STATE = {
    hidden: 0,
    revealed: 1,
    question_mark: 2,
    mine_flag: 3
};


Square.prototype.setState = function( state )
{
if ( this.state === state )
    {
    return;
    }



if ( state === Square.STATE.hidden )
    {
    this.background.image = Game.Preload.get( 'hidden' );
    this.front.visible = false;
    }

else if ( state === Square.STATE.revealed )
    {
    this.background.image = Game.Preload.get( this.value );
    this.front.visible = false;
    }

else if ( state === Square.STATE.question_mark )
    {
    this.background.image = Game.Preload.get( 'hidden' );
    this.front.image = Game.Preload.get( 'question_mark' );
    this.front.visible = true;
    }

else if ( state === Square.STATE.mine_flag )
    {
    this.background.image = Game.Preload.get( 'hidden' );
    this.front.image = Game.Preload.get( 'mine_flag' );
    this.front.visible = true;
    }

else
    {
    throw new Error( 'Wrong state argument.' );
    }

this.state = state;
};



Square.prototype.setMouseOver = function( yesNo )
{
if ( yesNo === true )
    {
    this.background.image = Game.Preload.get( 'hidden_mouse_over' );
    }

else
    {
    this.background.image = Game.Preload.get( 'hidden' );
    }
};



window.Square = Square;

})(window);