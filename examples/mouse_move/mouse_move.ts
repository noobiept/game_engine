import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    Game.activateMouseMoveEvents(100);

    // rectangle 1
    const rectangle1 = new Game.Rectangle({
        x: 175,
        y: 200,
        width: 50,
        height: 50,
        color: "blue",
    });
    Game.addElement(rectangle1);

    rectangle1.addEventListener("mouseover", mouseOver);
    rectangle1.addEventListener("mouseout", mouseOut);

    // rectangle 2
    const rectangle2 = new Game.Rectangle({
        x: 225,
        y: 200,
        width: 50,
        height: 50,
        color: "red",
    });
    Game.addElement(rectangle2);

    rectangle2.addEventListener("mouseover", mouseOver);
    rectangle2.addEventListener("mouseout", mouseOut);
});

function mouseOver(data) {
    const element = data.element;

    console.log("Mouse over:", element.color);
}

function mouseOut(data) {
    const element = data.element;

    console.log("Mouse out:", element.color);
}
