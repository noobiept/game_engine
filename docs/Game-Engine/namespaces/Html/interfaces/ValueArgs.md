[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / ValueArgs

# Interface: ValueArgs

Defined in: [source/html.ts:235](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L235)

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

## Extends

- [`HtmlElementArgs`](HtmlElementArgs.md)

## Extended by

- [`ButtonArgs`](ButtonArgs.md)

## Properties

### cssClass?

> `optional` **cssClass?**: `string` \| `string`[]

Defined in: [source/html.ts:24](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L24)

#### Inherited from

[`HtmlElementArgs`](HtmlElementArgs.md).[`cssClass`](HtmlElementArgs.md#cssclass)

---

### cssId?

> `optional` **cssId?**: `string`

Defined in: [source/html.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L23)

#### Inherited from

[`HtmlElementArgs`](HtmlElementArgs.md).[`cssId`](HtmlElementArgs.md#cssid)

---

### preText?

> `optional` **preText?**: `string`

Defined in: [source/html.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L25)

#### Inherited from

[`HtmlElementArgs`](HtmlElementArgs.md).[`preText`](HtmlElementArgs.md#pretext)

---

### value

> **value**: `any`

Defined in: [source/html.ts:236](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L236)
