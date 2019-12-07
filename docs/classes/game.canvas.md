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

* **Canvas**

## Index

### Constructors

* [constructor](game.canvas.md#constructor)

### Properties

* [_canvas](game.canvas.md#_canvas)
* [_children](game.canvas.md#protected-_children)
* [_ctx](game.canvas.md#protected-_ctx)
* [_height](game.canvas.md#protected-_height)
* [_width](game.canvas.md#protected-_width)
* [events_enabled](game.canvas.md#events_enabled)
* [update_on_loop](game.canvas.md#update_on_loop)

### Methods

* [addChild](game.canvas.md#addchild)
* [draw](game.canvas.md#draw)
* [getAllChildren](game.canvas.md#getallchildren)
* [getCanvasContext](game.canvas.md#getcanvascontext)
* [getChildrenIn](game.canvas.md#getchildrenin)
* [getHeight](game.canvas.md#getheight)
* [getHtmlCanvasElement](game.canvas.md#gethtmlcanvaselement)
* [getRandomPosition](game.canvas.md#getrandomposition)
* [getWidth](game.canvas.md#getwidth)
* [isInCanvas](game.canvas.md#isincanvas)
* [logic](game.canvas.md#logic)
* [mouseClickEvents](game.canvas.md#mouseclickevents)
* [removeChild](game.canvas.md#removechild)
* [updateDimensions](game.canvas.md#updatedimensions)
* [updateVertices](game.canvas.md#updatevertices)

## Constructors

###  constructor

\+ **new Canvas**(`args`: [CanvasArgs](../interfaces/game.canvasargs.md)): *[Canvas](game.canvas.md)*

*Defined in [canvas.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CanvasArgs](../interfaces/game.canvasargs.md) |

**Returns:** *[Canvas](game.canvas.md)*

## Properties

###  _canvas

• **_canvas**: *HTMLCanvasElement*

*Defined in [canvas.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L32)*

___

### `Protected` _children

• **_children**: *[Element](game.element.md)[]*

*Defined in [canvas.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L38)*

___

### `Protected` _ctx

• **_ctx**: *CanvasRenderingContext2D*

*Defined in [canvas.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L33)*

___

### `Protected` _height

• **_height**: *number*

*Defined in [canvas.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L36)*

___

### `Protected` _width

• **_width**: *number*

*Defined in [canvas.ts:35](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L35)*

___

###  events_enabled

• **events_enabled**: *boolean*

*Defined in [canvas.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L40)*

___

###  update_on_loop

• **update_on_loop**: *boolean*

*Defined in [canvas.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L41)*

## Methods

###  addChild

▸ **addChild**(`args`: any): *void*

*Defined in [canvas.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L67)*

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | Either an `Element`, or `...Element` or an `Element[]`  |

**Returns:** *void*

___

###  draw

▸ **draw**(): *void*

*Defined in [canvas.ts:177](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L177)*

Draw all the elements added to the canvas.

**Returns:** *void*

___

###  getAllChildren

▸ **getAllChildren**(): *[Element](game.element.md)‹›[]*

*Defined in [canvas.ts:307](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L307)*

**Returns:** *[Element](game.element.md)‹›[]*

The elements added to this canvas.

___

###  getCanvasContext

▸ **getCanvasContext**(): *CanvasRenderingContext2D*

*Defined in [canvas.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L298)*

**Returns:** *CanvasRenderingContext2D*

The 2d canvas rendering context object.

___

###  getChildrenIn

▸ **getChildrenIn**(`x`: number, `y`: number): *any[]*

*Defined in [canvas.ts:124](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L124)*

Get all the child elements that are in a given x/y position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *any[]*

___

###  getHeight

▸ **getHeight**(): *number*

*Defined in [canvas.ts:280](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L280)*

**Returns:** *number*

The canvas height.

___

###  getHtmlCanvasElement

▸ **getHtmlCanvasElement**(): *HTMLCanvasElement*

*Defined in [canvas.ts:289](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L289)*

**Returns:** *HTMLCanvasElement*

The canvas html element.

___

###  getRandomPosition

▸ **getRandomPosition**(): *object*

*Defined in [canvas.ts:240](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L240)*

Get a random x/y position that is within the canvas.

**Returns:** *object*

The random x/y position.

* **x**: *number* =  Utilities.getRandomInt( 0, this._width )

* **y**: *number* =  Utilities.getRandomInt( 0, this._height )

___

###  getWidth

▸ **getWidth**(): *number*

*Defined in [canvas.ts:271](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L271)*

**Returns:** *number*

The canvas width.

___

###  isInCanvas

▸ **isInCanvas**(`x`: number, `y`: number): *boolean*

*Defined in [canvas.ts:254](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L254)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The x position. |
`y` | number | The y position. |

**Returns:** *boolean*

If this position is located inside the canvas or not.

___

###  logic

▸ **logic**(`deltaTime`: number): *void*

*Defined in [canvas.ts:160](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L160)*

Call the logic of the elements added to this canvas (normally on the game loop).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  mouseClickEvents

▸ **mouseClickEvents**(`event`: MouseEvent): *void*

*Defined in [canvas.ts:200](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L200)*

Receives a mouse event. Move it along to this canvas elements, to see if there's an element that has listeners to it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggered.  |

**Returns:** *void*

___

###  removeChild

▸ **removeChild**(`args`: any): *boolean*

*Defined in [canvas.ts:92](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L92)*

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | Either an `Element` or `...Element` or an `Element[]`  |

**Returns:** *boolean*

___

###  updateDimensions

▸ **updateDimensions**(`width`: number, `height`: number): *void*

*Defined in [canvas.ts:228](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L228)*

Change the canvas dimensions (width/height).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | The new width. |
`height` | number | The new Height.  |

**Returns:** *void*

___

###  updateVertices

▸ **updateVertices**(): *void*

*Defined in [canvas.ts:146](https://github.com/noobiept/game_engine/blob/625c324/source/canvas.ts#L146)*

Update the vertices of all the children elements. Useful for collision detection for example.

**Returns:** *void*
