[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / ButtonArgs

# Interface: ButtonArgs

Defined in: [source/html.ts:289](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L289)

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

- [`ValueArgs`](ValueArgs.md)

## Extended by

- [`BooleanArgs`](BooleanArgs.md)
- [`TwoStateArgs`](TwoStateArgs.md)

## Properties

### callback?

> `optional` **callback?**: (`button`) => `any`

Defined in: [source/html.ts:290](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L290)

#### Parameters

##### button

[`Button`](../classes/Button.md)

#### Returns

`any`

---

### click_ref?

> `optional` **click_ref?**: (`event`) => `any`

Defined in: [source/html.ts:291](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L291)

#### Parameters

##### event

`MouseEvent`

#### Returns

`any`

---

### cssClass?

> `optional` **cssClass?**: `string` \| `string`[]

Defined in: [source/html.ts:24](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L24)

#### Inherited from

[`ValueArgs`](ValueArgs.md).[`cssClass`](ValueArgs.md#cssclass)

---

### cssId?

> `optional` **cssId?**: `string`

Defined in: [source/html.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L23)

#### Inherited from

[`ValueArgs`](ValueArgs.md).[`cssId`](ValueArgs.md#cssid)

---

### preText?

> `optional` **preText?**: `string`

Defined in: [source/html.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L25)

#### Inherited from

[`ValueArgs`](ValueArgs.md).[`preText`](ValueArgs.md#pretext)

---

### value

> **value**: `any`

Defined in: [source/html.ts:236](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L236)

#### Inherited from

[`ValueArgs`](ValueArgs.md).[`value`](ValueArgs.md#value)
