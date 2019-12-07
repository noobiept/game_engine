[Game Engine](../README.md) › [Game](../modules/game.md) › [Sprite](game.sprite.md)

# Class: Sprite

Basic usage:

    var sprite = new Game.Sprite({
            x: 10,
            y: 20,
            image: Game.Preload.get( 'id' ),
            frameWidth: 30,
            frameHeight: 40,
            interval: 1,
            animations: {
                animationName: [ 0, 1 ]
            }
        });
    Game.addElement( sprite );

        // set a static frame
    sprite.setFrame( 1 );

        // or play a specific animation
    sprite.play( 'animationName' );

Examples -- `clone`, `sprite`

## Hierarchy

  ↳ [Bitmap](game.bitmap.md)

  ↳ **Sprite**

## Index

### Constructors

* [constructor](game.sprite.md#constructor)

### Properties

* [_animations](game.sprite.md#protected-_animations)
* [_container](game.sprite.md#_container)
* [_count_interval](game.sprite.md#protected-_count_interval)
* [_current_animation](game.sprite.md#protected-_current_animation)
* [_current_animation_position](game.sprite.md#protected-_current_animation_position)
* [_frames_per_line](game.sprite.md#protected-_frames_per_line)
* [_half_height](game.sprite.md#protected-_half_height)
* [_half_width](game.sprite.md#protected-_half_width)
* [_has_logic](game.sprite.md#_has_logic)
* [_height](game.sprite.md#protected-_height)
* [_image](game.sprite.md#protected-_image)
* [_listeners](game.sprite.md#protected-_listeners)
* [_removed](game.sprite.md#_removed)
* [_rotation](game.sprite.md#protected-_rotation)
* [_source_x](game.sprite.md#protected-_source_x)
* [_source_y](game.sprite.md#protected-_source_y)
* [_width](game.sprite.md#protected-_width)
* [_x](game.sprite.md#protected-_x)
* [_y](game.sprite.md#protected-_y)
* [category](game.sprite.md#category)
* [collidesWith](game.sprite.md#collideswith)
* [collision_data](game.sprite.md#collision_data)
* [grid_data](game.sprite.md#grid_data)
* [interval](game.sprite.md#interval)
* [opacity](game.sprite.md#opacity)
* [scaleX](game.sprite.md#scalex)
* [scaleY](game.sprite.md#scaley)
* [vertices](game.sprite.md#vertices)
* [visible](game.sprite.md#visible)

### Accessors

* [half_height](game.sprite.md#half_height)
* [half_width](game.sprite.md#half_width)
* [height](game.sprite.md#height)
* [image](game.sprite.md#image)
* [rotation](game.sprite.md#rotation)
* [width](game.sprite.md#width)
* [x](game.sprite.md#x)
* [y](game.sprite.md#y)

### Methods

* [_removeNow](game.sprite.md#_removenow)
* [addEventListener](game.sprite.md#addeventlistener)
* [addToPosition](game.sprite.md#addtoposition)
* [checkCollision](game.sprite.md#checkcollision)
* [clone](game.sprite.md#clone)
* [dispatchEvent](game.sprite.md#dispatchevent)
* [dispatchMouseClickEvent](game.sprite.md#dispatchmouseclickevent)
* [dispatchMouseMoveEvent](game.sprite.md#dispatchmousemoveevent)
* [dispatchMouseOutEvent](game.sprite.md#dispatchmouseoutevent)
* [dispatchMouseOverEvent](game.sprite.md#dispatchmouseoverevent)
* [draw](game.sprite.md#draw)
* [drawElement](game.sprite.md#drawelement)
* [getHeight](game.sprite.md#getheight)
* [getVertices](game.sprite.md#getvertices)
* [getWidth](game.sprite.md#getwidth)
* [hasListeners](game.sprite.md#haslisteners)
* [intersect](game.sprite.md#intersect)
* [isRemoved](game.sprite.md#isremoved)
* [logic](game.sprite.md#logic)
* [mouseClickEvents](game.sprite.md#mouseclickevents)
* [nextFrame](game.sprite.md#nextframe)
* [play](game.sprite.md#play)
* [remove](game.sprite.md#remove)
* [removeAllEventListeners](game.sprite.md#removealleventlisteners)
* [removeEventListener](game.sprite.md#removeeventlistener)
* [rotate](game.sprite.md#rotate)
* [setDimensions](game.sprite.md#setdimensions)
* [setFrame](game.sprite.md#setframe)
* [setHeight](game.sprite.md#setheight)
* [setPosition](game.sprite.md#setposition)
* [setWidth](game.sprite.md#setwidth)
* [stop](game.sprite.md#stop)
* [toAxisAligned](game.sprite.md#toaxisaligned)
* [updateVertices](game.sprite.md#updatevertices)

## Constructors

###  constructor

\+ **new Sprite**(`args`: [SpriteArgs](../interfaces/game.spriteargs.md)): *[Sprite](game.sprite.md)*

*Overrides [Bitmap](game.bitmap.md).[constructor](game.bitmap.md#constructor)*

*Defined in [sprite.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SpriteArgs](../interfaces/game.spriteargs.md) |

**Returns:** *[Sprite](game.sprite.md)*

## Properties

### `Protected` _animations

• **_animations**: *object*

*Defined in [sprite.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L47)*

#### Type declaration:

* \[ **id**: *string*\]: number[]

___

###  _container

• **_container**: *[Container](game.container.md)*

*Inherited from [Element](game.element.md).[_container](game.element.md#_container)*

*Defined in [element.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L60)*

___

### `Protected` _count_interval

• **_count_interval**: *number*

*Defined in [sprite.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L43)*

___

### `Protected` _current_animation

• **_current_animation**: *number[]*

*Defined in [sprite.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L48)*

___

### `Protected` _current_animation_position

• **_current_animation_position**: *number*

*Defined in [sprite.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L49)*

___

### `Protected` _frames_per_line

• **_frames_per_line**: *number*

*Defined in [sprite.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L45)*

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

### `Protected` _image

• **_image**: *HTMLImageElement*

*Inherited from [Bitmap](game.bitmap.md).[_image](game.bitmap.md#protected-_image)*

*Defined in [bitmap.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L27)*

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

### `Protected` _source_x

• **_source_x**: *number*

*Inherited from [Bitmap](game.bitmap.md).[_source_x](game.bitmap.md#protected-_source_x)*

*Defined in [bitmap.ts:28](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L28)*

___

### `Protected` _source_y

• **_source_y**: *number*

*Inherited from [Bitmap](game.bitmap.md).[_source_y](game.bitmap.md#protected-_source_y)*

*Defined in [bitmap.ts:29](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L29)*

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

###  interval

• **interval**: *number*

*Defined in [sprite.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L42)*

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

###  image

• **get image**(): *HTMLImageElement*

*Inherited from [Bitmap](game.bitmap.md).[image](game.bitmap.md#image)*

*Defined in [bitmap.ts:72](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L72)*

**Returns:** *HTMLImageElement*

• **set image**(`newImage`: HTMLImageElement): *void*

*Inherited from [Bitmap](game.bitmap.md).[image](game.bitmap.md#image)*

*Defined in [bitmap.ts:78](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`newImage` | HTMLImageElement |

**Returns:** *void*

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

▸ **clone**(): *[Sprite](game.sprite.md)‹›*

*Overrides [Bitmap](game.bitmap.md).[clone](game.bitmap.md#clone)*

*Defined in [sprite.ts:187](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L187)*

**Returns:** *[Sprite](game.sprite.md)‹›*

A cloned sprite object.

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

*Inherited from [Element](game.element.md).[draw](game.element.md#draw)*

*Defined in [element.ts:135](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L135)*

Draws this element, and all of its _children.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | CanvasRenderingContext2D | Canvas context.  |

**Returns:** *void*

___

###  drawElement

▸ **drawElement**(`ctx`: any): *void*

*Inherited from [Bitmap](game.bitmap.md).[drawElement](game.bitmap.md#drawelement)*

*Overrides [Element](game.element.md).[drawElement](game.element.md#abstract-drawelement)*

*Defined in [bitmap.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | any |

**Returns:** *void*

___

###  getHeight

▸ **getHeight**(): *number*

*Inherited from [Element](game.element.md).[getHeight](game.element.md#getheight)*

*Defined in [element.ts:268](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L268)*

**Returns:** *number*

The element's height. Doesn't consider the rotation.

___

###  getVertices

▸ **getVertices**(): *object[][]*

*Inherited from [Element](game.element.md).[getVertices](game.element.md#getvertices)*

*Defined in [element.ts:480](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L480)*

Get the element vertices points. Assumes its a rectangle.

**Returns:** *object[][]*

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

▸ **intersect**(`refX`: number, `refY`: number): *any[]*

*Inherited from [Element](game.element.md).[intersect](game.element.md#intersect)*

*Defined in [element.ts:156](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L156)*

Check if the element is within the given x/y position.

**Parameters:**

Name | Type |
------ | ------ |
`refX` | number |
`refY` | number |

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

*Defined in [sprite.ts:171](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L171)*

Changes the current sprite frame, based on the interval set.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  mouseClickEvents

▸ **mouseClickEvents**(`x`: any, `y`: any, `event`: any): *boolean*

*Inherited from [Element](game.element.md).[mouseClickEvents](game.element.md#mouseclickevents)*

*Defined in [element.ts:191](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |
`y` | any |
`event` | any |

**Returns:** *boolean*

___

###  nextFrame

▸ **nextFrame**(): *void*

*Defined in [sprite.ts:153](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L153)*

Change to the next frame. If we're on the last frame then it changes to the first one (frame 0).

**Returns:** *void*

___

###  play

▸ **play**(`animationId`: string, `reset`: boolean): *boolean*

*Defined in [sprite.ts:105](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L105)*

Play a previously set animation.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`animationId` | string | - | The name of the animation. |
`reset` | boolean | false | When trying to play the current animation again, if we reset the animation (back to the first frame) or do nothing. |

**Returns:** *boolean*

If it was successful.

___

###  remove

▸ **remove**(): *void*

*Inherited from [Element](game.element.md).[remove](game.element.md#remove)*

*Defined in [element.ts:400](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L400)*

Mark this element to be removed.

**Returns:** *void*

___

###  removeAllEventListeners

▸ **removeAllEventListeners**(): *void*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[removeAllEventListeners](game.eventdispatcher.md#removealleventlisteners)*

*Defined in [event_dispatcher.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L89)*

Remove all the event listeners.

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

###  setFrame

▸ **setFrame**(`frame`: number): *void*

*Defined in [sprite.ts:88](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L88)*

Show a specific frame of the sprite.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`frame` | number | The position of the frame.  |

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

###  stop

▸ **stop**(): *void*

*Defined in [sprite.ts:144](https://github.com/noobiept/game_engine/blob/625c324/source/sprite.ts#L144)*

Stop the animation. Will keep the current frame displayed.

**Returns:** *void*

___

###  toAxisAligned

▸ **toAxisAligned**(): *object*

*Inherited from [Element](game.element.md).[toAxisAligned](game.element.md#toaxisaligned)*

*Defined in [element.ts:309](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L309)*

Calculates an axis-aligned rectangle from the rotated shape.

**Returns:** *object*

* **maxX**: *number* =  maxX

* **maxY**: *number* =  maxY

* **minX**: *number* =  minX

* **minY**: *number* =  minY

___

###  updateVertices

▸ **updateVertices**(`x`: number, `y`: number, `scaleX`: number, `scaleY`: number, `rotation`: number): *void*

*Inherited from [Element](game.element.md).[updateVertices](game.element.md#updatevertices)*

*Defined in [element.ts:453](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L453)*

Get the global vertices points of this element.
The arguments are the compound values from the parent containers.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`scaleX` | number |
`scaleY` | number |
`rotation` | number |

**Returns:** *void*
