[Game Engine](../README.md) › [Game](game.md) › [Html](game.html.md)

# Module: Html

Basic Usage:

    var menu = new Game.Html.HtmlContainer();

    var button = new Game.Html.Button({
            value: 'click here',
            callback: function( button )
                {
                console.log( 'clicked!' );
                }
        });
    menu.addChild( button );

    document.body.appendChild( menu.container );

Examples -- `game_menu`, `game_of_life`, `message`, `minesweeper`, `tower_defense`

## Index

### Classes

* [Boolean](../classes/game.html.boolean.md)
* [Button](../classes/game.html.button.md)
* [HtmlContainer](../classes/game.html.htmlcontainer.md)
* [HtmlElement](../classes/game.html.htmlelement.md)
* [MultipleOptions](../classes/game.html.multipleoptions.md)
* [Range](../classes/game.html.range.md)
* [Text](../classes/game.html.text.md)
* [TwoState](../classes/game.html.twostate.md)
* [Value](../classes/game.html.value.md)

### Interfaces

* [BooleanArgs](../interfaces/game.html.booleanargs.md)
* [ButtonArgs](../interfaces/game.html.buttonargs.md)
* [HtmlContainerArgs](../interfaces/game.html.htmlcontainerargs.md)
* [HtmlElementArgs](../interfaces/game.html.htmlelementargs.md)
* [MultipleOptionsArgs](../interfaces/game.html.multipleoptionsargs.md)
* [RangeArgs](../interfaces/game.html.rangeargs.md)
* [TextArgs](../interfaces/game.html.textargs.md)
* [TwoStateArgs](../interfaces/game.html.twostateargs.md)
* [ValueArgs](../interfaces/game.html.valueargs.md)
