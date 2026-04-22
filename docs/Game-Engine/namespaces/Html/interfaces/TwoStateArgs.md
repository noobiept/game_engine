[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / TwoStateArgs

# Interface: TwoStateArgs

Defined in: [source/html.ts:399](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L399)

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

- [`ButtonArgs`](ButtonArgs.md)

## Properties

### callback?

> `optional` **callback?**: (`button`) => `any`

Defined in: [source/html.ts:290](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L290)

#### Parameters

##### button

[`Button`](../classes/Button.md)

#### Returns

`any`

#### Inherited from

[`ButtonArgs`](ButtonArgs.md).[`callback`](ButtonArgs.md#callback)

---

### callback2?

> `optional` **callback2?**: (`button`) => `any`

Defined in: [source/html.ts:401](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L401)

#### Parameters

##### button

[`TwoState`](../classes/TwoState.md)

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

#### Inherited from

[`ButtonArgs`](ButtonArgs.md).[`click_ref`](ButtonArgs.md#click_ref)

---

### cssClass?

> `optional` **cssClass?**: `string` \| `string`[]

Defined in: [source/html.ts:24](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L24)

#### Inherited from

[`ButtonArgs`](ButtonArgs.md).[`cssClass`](ButtonArgs.md#cssclass)

---

### cssId?

> `optional` **cssId?**: `string`

Defined in: [source/html.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L23)

#### Inherited from

[`ButtonArgs`](ButtonArgs.md).[`cssId`](ButtonArgs.md#cssid)

---

### preText?

> `optional` **preText?**: `string`

Defined in: [source/html.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L25)

#### Inherited from

[`ButtonArgs`](ButtonArgs.md).[`preText`](ButtonArgs.md#pretext)

---

### value

> **value**: `any`

Defined in: [source/html.ts:236](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L236)

#### Inherited from

[`ButtonArgs`](ButtonArgs.md).[`value`](ButtonArgs.md#value)

---

### value2

> **value2**: `string`

Defined in: [source/html.ts:400](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L400)
