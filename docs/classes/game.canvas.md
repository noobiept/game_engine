[Game Engine](../README.md) › [Game](../modules/game.md) › [Canvas](game.canvas.md)

# Class: Canvas

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

## Hierarchy

- **Canvas**

## Index

### Constructors

- [constructor](game.canvas.md#constructor)

### Properties

- [\_canvas](game.canvas.md#_canvas)
- [\_children](game.canvas.md#protected-_children)
- [\_ctx](game.canvas.md#protected-_ctx)
- [\_height](game.canvas.md#protected-_height)
- [\_width](game.canvas.md#protected-_width)
- [events_enabled](game.canvas.md#events_enabled)
- [update_on_loop](game.canvas.md#update_on_loop)

### Methods

- [addChild](game.canvas.md#addchild)
- [draw](game.canvas.md#draw)
- [getAllChildren](game.canvas.md#getallchildren)
- [getCanvasContext](game.canvas.md#getcanvascontext)
- [getChildrenIn](game.canvas.md#getchildrenin)
- [getHeight](game.canvas.md#getheight)
- [getHtmlCanvasElement](game.canvas.md#gethtmlcanvaselement)
- [getRandomPosition](game.canvas.md#getrandomposition)
- [getWidth](game.canvas.md#getwidth)
- [isInCanvas](game.canvas.md#isincanvas)
- [logic](game.canvas.md#logic)
- [mouseClickEvents](game.canvas.md#mouseclickevents)
- [removeChild](game.canvas.md#removechild)
- [updateDimensions](game.canvas.md#updatedimensions)
- [updateVertices](game.canvas.md#updatevertices)

## Constructors

### constructor

\+ **new Canvas**(`args`: [CanvasArgs](../interfaces/game.canvasargs.md)): _[Canvas](game.canvas.md)_

_Defined in [canvas.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L41)_

**Parameters:**

| Name   | Type                                           |
| ------ | ---------------------------------------------- |
| `args` | [CanvasArgs](../interfaces/game.canvasargs.md) |

**Returns:** _[Canvas](game.canvas.md)_

## Properties

### \_canvas

• **\_canvas**: _HTMLCanvasElement_

_Defined in [canvas.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L32)_

---

### `Protected` \_children

• **\_children**: _[Element](game.element.md)[]_

_Defined in [canvas.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L38)_

---

### `Protected` \_ctx

• **\_ctx**: _CanvasRenderingContext2D_

_Defined in [canvas.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L33)_

---

### `Protected` \_height

• **\_height**: _number_

_Defined in [canvas.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L36)_

---

### `Protected` \_width

• **\_width**: _number_

_Defined in [canvas.ts:35](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L35)_

---

### events_enabled

• **events_enabled**: _boolean_

_Defined in [canvas.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L40)_

---

### update_on_loop

• **update_on_loop**: _boolean_

_Defined in [canvas.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L41)_

## Methods

### addChild

▸ **addChild**(`args`: any): _void_

_Defined in [canvas.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L67)_

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

**Parameters:**

| Name   | Type | Description                                            |
| ------ | ---- | ------------------------------------------------------ |
| `args` | any  | Either an `Element`, or `...Element` or an `Element[]` |

**Returns:** _void_

---

### draw

▸ **draw**(): _void_

_Defined in [canvas.ts:177](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L177)_

Draw all the elements added to the canvas.

**Returns:** _void_

---

### getAllChildren

▸ **getAllChildren**(): _[Element](game.element.md)‹›[]_

_Defined in [canvas.ts:307](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L307)_

**Returns:** _[Element](game.element.md)‹›[]_

The elements added to this canvas.

---

### getCanvasContext

▸ **getCanvasContext**(): _CanvasRenderingContext2D_

_Defined in [canvas.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L298)_

**Returns:** _CanvasRenderingContext2D_

The 2d canvas rendering context object.

---

### getChildrenIn

▸ **getChildrenIn**(`x`: number, `y`: number): _any[]_

_Defined in [canvas.ts:124](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L124)_

Get all the child elements that are in a given x/y position.

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `x`  | number |
| `y`  | number |

**Returns:** _any[]_

---

### getHeight

▸ **getHeight**(): _number_

_Defined in [canvas.ts:280](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L280)_

**Returns:** _number_

The canvas height.

---

### getHtmlCanvasElement

▸ **getHtmlCanvasElement**(): _HTMLCanvasElement_

_Defined in [canvas.ts:289](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L289)_

**Returns:** _HTMLCanvasElement_

The canvas html element.

---

### getRandomPosition

▸ **getRandomPosition**(): _object_

_Defined in [canvas.ts:240](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L240)_

Get a random x/y position that is within the canvas.

**Returns:** _object_

The random x/y position.

- **x**: _number_ = Utilities.getRandomInt( 0, this.\_width )

- **y**: _number_ = Utilities.getRandomInt( 0, this.\_height )

---

### getWidth

▸ **getWidth**(): _number_

_Defined in [canvas.ts:271](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L271)_

**Returns:** _number_

The canvas width.

---

### isInCanvas

▸ **isInCanvas**(`x`: number, `y`: number): _boolean_

_Defined in [canvas.ts:254](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L254)_

**Parameters:**

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| `x`  | number | The x position. |
| `y`  | number | The y position. |

**Returns:** _boolean_

If this position is located inside the canvas or not.

---

### logic

▸ **logic**(`deltaTime`: number): _void_

_Defined in [canvas.ts:160](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L160)_

Call the logic of the elements added to this canvas (normally on the game loop).

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `deltaTime` | number | Time elapsed since the last update. |

**Returns:** _void_

---

### mouseClickEvents

▸ **mouseClickEvents**(`event`: MouseEvent): _void_

_Defined in [canvas.ts:200](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L200)_

Receives a mouse event. Move it along to this canvas elements, to see if there's an element that has listeners to it.

**Parameters:**

| Name    | Type       | Description                |
| ------- | ---------- | -------------------------- |
| `event` | MouseEvent | The mouse event triggered. |

**Returns:** _void_

---

### removeChild

▸ **removeChild**(`args`: any): _boolean_

_Defined in [canvas.ts:92](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L92)_

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

**Parameters:**

| Name   | Type | Description                                           |
| ------ | ---- | ----------------------------------------------------- |
| `args` | any  | Either an `Element` or `...Element` or an `Element[]` |

**Returns:** _boolean_

---

### updateDimensions

▸ **updateDimensions**(`width`: number, `height`: number): _void_

_Defined in [canvas.ts:228](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L228)_

Change the canvas dimensions (width/height).

**Parameters:**

| Name     | Type   | Description     |
| -------- | ------ | --------------- |
| `width`  | number | The new width.  |
| `height` | number | The new Height. |

**Returns:** _void_

---

### updateVertices

▸ **updateVertices**(): _void_

_Defined in [canvas.ts:146](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L146)_

Update the vertices of all the children elements. Useful for collision detection for example.

**Returns:** _void_
