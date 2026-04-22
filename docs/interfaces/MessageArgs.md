[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / MessageArgs

# Interface: MessageArgs

Defined in: [source/message.ts:4](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L4)

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

- [`HtmlContainerArgs`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md)

## Properties

### background?

> `optional` **background?**: `boolean`

Defined in: [source/message.ts:9](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L9)

---

### body

> **body**: `any`

Defined in: [source/message.ts:5](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L5)

---

### buttons?

> `optional` **buttons?**: [`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md) \| [`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md)[]

Defined in: [source/message.ts:7](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L7)

---

### children?

> `optional` **children?**: [`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md) \| [`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md)[]

Defined in: [source/html.ts:136](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L136)

#### Inherited from

[`HtmlContainerArgs`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md).[`children`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md#children)

---

### container

> **container**: `HTMLElement`

Defined in: [source/message.ts:6](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L6)

---

### cssClass?

> `optional` **cssClass?**: `string` \| `string`[]

Defined in: [source/html.ts:24](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L24)

#### Inherited from

[`HtmlContainerArgs`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md).[`cssClass`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md#cssclass)

---

### cssId?

> `optional` **cssId?**: `string`

Defined in: [source/html.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L23)

#### Inherited from

[`HtmlContainerArgs`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md).[`cssId`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md#cssid)

---

### preText?

> `optional` **preText?**: `string`

Defined in: [source/html.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L25)

#### Inherited from

[`HtmlContainerArgs`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md).[`preText`](../Game-Engine/namespaces/Html/interfaces/HtmlContainerArgs.md#pretext)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [source/message.ts:8](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L8)
