import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    const menu = new Game.Html.HtmlContainer({
        cssId: "Menu",
        cssClass: ["Test1", "Test2"],
    });
    document.body.appendChild(menu.container);

    const value = new Game.Html.Value({ preText: "Value: ", value: 0 });
    const button = new Game.Html.Button({
        value: "Click me!",
        callback: function (button) {
            console.log("clicked!");
            button.setActive(false);
        },
    });
    const boolean = new Game.Html.Boolean({
        value: true,
        preText: "State: ",
        callback: function (button) {
            console.log(button.getValue());
        },
    });
    const twoStateButton = new Game.Html.TwoState({
        value: "Start",
        value2: "Stop",
        callback: function (button) {
            console.log("Start!!");
        },
        callback2: function (button) {
            console.log("Stop!");
        },
    });
    const multipleOptions = new Game.Html.MultipleOptions({
        options: ["One", "Two", "Three"],
        callback: function (button, position, htmlElement) {
            console.log(position, ":", htmlElement.innerHTML);
        },
    });
    const range = new Game.Html.Range({
        min: 2,
        max: 8,
        value: 4,
        step: 0.2,
        onChange: function (button) {
            console.log(button.getValue());
        },
        preText: "Range",
    });
    const text = new Game.Html.Text({
        preText: "Text",
        placeholder: "Something..",
        buttonText: "Go!",
        callback: function (textButton) {
            console.log(textButton.getValue());
        },
    });

    menu.addChild(value);
    menu.addChild(button, boolean, twoStateButton, text);
    menu.addChild([multipleOptions, range]);

    let count = 0;

    Game.addToGameLoop(function () {
        count++;

        value.setValue(count);
    }, 1);
});
