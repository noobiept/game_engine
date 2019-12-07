[Game Engine](../README.md) › [Game](../modules/game.md) › [Bullet](game.bullet.md)

# Class: Bullet

Basic Usage:

    var bulletShape = new Game.Rectangle({
            width: 10,
            height: 2,
            color: 'blue'
        });
    var bullet = new Game.Bullet({
            x: 10,
            y: 10,
            angleOrTarget: 0,
            movementSpeed: 100
        });
    bullet.addChild( bulletShape );
    bullet.addEventListener( 'remove', function( data )
        {
        console.log( 'Bullet removed!' );
        });

    Game.addElement( bullet );

Events:

- `remove` -- `listener( data: { element: Bullet; };`

## Hierarchy

  ↳ [Container](game.container.md)

  ↳ **Bullet**

## Index

### Constructors

* [constructor](game.bullet.md#constructor)

### Properties

* [_children](game.bullet.md#protected-_children)
* [_container](game.bullet.md#_container)
* [_half_height](game.bullet.md#protected-_half_height)
* [_half_width](game.bullet.md#protected-_half_width)
* [_has_logic](game.bullet.md#_has_logic)
* [_height](game.bullet.md#protected-_height)
* [_listeners](game.bullet.md#protected-_listeners)
* [_removed](game.bullet.md#_removed)
* [_rotation](game.bullet.md#protected-_rotation)
* [_width](game.bullet.md#protected-_width)
* [_x](game.bullet.md#protected-_x)
* [_y](game.bullet.md#protected-_y)
* [category](game.bullet.md#category)
* [collidesWith](game.bullet.md#collideswith)
* [collision_data](game.bullet.md#collision_data)
* [damage](game.bullet.md#damage)
* [element](game.bullet.md#element)
* [grid_data](game.bullet.md#grid_data)
* [movement](game.bullet.md#movement)
* [opacity](game.bullet.md#opacity)
* [scaleX](game.bullet.md#scalex)
* [scaleY](game.bullet.md#scaley)
* [vertices](game.bullet.md#vertices)
* [visible](game.bullet.md#visible)

### Accessors

* [half_height](game.bullet.md#half_height)
* [half_width](game.bullet.md#half_width)
* [height](game.bullet.md#height)
* [rotation](game.bullet.md#rotation)
* [width](game.bullet.md#width)
* [x](game.bullet.md#x)
* [y](game.bullet.md#y)

### Methods

* [_removeNow](game.bullet.md#_removenow)
* [addChild](game.bullet.md#addchild)
* [addEventListener](game.bullet.md#addeventlistener)
* [addToPosition](game.bullet.md#addtoposition)
* [calculateDimensions](game.bullet.md#calculatedimensions)
* [checkCollision](game.bullet.md#checkcollision)
* [clone](game.bullet.md#clone)
* [dispatchEvent](game.bullet.md#dispatchevent)
* [dispatchMouseClickEvent](game.bullet.md#dispatchmouseclickevent)
* [dispatchMouseMoveEvent](game.bullet.md#dispatchmousemoveevent)
* [dispatchMouseOutEvent](game.bullet.md#dispatchmouseoutevent)
* [dispatchMouseOverEvent](game.bullet.md#dispatchmouseoverevent)
* [draw](game.bullet.md#draw)
* [drawElement](game.bullet.md#drawelement)
* [getAllChildren](game.bullet.md#getallchildren)
* [getHeight](game.bullet.md#getheight)
* [getVertices](game.bullet.md#getvertices)
* [getWidth](game.bullet.md#getwidth)
* [hasListeners](game.bullet.md#haslisteners)
* [intersect](game.bullet.md#intersect)
* [isRemoved](game.bullet.md#isremoved)
* [logic](game.bullet.md#logic)
* [mouseClickEvents](game.bullet.md#mouseclickevents)
* [remove](game.bullet.md#remove)
* [removeAllChildren](game.bullet.md#removeallchildren)
* [removeAllEventListeners](game.bullet.md#removealleventlisteners)
* [removeChild](game.bullet.md#removechild)
* [removeEventListener](game.bullet.md#removeeventlistener)
* [rotate](game.bullet.md#rotate)
* [setAngle](game.bullet.md#setangle)
* [setDimensions](game.bullet.md#setdimensions)
* [setHeight](game.bullet.md#setheight)
* [setPosition](game.bullet.md#setposition)
* [setTarget](game.bullet.md#settarget)
* [setWidth](game.bullet.md#setwidth)
* [toAxisAligned](game.bullet.md#toaxisaligned)
* [updateVertices](game.bullet.md#updatevertices)

## Constructors

###  constructor

\+ **new Bullet**(`args`: [BulletArgs](../interfaces/game.bulletargs.md)): *[Bullet](game.bullet.md)*

*Overrides [Container](game.container.md).[constructor](game.container.md#constructor)*

*Defined in [bullet.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [BulletArgs](../interfaces/game.bulletargs.md) |

**Returns:** *[Bullet](game.bullet.md)*

## Properties

### `Protected` _children

• **_children**: *[Element](game.element.md)[]*

*Inherited from [Container](game.container.md).[_children](game.container.md#protected-_children)*

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

###  damage

• **damage**: *number*

*Defined in [bullet.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L45)*

___

###  element

• **element**: *[Element](game.element.md)*

*Defined in [bullet.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L46)*

___

###  grid_data

• **grid_data**: *any*

*Inherited from [Element](game.element.md).[grid_data](game.element.md#grid_data)*

*Defined in [element.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L49)*

___

###  movement

• **movement**: *[Movement](game.movement.md)*

*Defined in [bullet.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L44)*

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

*Inherited from [Container](game.container.md).[addChild](game.container.md#addchild)*

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

*Inherited from [Container](game.container.md).[calculateDimensions](game.container.md#calculatedimensions)*

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

▸ **clone**(): *[Bullet](game.bullet.md)‹›*

*Overrides [Container](game.container.md).[clone](game.container.md#clone)*

*Defined in [bullet.ts:148](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L148)*

Create a clone of this element.

**Returns:** *[Bullet](game.bullet.md)‹›*

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

*Inherited from [Container](game.container.md).[draw](game.container.md#draw)*

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

*Inherited from [Container](game.container.md).[drawElement](game.container.md#drawelement)*

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

*Inherited from [Container](game.container.md).[getAllChildren](game.container.md#getallchildren)*

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

*Inherited from [Container](game.container.md).[getVertices](game.container.md#getvertices)*

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

*Inherited from [Container](game.container.md).[intersect](game.container.md#intersect)*

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

*Overrides [Container](game.container.md).[logic](game.container.md#logic)*

*Defined in [bullet.ts:122](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L122)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  mouseClickEvents

▸ **mouseClickEvents**(`x`: any, `y`: any, `event`: any): *boolean*

*Inherited from [Container](game.container.md).[mouseClickEvents](game.container.md#mouseclickevents)*

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

*Overrides [Container](game.container.md).[remove](game.container.md#remove)*

*Defined in [bullet.ts:132](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L132)*

Clear the target reference, before removing.
Dispatch the `remove` event as well.

**Returns:** *void*

___

###  removeAllChildren

▸ **removeAllChildren**(): *void*

*Inherited from [Container](game.container.md).[removeAllChildren](game.container.md#removeallchildren)*

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

*Inherited from [Container](game.container.md).[removeChild](game.container.md#removechild)*

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

###  setAngle

▸ **setAngle**(`angle`: number): *void*

*Defined in [bullet.ts:92](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L92)*

The bullet will travel in a set direction, based on the angle given.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | In radians.  |

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

###  setTarget

▸ **setTarget**(`target`: [Element](game.element.md)): *void*

*Defined in [bullet.ts:108](https://github.com/noobiept/game_engine/blob/625c324/source/bullet.ts#L108)*

The bullet will follow the target, until it hits.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | [Element](game.element.md) | The element to go to.  |

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

*Inherited from [Container](game.container.md).[toAxisAligned](game.container.md#toaxisaligned)*

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

*Inherited from [Container](game.container.md).[updateVertices](game.container.md#updatevertices)*

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
