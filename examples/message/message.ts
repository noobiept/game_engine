import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init(document.body, 400, 400);

    const container = Game.getCanvasContainer();
    const menu = new Game.Html.HtmlContainer();
    let body;

    document.body.appendChild(menu.container);

    // example 1 - add/remove a message
    let message1;
    const message1_button = new Game.Html.TwoState({
        value: "Add",
        value2: "Remove",
        callback: function (_button) {
            body = "Hello there!";

            message1 = new Game.Message({
                body: body,
                container: container,
            });
        },
        callback2: function (_button) {
            message1.clear();
        },
    });
    menu.addChild(message1_button);

    // example 2 - add a message on a timeout, and where the body is an html element
    const message2_button = new Game.Html.Button({
        value: "With timeout",
        callback: function (_button) {
            body = document.createElement("div");
            body.textContent = "Timeout!";

            new Game.Message({
                body: body,
                container: container,
                timeout: 1,
            });
        },
    });
    menu.addChild(message2_button);

    // example 3 - add a button component that on click removes the message
    const message3_button = new Game.Html.Button({
        value: "With buttons",
        callback: function (_button) {
            const button1 = new Game.Html.Button({
                value: "Other",
                callback: function (_button) {
                    console.log("An action!");
                },
            });
            const button2 = new Game.Html.Button({
                value: "Close",
                callback: function (_button) {
                    message3.clear();
                },
            });

            const element1 = document.createElement("div");
            const element2 = document.createElement("div");

            element1.textContent = "Nice message!";
            element2.textContent = "Indeed.";

            body = [element1, element2];

            const message3 = new Game.Message({
                body: body,
                container: container,
                background: true,
                buttons: [button1, button2],
            });
        },
    });
    menu.addChild(message3_button);

    // example 4 - configuration message
    const message4_button = new Game.Html.Button({
        value: "Configuration",
        callback: function (_button) {
            const range = new Game.Html.Range({
                preText: "Range:",
                value: 5,
                min: 0,
                max: 10,
            });
            const text = new Game.Html.Text({
                preText: "Text:",
            });
            const boolean = new Game.Html.Boolean({
                preText: "Boolean:",
                value: true,
            });
            const twoState = new Game.Html.TwoState({
                preText: "Two State:",
                value: "One",
                value2: "Two",
            });

            const ok = new Game.Html.Button({
                value: "Ok",
                callback: function (_button) {
                    console.log(
                        range.getValue(),
                        text.getValue(),
                        boolean.getValue(),
                        twoState.getValue(),
                    );

                    message4.clear();
                },
            });
            const cancel = new Game.Html.Button({
                value: "Cancel",
                callback: function (_button) {
                    message4.clear();
                },
            });

            body = [range, text, boolean, twoState];

            const message4 = new Game.Message({
                body: body,
                container: container,
                background: true,
                buttons: [ok, cancel],
            });
        },
    });
    menu.addChild(message4_button);
});
