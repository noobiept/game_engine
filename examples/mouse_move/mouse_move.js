window.onload = function()
{
Game.init( document.body, 400, 400 );

Game.activateMouseMoveEvents( 100 );

    // rectangle 1
var rectangle1 = new Game.Rectangle({
        x: 200,
        y: 200,
        width: 20,
        height: 20,
        color: 'blue'
    });
Game.addElement( rectangle1 );

rectangle1.addEventListener( 'mouseover', mouseOver );
rectangle1.addEventListener( 'mouseout', mouseOut );


    // rectangle 2
var rectangle2 = new Game.Rectangle({
        x: 220,
        y: 200,
        width: 20,
        height: 20,
        color: 'red'
    });
Game.addElement( rectangle2 );

rectangle2.addEventListener( 'mouseover', mouseOver );
rectangle2.addEventListener( 'mouseout', mouseOut );
};


function mouseOver( data )
{
var element = data.element;

console.log( 'Mouse over:', element.color );
}

function mouseOut( data )
{
var element = data.element;

console.log( 'Mouse out:', element.color );
}