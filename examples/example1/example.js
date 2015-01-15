/// <reference path="../../build/output/game_engine.d.ts" />
window.onload = function () {
    Game.init(document.body, 400, 400);
    var rect = new Game.Rectangle(0, 0, 10, 10, 'green');
    var circle = new Game.Circle(50, 50, 30, 'red');
    var right = true;
    Game.Preload.load('mystery_ship.png', function (element) {
        var image = new Game.Bitmap(200, 200, element);
        Game.addElement(image);
    });
    Game.addElement(rect);
    Game.addElement(circle);
    Game.addToGameLoop(function () {
        if (right) {
            rect.x++;
        }
        else {
            rect.x--;
        }
        if (rect.x > 400) {
            right = false;
        }
        else if (rect.x < 0) {
            right = true;
        }
    });
};
