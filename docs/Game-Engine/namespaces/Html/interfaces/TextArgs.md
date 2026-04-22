[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / TextArgs

# Interface: TextArgs

Defined in: [source/html.ts:686](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L686)

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

### buttonText?

> `optional` **buttonText?**: `string`

Defined in: [source/html.ts:689](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L689)

---

### callback?

> `optional` **callback?**: (`button`) => `any`

Defined in: [source/html.ts:688](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L688)

#### Parameters

##### button

[`Text`](../classes/Text.md)

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

### placeholder?

> `optional` **placeholder?**: `string`

Defined in: [source/html.ts:687](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L687)

---

### preText?

> `optional` **preText?**: `string`

Defined in: [source/html.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L25)

#### Inherited from

[`HtmlElementArgs`](HtmlElementArgs.md).[`preText`](HtmlElementArgs.md#pretext)
