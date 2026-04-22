[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / MultipleOptionsArgs

# Interface: MultipleOptionsArgs

Defined in: [source/html.ts:442](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L442)

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

## Properties

### callback?

> `optional` **callback?**: (`button`, `position`, `htmlElement`) => `any`

Defined in: [source/html.ts:444](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L444)

#### Parameters

##### button

[`MultipleOptions`](../classes/MultipleOptions.md)

##### position

`number`

##### htmlElement

`HTMLElement`

#### Returns

`any`

---

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

### options

> **options**: `string`[]

Defined in: [source/html.ts:443](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L443)

---

### preText?

> `optional` **preText?**: `string`

Defined in: [source/html.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L25)

#### Inherited from

[`HtmlElementArgs`](HtmlElementArgs.md).[`preText`](HtmlElementArgs.md#pretext)
