[Game Engine](../README.md) › [Game](game.md)

# Module: Game

Basic usage:

    Game.init( document.body, 400, 400 );

    var rect = new Game.Rectangle({
            x: 200,
            y: 200,
            width: 20,
            height: 20,
            color: 'green'
        });
    Game.addElement( rect );

    Game.addToGameLoop( function()
        {
        console.log( 'hi' );
        }, 1 );

## Index

### Modules

* [CollisionDetection](game.collisiondetection.md)
* [HighScore](game.highscore.md)
* [Html](game.html.md)
* [PathFinding](game.pathfinding.md)
* [ScrollingBitmapArgs](game.scrollingbitmapargs.md)
* [Sound](game.sound.md)
* [Utilities](game.utilities.md)
* [Vector](game.vector.md)

### Enumerations

* [MovementState](../enums/game.movementstate.md)
* [TweenAction](../enums/game.tweenaction.md)

### Classes

* [Bitmap](../classes/game.bitmap.md)
* [Bullet](../classes/game.bullet.md)
* [Canvas](../classes/game.canvas.md)
* [Circle](../classes/game.circle.md)
* [Container](../classes/game.container.md)
* [Element](../classes/game.element.md)
* [ElementGrid](../classes/game.elementgrid.md)
* [EventDispatcher](../classes/game.eventdispatcher.md)
* [Grid](../classes/game.grid.md)
* [Message](../classes/game.message.md)
* [Movement](../classes/game.movement.md)
* [Preload](../classes/game.preload.md)
* [Rectangle](../classes/game.rectangle.md)
* [ScrollingBitmap](../classes/game.scrollingbitmap.md)
* [Sprite](../classes/game.sprite.md)
* [Text](../classes/game.text.md)
* [Tween](../classes/game.tween.md)
* [Weapon](../classes/game.weapon.md)

### Interfaces

* [BitmapArgs](../interfaces/game.bitmapargs.md)
* [BulletArgs](../interfaces/game.bulletargs.md)
* [Callback](../interfaces/game.callback.md)
* [CanvasArgs](../interfaces/game.canvasargs.md)
* [CircleArgs](../interfaces/game.circleargs.md)
* [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)
* [ContainerArgs](../interfaces/game.containerargs.md)
* [ElementArgs](../interfaces/game.elementargs.md)
* [ElementGridArgs](../interfaces/game.elementgridargs.md)
* [EventDispatcherArgs](../interfaces/game.eventdispatcherargs.md)
* [GridArgs](../interfaces/game.gridargs.md)
* [MessageArgs](../interfaces/game.messageargs.md)
* [MovementArgs](../interfaces/game.movementargs.md)
* [PreloadArgs](../interfaces/game.preloadargs.md)
* [RectangleArgs](../interfaces/game.rectangleargs.md)
* [SpriteArgs](../interfaces/game.spriteargs.md)
* [TextArgs](../interfaces/game.textargs.md)
* [TweenStep](../interfaces/game.tweenstep.md)
* [WeaponArgs](../interfaces/game.weaponargs.md)

### Variables

