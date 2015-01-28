/// <reference path="../../build/output/game_engine.d.ts" />
window.onload = function () {
    Game.init(document.body, 300, 300);
    var container = new Game.Container();
    var rectSize = 20;
    var circleRadius = 4;
    var offset = rectSize / 2;
    var rect = new Game.Rectangle(0, 0, rectSize, rectSize, 'gray');
    var circle1 = new Game.Circle(-offset, -offset, circleRadius, 'black');
    var circle2 = new Game.Circle(-offset + rectSize, -offset + rectSize, circleRadius, 'black');
    var circle3 = new Game.Circle(-offset + rectSize, -offset, circleRadius, 'black');
    var circle4 = new Game.Circle(-offset, -offset + rectSize, circleRadius, 'black');
    container.x = 150 - rectSize / 2;
    container.y = 150 - rectSize / 2;
    container.addChild(circle1);
    container.addChild(circle2);
    container.addChild(circle3);
    container.addChild(circle4);
    container.addChild(rect);
    container.rotate(45, true);
    container.addEventListener('click', function () {
        console.log('container! width:' + container.width, ' height: ' + container.height);
    });
    rect.addEventListener('click', function () {
        console.log('rectangle');
    });
    Game.addElement(container);
    var unit = new Game.Unit({
        movement_speed: 100
    });
    var unitRect = new Game.Rectangle(0, 0, 10, 10, 'blue');
    var unitRect2 = new Game.Rectangle(5, 5, 10, 10, 'black');
    unit.addChild(unitRect);
    unit.addChild(unitRect2);
    Game.addElement(unit);
    unit.x = 0;
    unit.y = 50;
    unit.moveTo(300, 50);
    unit.queueMoveTo(150, 290);
    unit.queueMoveTo(0, 50, function () {
        console.log('End movement!');
    });
    var unit2 = new Game.Unit({
        movement_speed: 50
    });
    var unit2circle = new Game.Circle(0, 0, 10, 'green');
    unit2.addChild(unit2circle);
    unit2.x = 10;
    unit2.y = 230;
    unit2.moveLoop([
        { x: 280, y: 230, callback: function () {
            console.log('Right!');
        } },
        { x: 10, y: 230 }
    ]);
    Game.addElement(unit2);
};
