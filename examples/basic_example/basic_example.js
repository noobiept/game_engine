window.onload = function()
{
Game.init( document.body, 300, 300 );

var container = new Game.Container();

var rectSize = 20;
var circleRadius = 4;
var offset = rectSize / 2;

var rect = new Game.Rectangle({
        width: rectSize,
        height: rectSize,
        color: 'gray'
    });
var circle1 = new Game.Circle({
        x: -offset,
        y: -offset,
        radius: circleRadius,
        color: 'black'
    });
var circle2 = new Game.Circle({
        x: -offset + rectSize,
        y: -offset + rectSize,
        radius: circleRadius,
        color: 'black'
    });
var circle3 = new Game.Circle({
        x: -offset + rectSize,
        y: -offset,
        radius: circleRadius,
        color: 'black'
    });
var circle4 = new Game.Circle({
        x: -offset,
        y: -offset + rectSize,
        radius: circleRadius,
        color: 'black'
    });

container.x = 150 - rectSize / 2;
container.y = 150 - rectSize / 2;
container.addChild( rect, circle1, circle2, circle3, circle4 );
container.rotate( 45, true );
container.addEventListener( 'click', function()
    {
    console.log( 'container! width:' + container.getWidth(), ' height: ' + container.getHeight() );
    });
rect.addEventListener( 'click', function()
    {
    console.log( 'rectangle' );
    });

Game.addElement( container );


var tween = new Game.Tween( container );

tween.to({ opacity: 0.2 }, 2 ).to({ opacity: 1 }, 2 );
tween.start();

var unitRect = new Game.Rectangle({
        width: 10,
        height: 10,
        color: 'blue'
    });
var unitRect2 = new Game.Rectangle({
        x: 5,
        y: 5,
        width: 10,
        height: 10,
        color: 'black'
    });
var unit = new Game.Unit({
        x: 5,
        y: 50,
        movement_speed: 100,
        children: [ unitRect, unitRect2 ]
    });

unit.moveTo( 290, 50 );
unit.queueMoveTo( 150, 290 );
unit.queueMoveTo( 5, 50, function()
    {
    console.log( 'End movement!' );
    });

Game.addElement( unit );


var unit2 = new Game.Unit({
        movement_speed: 50
    });

var unit2circle = new Game.Circle({
        radius: 10,
        color: 'green'
    });

unit2.addChild( unit2circle );
unit2.x = 10;
unit2.y = 230;
unit2.moveLoop([
        { x: 290, y: 230, callback: function() { console.log( 'Right!' ); } },
        { x: 10, y: 230 }
    ]);

Game.addElement( unit2 );
};