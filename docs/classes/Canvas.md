[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Canvas

# Class: Canvas

Defined in: [source/canvas.ts:39](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L39)

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

Defined in: [source/canvas.ts:51](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L51)

#### Parameters

##### args

[`CanvasArgs`](../interfaces/CanvasArgs.md)

#### Returns

`Canvas`

## Properties

### \_canvas

> **\_canvas**: `HTMLCanvasElement`

Defined in: [source/canvas.ts:40](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L40)

---

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [source/canvas.ts:46](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L46)

---

### \_ctx

> `protected` **\_ctx**: `CanvasRenderingContext2D`

Defined in: [source/canvas.ts:41](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L41)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/canvas.ts:44](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L44)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/canvas.ts:43](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L43)

---

### eventsEnabled

> **eventsEnabled**: `boolean`

Defined in: [source/canvas.ts:48](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L48)

---

### updateOnLoop

> **updateOnLoop**: `boolean`

Defined in: [source/canvas.ts:49](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L49)

## Accessors

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/canvas.ts:331](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L331)

The canvas height.

##### Returns

`number`

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/canvas.ts:324](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L324)

The canvas width.

##### Returns

`number`

## Methods

### \_savePrevious()

> **\_savePrevious**(): `void`

Defined in: [source/canvas.ts:236](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L236)

Save the current state of the elements, at the start of a step (with a fixed update rate, see
`Game.setFixedTimestep()`), to draw them between the last two steps.

#### Returns

`void`

---

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [source/canvas.ts:83](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L83)

Add elements to this canvas (drawn on top of the current elements).
An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

Throws if an element was destroyed (with `destroy()`).

##### Parameters

###### children

[`Element`](Element.md) \| readonly [`Element`](Element.md)[]

##### Returns

`void`

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [source/canvas.ts:84](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L84)

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

Defined in: [source/canvas.ts:136](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L136)

Move an element to the front (drawn on top of the other elements).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### draw()

> **draw**(): `void`

Defined in: [source/canvas.ts:245](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L245)

Draw all the elements added to the canvas.

#### Returns

`void`

---

### getAllChildren()

> **getAllChildren**(): readonly [`Element`](Element.md)[]

Defined in: [source/canvas.ts:354](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L354)

#### Returns

readonly [`Element`](Element.md)[]

The elements added to this canvas (in the drawing order, from the back to the front). It's the canvas'
own list, so it changes when elements are added/removed. Copy it (with `slice()`) to keep the current
elements.

---

### getCanvasContext()

> **getCanvasContext**(): `CanvasRenderingContext2D`

Defined in: [source/canvas.ts:345](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L345)

#### Returns

`CanvasRenderingContext2D`

The 2d canvas rendering context object.

---

### getChildrenIn()

> **getChildrenIn**(`x`, `y`): [`Element`](Element.md)[]

Defined in: [source/canvas.ts:185](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L185)

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

Defined in: [source/canvas.ts:338](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L338)

#### Returns

`HTMLCanvasElement`

The canvas html element.

---

### getRandomPosition()

> **getRandomPosition**(): `object`

Defined in: [source/canvas.ts:301](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L301)

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

Defined in: [source/canvas.ts:313](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L313)

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

Defined in: [source/canvas.ts:214](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L214)

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

Defined in: [source/canvas.ts:264](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L264)

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

Defined in: [source/canvas.ts:111](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L111)

Detach elements from this canvas, right away. They're no longer drawn, updated or considered in the collision
detection, but they aren't destroyed, so they can be added again later. Elements that aren't directly in this
canvas are ignored. To destroy an element, call its `destroy()` method instead.

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| readonly [`Element`](Element.md)[]

##### Returns

`boolean`

If any of the elements was in this canvas (and was detached).

#### Call Signature

> **removeChild**(...`elements`): `boolean`

Defined in: [source/canvas.ts:112](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L112)

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

Defined in: [source/canvas.ts:150](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L150)

Move an element to the back (drawn behind the other elements).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### setChildIndex()

> **setChildIndex**(`element`, `index`): `void`

Defined in: [source/canvas.ts:164](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L164)

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

Defined in: [source/canvas.ts:291](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L291)

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

Defined in: [source/canvas.ts:203](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/canvas.ts#L203)

Update the vertices of all the children elements. Useful for collision detection for example.

#### Returns

`void`
