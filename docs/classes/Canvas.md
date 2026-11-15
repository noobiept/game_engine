[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Canvas

# Class: Canvas

Defined in: [canvas.ts:35](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L35)

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

Defined in: [canvas.ts:47](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L47)

#### Parameters

##### args

[`CanvasArgs`](../interfaces/CanvasArgs.md)

#### Returns

`Canvas`

## Properties

### \_canvas

> **\_canvas**: `HTMLCanvasElement`

Defined in: [canvas.ts:36](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L36)

---

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [canvas.ts:42](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L42)

---

### \_ctx

> `protected` **\_ctx**: `CanvasRenderingContext2D`

Defined in: [canvas.ts:37](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L37)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [canvas.ts:40](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L40)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [canvas.ts:39](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L39)

---

### eventsEnabled

> **eventsEnabled**: `boolean`

Defined in: [canvas.ts:44](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L44)

---

### updateOnLoop

> **updateOnLoop**: `boolean`

Defined in: [canvas.ts:45](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L45)

## Accessors

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [canvas.ts:316](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L316)

The canvas height.

##### Returns

`number`

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [canvas.ts:309](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L309)

The canvas width.

##### Returns

`number`

## Methods

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [canvas.ts:79](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L79)

Add elements to this canvas (drawn on top of the current elements).
An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

Throws if an element was destroyed (with `destroy()`).

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`void`

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [canvas.ts:80](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L80)

Add elements to this canvas (drawn on top of the current elements).
An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

Throws if an element was destroyed (with `destroy()`).

##### Parameters

###### elements

...[`Element`](Element.md)[]

##### Returns

`void`

---

### bringToFront()

> **bringToFront**(`element`): `void`

Defined in: [canvas.ts:131](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L131)

Move an element to the front (drawn on top of the other elements).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### draw()

> **draw**(): `void`

Defined in: [canvas.ts:230](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L230)

Draw all the elements added to the canvas.

#### Returns

`void`

---

### getAllChildren()

> **getAllChildren**(): [`Element`](Element.md)[]

Defined in: [canvas.ts:337](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L337)

#### Returns

[`Element`](Element.md)[]

The elements added to this canvas.

---

### getCanvasContext()

> **getCanvasContext**(): `CanvasRenderingContext2D`

Defined in: [canvas.ts:330](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L330)

#### Returns

`CanvasRenderingContext2D`

The 2d canvas rendering context object.

---

### getChildrenIn()

> **getChildrenIn**(`x`, `y`): [`Element`](Element.md)[]

Defined in: [canvas.ts:180](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L180)

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

Defined in: [canvas.ts:323](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L323)

#### Returns

`HTMLCanvasElement`

The canvas html element.

---

### getRandomPosition()

> **getRandomPosition**(): `object`

Defined in: [canvas.ts:286](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L286)

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

Defined in: [canvas.ts:298](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L298)

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

Defined in: [canvas.ts:209](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L209)

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

Defined in: [canvas.ts:249](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L249)

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

Defined in: [canvas.ts:106](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L106)

Detach elements from this canvas, right away. They're no longer drawn, updated or considered in the collision
detection, but they aren't destroyed, so they can be added again later. Elements that aren't directly in this
canvas are ignored. To destroy an element, call its `destroy()` method instead.

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`boolean`

If any of the elements was in this canvas (and was detached).

#### Call Signature

> **removeChild**(...`elements`): `boolean`

Defined in: [canvas.ts:107](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L107)

Detach elements from this canvas, right away. They're no longer drawn, updated or considered in the collision
detection, but they aren't destroyed, so they can be added again later. Elements that aren't directly in this
canvas are ignored. To destroy an element, call its `destroy()` method instead.

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`Element`](Element.md)[]

##### Returns

`boolean`

If any of the elements was in this canvas (and was detached).

---

### sendToBack()

> **sendToBack**(`element`): `void`

Defined in: [canvas.ts:145](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L145)

Move an element to the back (drawn behind the other elements).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### setChildIndex()

> **setChildIndex**(`element`, `index`): `void`

Defined in: [canvas.ts:159](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L159)

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

Defined in: [canvas.ts:276](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L276)

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

Defined in: [canvas.ts:198](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/canvas.ts#L198)

Update the vertices of all the children elements. Useful for collision detection for example.

#### Returns

`void`
