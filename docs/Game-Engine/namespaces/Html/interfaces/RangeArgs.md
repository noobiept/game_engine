[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / RangeArgs

# Interface: RangeArgs

Defined in: [source/html.ts:563](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L563)

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

### max

> **max**: `number`

Defined in: [source/html.ts:565](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L565)

---

### min

> **min**: `number`

Defined in: [source/html.ts:564](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L564)

---

### onChange?

> `optional` **onChange?**: (`button`) => `any`

Defined in: [source/html.ts:568](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L568)

#### Parameters

##### button

[`Range`](../classes/Range.md)

#### Returns

`any`

---

### preText?

> `optional` **preText?**: `string`

Defined in: [source/html.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L25)

#### Inherited from

[`HtmlElementArgs`](HtmlElementArgs.md).[`preText`](HtmlElementArgs.md#pretext)

---

### step?

> `optional` **step?**: `number`

Defined in: [source/html.ts:567](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L567)

---

### value

> **value**: `number`

Defined in: [source/html.ts:566](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L566)
