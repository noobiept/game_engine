/// <reference path="../../build/output/game_engine.d.ts" />
window.onload = function () {
    Game.init(document.body, 400, 400);
    var canvas = Game.getCanvas();
    var container = new Game.Container(0, 10);
    var rect = new Game.Rectangle(0, 0, 20, 20, 'green');
    var circle = new Game.Circle(20, 0, 10, 'red');
    container.addEventListener('click', function () {
        console.log('container');
    });
    rect.addEventListener('click', function () {
        console.log('rectangle');
    });
    circle.addEventListener('click', function () {
        console.log('circle');
    });
    container.addChild(rect);
    container.addChild(circle);
    Game.addElement(container);
    Game.Preload.load('mystery_ship.png', function (element) {
        var image = new Game.Bitmap(200, 200, element);
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
