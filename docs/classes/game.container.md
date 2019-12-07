[Game Engine](../README.md) › [Game](../modules/game.md) › [Container](game.container.md)

# Class: Container

Basic Usage:

    var container = new Game.Container();

    var rectangle = new Game.Rectangle({
            width: 10,
            height: 10,
            color: 'red'
        });
    container.addChild( rectangle );

    Game.addElement( container );

Events:

Examples -- `basic_example`, `clone`, `minesweeper`

## Hierarchy

  ↳ [Element](game.element.md)

  ↳ **Container**

  ↳ [Bullet](game.bullet.md)

## Index

### Constructors

* [constructor](game.container.md#constructor)

### Properties

* [_children](game.container.md#protected-_children)
* [_container](game.container.md#_container)
* [_half_height](game.container.md#protected-_half_height)
* [_half_width](game.container.md#protected-_half_width)
* [_has_logic](game.container.md#_has_logic)
* [_height](game.container.md#protected-_height)
* [_listeners](game.container.md#protected-_listeners)
* [_removed](game.container.md#_removed)
* [_rotation](game.container.md#protected-_rotation)
* [_width](game.container.md#protected-_width)
* [_x](game.container.md#protected-_x)
* [_y](game.container.md#protected-_y)
* [category](game.container.md#category)
* [collidesWith](game.container.md#collideswith)
* [collision_data](game.container.md#collision_data)
* [grid_data](game.container.md#grid_data)
* [opacity](game.container.md#opacity)
* [scaleX](game.container.md#scalex)
* [scaleY](game.container.md#scaley)
* [vertices](game.container.md#vertices)
* [visible](game.container.md#visible)

### Accessors

* [half_height](game.container.md#half_height)
* [half_width](game.container.md#half_width)
* [height](game.container.md#height)
* [rotation](game.container.md#rotation)
* [width](game.container.md#width)
* [x](game.container.md#x)
* [y](game.container.md#y)

### Methods

* [_removeNow](game.container.md#_removenow)
* [addChild](game.container.md#addchild)
* [addEventListener](game.container.md#addeventlistener)
* [addToPosition](game.container.md#addtoposition)
* [calculateDimensions](game.container.md#calculatedimensions)
* [checkCollision](game.container.md#checkcollision)
* [clone](game.container.md#clone)
* [dispatchEvent](game.container.md#dispatchevent)
* [dispatchMouseClickEvent](game.container.md#dispatchmouseclickevent)
* [dispatchMouseMoveEvent](game.container.md#dispatchmousemoveevent)
* [dispatchMouseOutEvent](game.container.md#dispatchmouseoutevent)
* [dispatchMouseOverEvent](game.container.md#dispatchmouseoverevent)
* [draw](game.container.md#draw)
* [drawElement](game.container.md#drawelement)
* [getAllChildren](game.container.md#getallchildren)
* [getHeight](game.container.md#getheight)
* [getVertices](game.container.md#getvertices)
* [getWidth](game.container.md#getwidth)
* [hasListeners](game.container.md#haslisteners)
* [intersect](game.container.md#intersect)
* [isRemoved](game.container.md#isremoved)
* [logic](game.container.md#logic)
* [mouseClickEvents](game.container.md#mouseclickevents)
* [remove](game.container.md#remove)
* [removeAllChildren](game.container.md#removeallchildren)
* [removeAllEventListeners](game.container.md#removealleventlisteners)
* [removeChild](game.container.md#removechild)
* [removeEventListener](game.container.md#removeeventlistener)
* [rotate](game.container.md#rotate)
* [setDimensions](game.container.md#setdimensions)
* [setHeight](game.container.md#setheight)
* [setPosition](game.container.md#setposition)
* [setWidth](game.container.md#setwidth)
* [toAxisAligned](game.container.md#toaxisaligned)
* [updateVertices](game.container.md#updatevertices)

## Constructors

###  constructor

\+ **new Container**(`args?`: [ContainerArgs](../interfaces/game.containerargs.md)): *[Container](game.container.md)*

*Overrides [Element](game.element.md).[constructor](game.element.md#constructor)*

*Defined in [container.ts:31](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | [ContainerArgs](../interfaces/game.containerargs.md) |

**Returns:** *[Container](game.container.md)*

## Properties

### `Protected` _children

• **_children**: *[Element](game.element.md)[]*

*Defined in [container.ts:31](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L31)*

___

###  _container

• **_container**: *[Container](game.container.md)*

*Inherited from [Element](game.element.md).[_container](game.element.md#_container)*

*Defined in [element.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L60)*

___

### `Protected` _half_height

• **_half_height**: *number*

*Inherited from [Element](game.element.md).[_half_height](game.element.md#protected-_half_height)*

*Defined in [element.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L57)*

___

### `Protected` _half_width

• **_half_width**: *number*

*Inherited from [Element](game.element.md).[_half_width](game.element.md#protected-_half_width)*

*Defined in [element.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L56)*

___

###  _has_logic

• **_has_logic**: *boolean*

*Inherited from [Element](game.element.md).[_has_logic](game.element.md#_has_logic)*

*Defined in [element.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L61)*

___

### `Protected` _height

• **_height**: *number*

*Inherited from [Element](game.element.md).[_height](game.element.md#protected-_height)*

*Defined in [element.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L55)*

___

### `Protected` _listeners

• **_listeners**: *any*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[_listeners](game.eventdispatcher.md#protected-_listeners)*

*Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)*

___

###  _removed

• **_removed**: *boolean*

*Inherited from [Element](game.element.md).[_removed](game.element.md#_removed)*

*Defined in [element.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L62)*

___

### `Protected` _rotation

• **_rotation**: *number*

*Inherited from [Element](game.element.md).[_rotation](game.element.md#protected-_rotation)*

*Defined in [element.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L59)*

___

### `Protected` _width

• **_width**: *number*

*Inherited from [Element](game.element.md).[_width](game.element.md#protected-_width)*

*Defined in [element.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L54)*

___

### `Protected` _x

• **_x**: *number*

*Inherited from [Element](game.element.md).[_x](game.element.md#protected-_x)*

*Defined in [element.ts:52](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L52)*

___

### `Protected` _y

• **_y**: *number*

*Inherited from [Element](game.element.md).[_y](game.element.md#protected-_y)*

*Defined in [element.ts:53](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L53)*

___

###  category

• **category**: *number*

*Inherited from [Element](game.element.md).[category](game.element.md#category)*

*Defined in [element.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L46)*

___

###  collidesWith

• **collidesWith**: *number*

*Inherited from [Element](game.element.md).[collidesWith](game.element.md#collideswith)*

*Defined in [element.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L47)*

___

###  collision_data

• **collision_data**: *any*

*Inherited from [Element](game.element.md).[collision_data](game.element.md#collision_data)*

*Defined in [element.ts:50](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L50)*

___

###  grid_data

• **grid_data**: *any*

*Inherited from [Element](game.element.md).[grid_data](game.element.md#grid_data)*

*Defined in [element.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L49)*

___

###  opacity

• **opacity**: *number*

*Inherited from [Element](game.element.md).[opacity](game.element.md#opacity)*

*Defined in [element.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L40)*

___

###  scaleX

• **scaleX**: *number*

*Inherited from [Element](game.element.md).[scaleX](game.element.md#scalex)*

*Defined in [element.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L43)*

___

###  scaleY

• **scaleY**: *number*

*Inherited from [Element](game.element.md).[scaleY](game.element.md#scaley)*

*Defined in [element.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L44)*

___

###  vertices

• **vertices**: *[Vertices](../modules/game.collisiondetection.md#vertices)*

*Inherited from [Element](game.element.md).[vertices](game.element.md#vertices)*

*Defined in [element.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L38)*

___

###  visible

• **visible**: *boolean*

*Inherited from [Element](game.element.md).[visible](game.element.md#visible)*

*Defined in [element.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L41)*

## Accessors

###  half_height

• **get half_height**(): *number*

*Inherited from [Element](game.element.md).[half_height](game.element.md#half_height)*

*Defined in [element.ts:561](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L561)*

**Returns:** *number*

___

###  half_width

• **get half_width**(): *number*

*Inherited from [Element](game.element.md).[half_width](game.element.md#half_width)*

*Defined in [element.ts:555](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L555)*

**Returns:** *number*

___

###  height

• **get height**(): *number*

*Inherited from [Element](game.element.md).[height](game.element.md#height)*

*Defined in [element.ts:549](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L549)*

**Returns:** *number*

___

###  rotation

• **get rotation**(): *number*

*Inherited from [Element](game.element.md).[rotation](game.element.md#rotation)*

*Defined in [element.ts:364](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L364)*

**Returns:** *number*

Rotation in radians.

• **set rotation**(`angle`: number): *void*

*Inherited from [Element](game.element.md).[rotation](game.element.md#rotation)*

*Defined in [element.ts:373](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L373)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | Rotate by a certain angle (in radians).  |

**Returns:** *void*

Rotation in radians.

___

###  width

• **get width**(): *number*

*Inherited from [Element](game.element.md).[width](game.element.md#width)*

*Defined in [element.ts:543](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L543)*

**Returns:** *number*

___

###  x

• **get x**(): *number*

*Inherited from [Element](game.element.md).[x](game.element.md#x)*

*Defined in [element.ts:523](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L523)*

**Returns:** *number*

• **set x**(`x`: number): *void*

*Inherited from [Element](game.element.md).[x](game.element.md#x)*

*Defined in [element.ts:515](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L515)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *void*

___

###  y

• **get y**(): *number*

*Inherited from [Element](game.element.md).[y](game.element.md#y)*

*Defined in [element.ts:537](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L537)*

**Returns:** *number*

• **set y**(`y`: number): *void*

*Inherited from [Element](game.element.md).[y](game.element.md#y)*

*Defined in [element.ts:529](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L529)*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *void*

## Methods

###  _removeNow

▸ **_removeNow**(): *void*

*Inherited from [Element](game.element.md).[_removeNow](game.element.md#_removenow)*

*Defined in [element.ts:415](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L415)*

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

**Returns:** *void*

___

###  addChild

▸ **addChild**(`elements`: any): *void*

*Defined in [container.ts:58](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L58)*

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`elements` | any | Either `Element` or `...Element` or `Element[]`.  |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: function): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[addEventListener](game.eventdispatcher.md#addeventlistener)*

*Defined in [event_dispatcher.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L32)*

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

**Parameters:**

▪ **type**: *string*

Type of the event.

▪ **listener**: *function*

A function to be called when the event is dispatched.

▸ (`data`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

If it was successfully added.

___

###  addToPosition

▸ **addToPosition**(`x`: number, `y`: number): *void*

*Inherited from [Element](game.element.md).[addToPosition](game.element.md#addtoposition)*

*Defined in [element.ts:506](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L506)*

Adds to the current position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  calculateDimensions

▸ **calculateDimensions**(): *void*

*Defined in [container.ts:231](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L231)*

Calculate the width/height of the container (based on the dimensions of the children elements). Doesn't consider the rotations of the elements.

**Returns:** *void*

___

###  checkCollision

▸ **checkCollision**(`other`: [Element](game.element.md)): *boolean*

*Inherited from [Element](game.element.md).[checkCollision](game.element.md#checkcollision)*

*Defined in [element.ts:177](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L177)*

Check collision between two elements.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Element](game.element.md) |

**Returns:** *boolean*

___

###  clone

▸ **clone**(): *[Container](game.container.md)‹›*

*Overrides [Element](game.element.md).[clone](game.element.md#abstract-clone)*

*Defined in [container.ts:398](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L398)*

Clones the container (as well as the children).

**Returns:** *[Container](game.container.md)‹›*

A new cloned container.

___

###  dispatchEvent

▸ **dispatchEvent**(`type`: string, `data?`: any): *void*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[dispatchEvent](game.eventdispatcher.md#dispatchevent)*

*Defined in [event_dispatcher.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L101)*

Dispatches an event, which will trigger the listeners of that event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Type of the event to dispatch. |
`data?` | any | Data to be sent to every listener.  |

**Returns:** *void*

___

###  dispatchMouseClickEvent

▸ **dispatchMouseClickEvent**(`event`: MouseEvent): *void*

*Inherited from [Element](game.element.md).[dispatchMouseClickEvent](game.element.md#dispatchmouseclickevent)*

*Defined in [element.ts:245](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L245)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | Either a mouse up, mouse down or click event.  |

**Returns:** *void*

___

###  dispatchMouseMoveEvent

▸ **dispatchMouseMoveEvent**(): *void*

*Inherited from [Element](game.element.md).[dispatchMouseMoveEvent](game.element.md#dispatchmousemoveevent)*

*Defined in [element.ts:231](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L231)*

**Returns:** *void*

___

###  dispatchMouseOutEvent

▸ **dispatchMouseOutEvent**(): *void*

*Inherited from [Element](game.element.md).[dispatchMouseOutEvent](game.element.md#dispatchmouseoutevent)*

*Defined in [element.ts:220](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L220)*

**Returns:** *void*

___

###  dispatchMouseOverEvent

▸ **dispatchMouseOverEvent**(): *void*

*Inherited from [Element](game.element.md).[dispatchMouseOverEvent](game.element.md#dispatchmouseoverevent)*

*Defined in [element.ts:209](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L209)*

**Returns:** *void*

___

###  draw

▸ **draw**(`ctx`: CanvasRenderingContext2D): *void*

*Overrides [Element](game.element.md).[draw](game.element.md#draw)*

*Defined in [container.ts:154](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L154)*

Draw all the elements in the container.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | CanvasRenderingContext2D | The canvas rendering context.  |

**Returns:** *void*

___

###  drawElement

▸ **drawElement**(`ctx`: CanvasRenderingContext2D): *void*

*Overrides [Element](game.element.md).[drawElement](game.element.md#abstract-drawelement)*

*Defined in [container.ts:184](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L184)*

Normally draws the element, but in the case of the container just draw its children.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | CanvasRenderingContext2D | The canvas rendering context.  |

**Returns:** *void*

___

###  getAllChildren

▸ **getAllChildren**(): *[Element](game.element.md)‹›[]*

*Defined in [container.ts:133](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L133)*

Get all the children elements.

**Returns:** *[Element](game.element.md)‹›[]*

___

###  getHeight

▸ **getHeight**(): *number*

*Inherited from [Element](game.element.md).[getHeight](game.element.md#getheight)*

*Defined in [element.ts:268](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L268)*

**Returns:** *number*

The element's height. Doesn't consider the rotation.

___

###  getVertices

▸ **getVertices**(): *any[]*

*Overrides [Element](game.element.md).[getVertices](game.element.md#getvertices)*

*Defined in [container.ts:375](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L375)*

Get the element vertices points. Assumes its a rectangle.

**Returns:** *any[]*

___

###  getWidth

▸ **getWidth**(): *number*

*Inherited from [Element](game.element.md).[getWidth](game.element.md#getwidth)*

*Defined in [element.ts:259](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L259)*

**Returns:** *number*

The element's width. Doesn't consider the rotation.

___

###  hasListeners

▸ **hasListeners**(`type`: string): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[hasListeners](game.eventdispatcher.md#haslisteners)*

*Defined in [event_dispatcher.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L121)*

Check if there are listeners to a particular event type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | The event type to check. |

**Returns:** *boolean*

If there are listeners or not.

___

###  intersect

▸ **intersect**(`x`: number, `y`: number): *any[]*

*Overrides [Element](game.element.md).[intersect](game.element.md#intersect)*

*Defined in [container.ts:193](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L193)*

Check if the given x/y position intersects with any of this container's children. Returns all the elements it intersects.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *any[]*

___

###  isRemoved

▸ **isRemoved**(): *boolean*

*Inherited from [Element](game.element.md).[isRemoved](game.element.md#isremoved)*

*Defined in [element.ts:437](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L437)*

Tells if this element has already been removed or not.

**Returns:** *boolean*

___

###  logic

▸ **logic**(`deltaTime`: number): *void*

*Overrides [Element](game.element.md).[logic](game.element.md#logic)*

*Defined in [container.ts:338](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L338)*

Call the logic of the children elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  mouseClickEvents

▸ **mouseClickEvents**(`x`: any, `y`: any, `event`: any): *boolean*

*Overrides [Element](game.element.md).[mouseClickEvents](game.element.md#mouseclickevents)*

*Defined in [container.ts:212](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |
`y` | any |
`event` | any |

**Returns:** *boolean*

___

###  remove

▸ **remove**(): *void*

*Overrides [Element](game.element.md).[remove](game.element.md#remove)*

*Defined in [container.ts:142](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L142)*

Make sure the children are removed as well.

**Returns:** *void*

___

###  removeAllChildren

▸ **removeAllChildren**(): *void*

*Defined in [container.ts:118](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L118)*

Remove all of this container's children.

**Returns:** *void*

___

###  removeAllEventListeners

▸ **removeAllEventListeners**(): *void*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[removeAllEventListeners](game.eventdispatcher.md#removealleventlisteners)*

*Defined in [event_dispatcher.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L89)*

Remove all the event listeners.

**Returns:** *void*

___

###  removeChild

▸ **removeChild**(`args`: any): *void*

*Defined in [container.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L89)*

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | Either `Element` or `...Element` or `Element[]`.  |

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**(`type`: string, `listener?`: function): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[removeEventListener](game.eventdispatcher.md#removeeventlistener)*

*Defined in [event_dispatcher.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L60)*

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

**Parameters:**

▪ **type**: *string*

The event type.

▪`Optional`  **listener**: *function*

The listener function to remove. If not provided then remove all the functions associated with the event type.

▸ (`data`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

If it was successfully removed.

___

###  rotate

▸ **rotate**(`angle`: number, `degrees?`: boolean): *void*

*Inherited from [Element](game.element.md).[rotate](game.element.md#rotate)*

*Defined in [element.ts:383](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L383)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | Angle of rotation. |
`degrees?` | boolean | Whether the angle provided is in degrees or radians.  |

**Returns:** *void*

___

###  setDimensions

▸ **setDimensions**(`width`: number, `height`: number): *void*

*Inherited from [Element](game.element.md).[setDimensions](game.element.md#setdimensions)*

*Defined in [element.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L297)*

Set the width and height at the same time.

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *void*

___

###  setHeight

▸ **setHeight**(`height`: number): *void*

*Inherited from [Element](game.element.md).[setHeight](game.element.md#setheight)*

*Defined in [element.ts:287](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L287)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`height` | number | New height.  |

**Returns:** *void*

___

###  setPosition

▸ **setPosition**(`x`: number, `y`: number): *void*

*Inherited from [Element](game.element.md).[setPosition](game.element.md#setposition)*

*Defined in [element.ts:494](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L494)*

Move the unit to the given x/y position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  setWidth

▸ **setWidth**(`width`: number): *void*

*Inherited from [Element](game.element.md).[setWidth](game.element.md#setwidth)*

*Defined in [element.ts:277](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L277)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | New width.  |

**Returns:** *void*

___

###  toAxisAligned

▸ **toAxisAligned**(): *object*

*Overrides [Element](game.element.md).[toAxisAligned](game.element.md#toaxisaligned)*

*Defined in [container.ts:282](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L282)*

Calculates an axis-aligned rectangle from the rotated shape.

**Returns:** *object*

* **maxX**: *number* =  maxX

* **maxY**: *number* =  maxY

* **minX**: *number* =  minX

* **minY**: *number* =  minY

___

###  updateVertices

▸ **updateVertices**(`x`: any, `y`: any, `scaleX`: any, `scaleY`: any, `rotation`: any): *void*

*Overrides [Element](game.element.md).[updateVertices](game.element.md#updatevertices)*

*Defined in [container.ts:356](https://github.com/noobiept/game_engine/blob/625c324/source/container.ts#L356)*

Get the global vertices points of this element.
The arguments are the compound values from the parent containers.

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |
`y` | any |
`scaleX` | any |
`scaleY` | any |
`rotation` | any |

**Returns:** *void*
