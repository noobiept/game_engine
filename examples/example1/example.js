/// <reference path="../../build/output/game_engine.d.ts" />
window.onload = function () {
    Game.init(document.body, 400, 400);
    var canvas = Game.getCanvas();
    var container = new Game.Container();
    container.x = 10;
    container.y = 100;
    var rect = new Game.Rectangle(0, 0, 20, 20, 'green');
    var circle = new Game.Circle(10, 5, 10, 'red');
    container.rotate(45, true);
    container.addEventListener('click', function () {
        console.log('container! width:' + container.width, ' height: ' + container.height);
    });
    rect.addEventListener('click', function () {
        console.log('rectangle');
    });
    circle.addEventListener('click', function () {
        console.log('circle');
    });
    container.addChild(circle);
    container.addChild(rect);
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
    unit.moveTo(200, 50);
    unit.queueMoveTo(100, 200);
    unit.queueMoveTo(0, 50);
    var unit2 = new Game.Unit({
        movement_speed: 50
    });
    var unit2circle = new Game.Circle(0, 0, 10, 'green');
    unit2.addChild(unit2circle);
    unit2.x = 10;
    unit2.y = 200;
    unit2.moveLoop([
        { x: 200, y: 200 },
        { x: 10, y: 200 }
    ]);
    Game.addElement(unit2);
    Game.Preload.load('mystery_ship.png', function (element) {
        var image = new Game.Bitmap(200, 200, element);
        image.rotate(10, true);
        image.addEventListener('click', function (event) {
            console.log('bitmap');
        });
        Game.addElement(image);
    });
    var right = true;
    Game.addToGameLoop(function () {
        if (right) {
            container.x++;
        }
        else {
            container.x--;
        }
        if (container.x > canvas.width) {
            right = false;
        }
        else if (container.x < 0) {
            right = true;
        }
    });
};
