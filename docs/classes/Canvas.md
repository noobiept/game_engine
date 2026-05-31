[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Canvas

# Class: Canvas

Defined in: [source/canvas.ts:35](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L35)

When you call `Game.init()`, a canvas is already added, which you can use to add elements. If you need more than one canvas, then you can create a new canvas object and add to the game.

Basic Usage:

    const canvas1 = Game.getCanvas();
    const canvas2 = new Game.Canvas({
            width: 400,
            height: 400
        });
    Game.addCanvas( canvas2 );

    const container = new Game.Container();

    canvas2.addChild( container );

Examples -- `multiple_canvas`

## Constructors

### Constructor

> **new Canvas**(`args`): `Canvas`

Defined in: [source/canvas.ts:47](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L47)

#### Parameters

##### args

[`CanvasArgs`](../interfaces/CanvasArgs.md)

#### Returns

`Canvas`

## Properties

### \_canvas

> **\_canvas**: `HTMLCanvasElement`

Defined in: [source/canvas.ts:36](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L36)

---

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [source/canvas.ts:42](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L42)

---

### \_ctx

> `protected` **\_ctx**: `CanvasRenderingContext2D`

Defined in: [source/canvas.ts:37](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L37)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/canvas.ts:40](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L40)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/canvas.ts:39](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L39)

---

### eventsEnabled

> **eventsEnabled**: `boolean`

Defined in: [source/canvas.ts:44](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L44)

---

### updateOnLoop

> **updateOnLoop**: `boolean`

Defined in: [source/canvas.ts:45](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L45)

## Accessors

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/canvas.ts:292](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L292)

The canvas height.

##### Returns

`number`

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/canvas.ts:285](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L285)

The canvas width.

##### Returns

`number`

## Methods

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [source/canvas.ts:74](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L74)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`void`

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [source/canvas.ts:75](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L75)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`Element`](Element.md)[]

##### Returns

`void`

---

### bringToFront()

> **bringToFront**(`element`): `void`

Defined in: [source/canvas.ts:118](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L118)

Move an element to the front (drawn on top of the other elements).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### draw()

> **draw**(): `void`

Defined in: [source/canvas.ts:209](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L209)

Draw all the elements added to the canvas.

#### Returns

`void`

---

### getAllChildren()

> **getAllChildren**(): [`Element`](Element.md)[]

Defined in: [source/canvas.ts:313](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L313)

#### Returns

[`Element`](Element.md)[]

The elements added to this canvas.

---

### getCanvasContext()

> **getCanvasContext**(): `CanvasRenderingContext2D`

Defined in: [source/canvas.ts:306](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L306)

#### Returns

`CanvasRenderingContext2D`

The 2d canvas rendering context object.

---

### getChildrenIn()

> **getChildrenIn**(`x`, `y`): [`Element`](Element.md)[]

Defined in: [source/canvas.ts:167](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L167)

Get all the child elements that are in a given x/y position.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

[`Element`](Element.md)[]

---

### getHtmlCanvasElement()

> **getHtmlCanvasElement**(): `HTMLCanvasElement`

Defined in: [source/canvas.ts:299](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L299)

#### Returns

`HTMLCanvasElement`

The canvas html element.

---

### getRandomPosition()

> **getRandomPosition**(): `object`

Defined in: [source/canvas.ts:262](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L262)

Get a random x/y position that is within the canvas.

#### Returns

`object`

The random x/y position.

##### x

> **x**: `number`

##### y

> **y**: `number`

---

### isInCanvas()

> **isInCanvas**(`x`, `y`): `boolean`

Defined in: [source/canvas.ts:274](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L274)

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

Defined in: [source/canvas.ts:196](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L196)

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

Defined in: [source/canvas.ts:228](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L228)

Receives a mouse event. Move it along to this canvas elements, to see if there's an element that has listeners to it.

#### Parameters

##### event

`MouseEvent`

The mouse event triggered.

#### Returns

`void`

---

### removeChild()

#### Call Signature

> **removeChild**(`children`): `boolean`

Defined in: [source/canvas.ts:93](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L93)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`boolean`

#### Call Signature

> **removeChild**(...`elements`): `boolean`

Defined in: [source/canvas.ts:94](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L94)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`Element`](Element.md)[]

##### Returns

`boolean`

---

### sendToBack()

> **sendToBack**(`element`): `void`

Defined in: [source/canvas.ts:132](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L132)

Move an element to the back (drawn behind the other elements).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### setChildIndex()

> **setChildIndex**(`element`, `index`): `void`

Defined in: [source/canvas.ts:146](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L146)

Move an element to a specific draw position (0 is the back, higher values are more to the front).

#### Parameters

##### element

[`Element`](Element.md)

##### index

`number`

#### Returns

`void`

---

### updateDimensions()

> **updateDimensions**(`width`, `height`): `void`

Defined in: [source/canvas.ts:252](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L252)

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

Defined in: [source/canvas.ts:185](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/canvas.ts#L185)

Update the vertices of all the children elements. Useful for collision detection for example.

#### Returns

`void`