* [ALL_CANVAS](game.md#all_canvas)
* [ANIMATION_ID](game.md#animation_id)
* [CALLBACKS](game.md#callbacks)
* [CANVAS_CONTAINER](game.md#canvas_container)
* [ELEMENTS_UNDER_MOUSE](game.md#elements_under_mouse)
* [FRAME_INTERVAL](game.md#frame_interval)
* [MOUSE_MOVED](game.md#mouse_moved)
* [MOUSE_MOVE_ID](game.md#mouse_move_id)
* [MOUSE_X](game.md#mouse_x)
* [MOUSE_Y](game.md#mouse_y)
* [PREVIOUS_TIME](game.md#previous_time)
* [STOP_LOOP](game.md#stop_loop)
* [TO_BE_REMOVED](game.md#to_be_removed)

### Functions

* [_safeRemove](game.md#_saferemove)
* [activateMouseMoveEvents](game.md#activatemousemoveevents)
* [addCanvas](game.md#addcanvas)
* [addElement](game.md#addelement)
* [addToGameLoop](game.md#addtogameloop)
* [callbacks](game.md#callbacks)
* [clickEvents](game.md#clickevents)
* [disableMouseMoveEvents](game.md#disablemousemoveevents)
* [getCanvas](game.md#getcanvas)
* [getCanvasContainer](game.md#getcanvascontainer)
* [getMousePosition](game.md#getmouseposition)
* [init](game.md#init)
* [loop](game.md#loop)
* [mouseMoveEvents](game.md#mousemoveevents)
* [removeAllCallbacks](game.md#removeallcallbacks)
* [removeElement](game.md#removeelement)
* [removeFromGameLoop](game.md#removefromgameloop)
* [setFps](game.md#setfps)
* [startGameLoop](game.md#startgameloop)
* [stopGameLoop](game.md#stopgameloop)
* [updateMousePosition](game.md#updatemouseposition)

## Variables

###  ALL_CANVAS

• **ALL_CANVAS**: *[Canvas](../classes/game.canvas.md)[]* =  []

*Defined in [game.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L39)*

___

###  ANIMATION_ID

• **ANIMATION_ID**: *number*

*Defined in [game.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L44)*

___

###  CALLBACKS

• **CALLBACKS**: *[Callback](../interfaces/game.callback.md)[]* =  []

*Defined in [game.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L54)*

___

###  CANVAS_CONTAINER

• **CANVAS_CONTAINER**: *HTMLDivElement*

*Defined in [game.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L40)*

___

###  ELEMENTS_UNDER_MOUSE

• **ELEMENTS_UNDER_MOUSE**: *[Element](../classes/game.element.md)[]* =  []

*Defined in [game.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L49)*

___

###  FRAME_INTERVAL

• **FRAME_INTERVAL**: *number*

*Defined in [game.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L42)*

___

###  MOUSE_MOVED

• **MOUSE_MOVED**: *boolean* = false

*Defined in [game.ts:52](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L52)*

___

###  MOUSE_MOVE_ID

• **MOUSE_MOVE_ID**: *number*

*Defined in [game.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L48)*

___

###  MOUSE_X

• **MOUSE_X**: *number* =  -1

*Defined in [game.ts:50](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L50)*

___

###  MOUSE_Y

• **MOUSE_Y**: *number* =  -1

*Defined in [game.ts:51](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L51)*

___

###  PREVIOUS_TIME

• **PREVIOUS_TIME**: *number*

*Defined in [game.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L43)*

___

###  STOP_LOOP

• **STOP_LOOP**: *boolean* = false

*Defined in [game.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L45)*

___

###  TO_BE_REMOVED

• **TO_BE_REMOVED**: *[Element](../classes/game.element.md)[]* =  []

*Defined in [game.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L56)*

## Functions

###  _safeRemove

▸ **_safeRemove**(`element`: [Element](../classes/game.element.md)): *void*

*Defined in [game.ts:280](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L280)*

It can be problematic to remove elements during the logic functions, since the logic functions are called in a loop over all the elements.
The elements passed to this function, will only be removed after.
Don't call this directly, use the `Element.remove()` method instead.

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/game.element.md) |

**Returns:** *void*

___

###  activateMouseMoveEvents

▸ **activateMouseMoveEvents**(`interval`: number): *void*

*Defined in [game.ts:134](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L134)*

Activate the mouse move events: `mouseout` and `mouseover`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`interval` | number | Interval (in milliseconds) between calls of the function that checks for these events.  |

**Returns:** *void*

___

###  addCanvas

▸ **addCanvas**(`canvas`: [Canvas](../classes/game.canvas.md), `position?`: number): *number*

*Defined in [game.ts:193](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L193)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`canvas` | [Canvas](../classes/game.canvas.md) | The canvas to be added. |
`position?` | number | The desired position of the canvas. The canvas are stacked on the same space. The 0 position, is the one in the back, and the higher the value, the most on top. Keep in mind that the position may not be the same as the returned id. If not provided, then the canvas is added on top (last position). |

**Returns:** *number*

The id of the canvas. Can be used to retrieve the canvas later on with Game.getCanvas(). The id can be invalidated if there's new canvas added in a specific position.

___

###  addElement

▸ **addElement**(`element`: [Element](../classes/game.element.md) | [Element](../classes/game.element.md)[], `id?`: number): *void*

*Defined in [game.ts:240](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L240)*

Adds an element to a canvas. If 'id' is not given, then its added to the first canvas (the one most to the back).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [Element](../classes/game.element.md) &#124; [Element](../classes/game.element.md)[] | Element or Element[] to be added. |
`id?` | number | The canvas id.  |

**Returns:** *void*

___

###  addToGameLoop

▸ **addToGameLoop**(`callback`: function, `delay`: number, `isInterval?`: boolean): *boolean*

*Defined in [game.ts:296](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L296)*

Adds a callback function to be called at a certain timeout/interval (or every tick) in the game loop (before the draw phase).

Sometimes its useful to add a function call through this, for example when you have code that may remove elements, but its called from an event handler (which may try to process the elements that you removed).

**Parameters:**

▪ **callback**: *function*

The callback function.

▸ (): *any*

▪ **delay**: *number*

Time until the function is called. In seconds.

▪`Optional`  **isInterval**: *boolean*

If the function is to be called constantly (every passed `delay`), or just one time (a timeout). Default is an interval.

**Returns:** *boolean*

If it was added successfully.

___

###  callbacks

▸ **callbacks**(`deltaTime`: number): *void*

*Defined in [game.ts:543](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L543)*

Deal with the callbacks added to the game loop.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  clickEvents

▸ **clickEvents**(`event`: MouseEvent): *void*

*Defined in [game.ts:358](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L358)*

When a mouse event is fired on the canvas, this is called, which will pass it to the canvas objects to check if there's any element that has listeners to it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event fired.  |

**Returns:** *void*

___

###  disableMouseMoveEvents

▸ **disableMouseMoveEvents**(): *void*

*Defined in [game.ts:147](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L147)*

Disable the mouse move events: `mouseout` and `mouseover`.

**Returns:** *void*

___

###  getCanvas

▸ **getCanvas**(`id?`: number): *[Canvas](../classes/game.canvas.md)‹›*

*Defined in [game.ts:177](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L177)*

Get a canvas object (Game.Canvas). When called without an argument it returns the first one.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id?` | number | Id of the canvas, returns the first one (id 0) by default.  |

**Returns:** *[Canvas](../classes/game.canvas.md)‹›*

___

###  getCanvasContainer

▸ **getCanvasContainer**(): *HTMLDivElement*

*Defined in [game.ts:587](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L587)*

**Returns:** *HTMLDivElement*

The canvas container (an html element).

___

###  getMousePosition

▸ **getMousePosition**(): *object*

*Defined in [game.ts:596](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L596)*

Return the current mouse position (in the client area, not the canvas).

**Returns:** *object*

* **x**: *number* =  MOUSE_X

* **y**: *number* =  MOUSE_Y

___

###  init

▸ **init**(`htmlContainer`: HTMLElement, `canvasWidth`: number, `canvasHeight`: number, `collision?`: [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)): *void*

*Defined in [game.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L67)*

Initialize the canvas/game loop/etc.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`htmlContainer` | HTMLElement | The canvas is going to be appended to this element. |
`canvasWidth` | number | Canvas width. |
`canvasHeight` | number | Canvas height. |
`collision?` | [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md) | Collision detection algorithm object. Default is the 'CheckAll' algorithm.  |

**Returns:** *void*

___

###  loop

▸ **loop**(): *void*

*Defined in [game.ts:463](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L463)*

The game loop.
Updates the game logic, drawn of the canvas, tween update, etc.

**Returns:** *void*

___

###  mouseMoveEvents

▸ **mouseMoveEvents**(): *void*

*Defined in [game.ts:375](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L375)*

Deal with the mouse move events: `mouseout`, `mouseover` and `mousemove`.

**Returns:** *void*

___

###  removeAllCallbacks

▸ **removeAllCallbacks**(): *void*

*Defined in [game.ts:347](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L347)*

Remove all the callbacks from the game loop.

**Returns:** *void*

___

###  removeElement

▸ **removeElement**(`element`: [Element](../classes/game.element.md) | [Element](../classes/game.element.md)[]): *boolean*

*Defined in [game.ts:257](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L257)*

For when you don't know in what canvas the element is in. It will try in all the canvas.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [Element](../classes/game.element.md) &#124; [Element](../classes/game.element.md)[] | Element or Element[] to be removed. |

**Returns:** *boolean*

If the element was removed.

___

###  removeFromGameLoop

▸ **removeFromGameLoop**(`callback`: function): *boolean*

*Defined in [game.ts:327](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L327)*

Remove a callback from the game loop.

**Parameters:**

▪ **callback**: *function*

The function to remove.

▸ (): *any*

**Returns:** *boolean*

If the function was removed or wasn't found.

___

###  setFps

▸ **setFps**(`fps`: number): *void*

*Defined in [game.ts:157](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L157)*

Specify the frames per second that the engine will try to run at.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  startGameLoop

▸ **startGameLoop**(): *void*

*Defined in [game.ts:109](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L109)*

Starts the game loop. This is called automatically when you initialize the engine (Game.init()).
Only useful when you manually stop the loop (with Game.stopGameLoop()) and need to restart it later.

**Returns:** *void*

___

###  stopGameLoop

▸ **stopGameLoop**(): *void*

*Defined in [game.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L121)*

Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).

**Returns:** *void*

___

###  updateMousePosition

▸ **updateMousePosition**(`event`: any): *void*

*Defined in [game.ts:163](https://github.com/noobiept/game_engine/blob/625c324/source/game.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *void*
