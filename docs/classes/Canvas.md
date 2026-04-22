[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Canvas

# Class: Canvas

Defined in: [source/canvas.ts:27](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L27)

When you call `Game.init()`, a canvas is already added, which you can use to add elements. If you need more than one canvas, then you can create a new canvas object and add to the game.

Basic Usage:

    var canvas1 = Game.getCanvas();
    var canvas2 = new Game.Canvas({
            width: 400,
            height: 400
        });
    Game.addCanvas( canvas2 );

    var container = new Game.Container();

    canvas2.addChild( container );

Examples -- `multiple_canvas`

## Constructors

### Constructor

> **new Canvas**(`args`): `Canvas`

Defined in: [source/canvas.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L39)

#### Parameters

##### args

[`CanvasArgs`](../interfaces/CanvasArgs.md)

#### Returns

`Canvas`

## Properties

### \_canvas

> **\_canvas**: `HTMLCanvasElement`

Defined in: [source/canvas.ts:28](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L28)

---

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [source/canvas.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L34)

---

### \_ctx

> `protected` **\_ctx**: `CanvasRenderingContext2D`

Defined in: [source/canvas.ts:29](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L29)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/canvas.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L32)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/canvas.ts:31](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L31)

---

### events_enabled

> **events_enabled**: `boolean`

Defined in: [source/canvas.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L36)

---

### update_on_loop

> **update_on_loop**: `boolean`

Defined in: [source/canvas.ts:37](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L37)

## Methods

### addChild()

> **addChild**(`args`): `void`

Defined in: [source/canvas.ts:60](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L60)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

#### Parameters

##### args

`any`

Either an `Element`, or `...Element` or an `Element[]`

#### Returns

`void`

---

### draw()

> **draw**(): `void`

Defined in: [source/canvas.ts:150](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L150)

Draw all the elements added to the canvas.

#### Returns

`void`

---

### getAllChildren()

> **getAllChildren**(): [`Element`](Element.md)[]

Defined in: [source/canvas.ts:254](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L254)

#### Returns

[`Element`](Element.md)[]

The elements added to this canvas.

---

### getCanvasContext()

> **getCanvasContext**(): `CanvasRenderingContext2D`

Defined in: [source/canvas.ts:247](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L247)

#### Returns

`CanvasRenderingContext2D`

The 2d canvas rendering context object.

---

### getChildrenIn()

> **getChildrenIn**(`x`, `y`): `any`[]

Defined in: [source/canvas.ts:108](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L108)

Get all the child elements that are in a given x/y position.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`any`[]

---

### getHeight()

> **getHeight**(): `number`

Defined in: [source/canvas.ts:233](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L233)

#### Returns

`number`

The canvas height.

---

### getHtmlCanvasElement()

> **getHtmlCanvasElement**(): `HTMLCanvasElement`

Defined in: [source/canvas.ts:240](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L240)

#### Returns

`HTMLCanvasElement`

The canvas html element.

---

### getRandomPosition()

> **getRandomPosition**(): `object`

Defined in: [source/canvas.ts:203](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L203)

Get a random x/y position that is within the canvas.

#### Returns

`object`

The random x/y position.

##### x

> **x**: `number`

##### y

> **y**: `number`

---

### getWidth()

> **getWidth**(): `number`

Defined in: [source/canvas.ts:226](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L226)

#### Returns

`number`

The canvas width.

---

### isInCanvas()

> **isInCanvas**(`x`, `y`): `boolean`

Defined in: [source/canvas.ts:215](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L215)

#### Parameters

##### x

`number`

The x position.

##### y

`number`

The y position.

#### Returns

`boolean`

If this position is located inside the canvas or not.

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/canvas.ts:137](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L137)

Call the logic of the elements added to this canvas (normally on the game loop).

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

---

### mouseClickEvents()

> **mouseClickEvents**(`event`): `void`

Defined in: [source/canvas.ts:169](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L169)

Receives a mouse event. Move it along to this canvas elements, to see if there's an element that has listeners to it.

#### Parameters

##### event

`MouseEvent`

The mouse event triggered.

#### Returns

`void`

---

### removeChild()

> **removeChild**(`args`): `boolean`

Defined in: [source/canvas.ts:81](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L81)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

#### Parameters

##### args

`any`

Either an `Element` or `...Element` or an `Element[]`

#### Returns

`boolean`

---

### updateDimensions()

> **updateDimensions**(`width`, `height`): `void`

Defined in: [source/canvas.ts:193](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L193)

Change the canvas dimensions (width/height).

#### Parameters

##### width

`number`

The new width.

##### height

`number`

The new Height.

#### Returns

`void`

---

### updateVertices()

> **updateVertices**(): `void`

Defined in: [source/canvas.ts:126](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/canvas.ts#L126)

Update the vertices of all the children elements. Useful for collision detection for example.

#### Returns

`void`
