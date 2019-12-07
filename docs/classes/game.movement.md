[Game Engine](../README.md) › [Game](../modules/game.md) › [Movement](game.movement.md)

# Class: Movement

Basic Usage:

    function Unit( args )
        {
        Game.Rectangle.call( this, args );

        this._has_logic = true;
        this.movement = new Game.Movement({
                element: this,
                movementSpeed: 100
            });
        }

    Game.Utilities.inheritPrototype( Unit, Game.Rectangle );

    Unit.prototype.logic = function( deltaTime )
        {
        this.movement.logic( deltaTime );
        }

    var unit = new Unit({
            width: 10,
            height: 10,
            color: 'red'
        });
    Game.addElement( unit );

    unit.movement.moveAngle( Math.PI / 4 );

Examples -- `basic_example`, `bullets`, `collision_detection`, `collision_spatial_partition`, `tower_defense`

## Hierarchy

* **Movement**

## Index

### Constructors

* [constructor](game.movement.md#constructor)

### Properties

* [_destination_x](game.movement.md#protected-_destination_x)
* [_destination_y](game.movement.md#protected-_destination_y)
* [_element](game.movement.md#protected-_element)
* [_follow_target](game.movement.md#protected-_follow_target)
* [_is_destination_x_diff_positive](game.movement.md#protected-_is_destination_x_diff_positive)
* [_is_destination_y_diff_positive](game.movement.md#protected-_is_destination_y_diff_positive)
* [_is_moving](game.movement.md#protected-_is_moving)
* [_loop_path_position](game.movement.md#protected-_loop_path_position)
* [_move_callback](game.movement.md#protected-_move_callback)
* [_move_x](game.movement.md#protected-_move_x)
* [_move_y](game.movement.md#protected-_move_y)
* [_movement_state](game.movement.md#protected-_movement_state)
* [_path](game.movement.md#protected-_path)
* [movement_speed](game.movement.md#movement_speed)

### Methods

* [follow](game.movement.md#follow)
* [logic](game.movement.md#logic)
* [moveAngle](game.movement.md#moveangle)
* [moveLoop](game.movement.md#moveloop)
* [moveTo](game.movement.md#moveto)
* [moveToNext](game.movement.md#movetonext)
* [movementAngleLogic](game.movement.md#protected-movementanglelogic)
* [movementFollowLogic](game.movement.md#protected-movementfollowlogic)
* [movementPathLogic](game.movement.md#protected-movementpathlogic)
* [queueMoveTo](game.movement.md#queuemoveto)
* [remove](game.movement.md#remove)
* [stop](game.movement.md#stop)

## Constructors

###  constructor

\+ **new Movement**(`args`: [MovementArgs](../interfaces/game.movementargs.md)): *[Movement](game.movement.md)*

*Defined in [movement.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [MovementArgs](../interfaces/game.movementargs.md) |

**Returns:** *[Movement](game.movement.md)*

## Properties

### `Protected` _destination_x

• **_destination_x**: *number*

*Defined in [movement.ts:64](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L64)*

___

### `Protected` _destination_y

• **_destination_y**: *number*

*Defined in [movement.ts:65](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L65)*

___

### `Protected` _element

• **_element**: *[Element](game.element.md)*

*Defined in [movement.ts:58](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L58)*

___

### `Protected` _follow_target

• **_follow_target**: *[Element](game.element.md)*

*Defined in [movement.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L70)*

___

### `Protected` _is_destination_x_diff_positive

• **_is_destination_x_diff_positive**: *boolean*

*Defined in [movement.ts:66](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L66)*

___

### `Protected` _is_destination_y_diff_positive

• **_is_destination_y_diff_positive**: *boolean*

*Defined in [movement.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L67)*

___

### `Protected` _is_moving

• **_is_moving**: *boolean*

*Defined in [movement.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L60)*

___

### `Protected` _loop_path_position

• **_loop_path_position**: *number*

*Defined in [movement.ts:69](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L69)*

___

### `Protected` _move_callback

• **_move_callback**: *function*

*Defined in [movement.ts:63](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L63)*

#### Type declaration:

▸ (): *any*

___

### `Protected` _move_x

• **_move_x**: *number*

*Defined in [movement.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L61)*

___

### `Protected` _move_y

• **_move_y**: *number*

*Defined in [movement.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L62)*

___

### `Protected` _movement_state

• **_movement_state**: *[MovementState](../enums/game.movementstate.md)*

*Defined in [movement.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L59)*

___

### `Protected` _path

• **_path**: *object[]*

*Defined in [movement.ts:68](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L68)*

___

###  movement_speed

• **movement_speed**: *number*

*Defined in [movement.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L56)*

## Methods

###  follow

▸ **follow**(`element`: [Element](game.element.md), `callback?`: function): *void*

*Defined in [movement.ts:263](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L263)*

Move constantly towards the element's position.

**`element`** The element to follow.

**`callback`** Called when the element that we're following is removed.

**Parameters:**

▪ **element**: *[Element](game.element.md)*

▪`Optional`  **callback**: *function*

▸ (): *any*

**Returns:** *void*

___

###  logic

▸ **logic**(`delta`: number): *void*

*Defined in [movement.ts:390](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L390)*

Its called in every update. This is going to be assigned to a different movement logic method, depending on the current movement type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`delta` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  moveAngle

▸ **moveAngle**(`angle`: number, `degrees?`: boolean, `callback?`: function): *void*

*Defined in [movement.ts:237](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L237)*

Move continuously in a specific angle.

**`angle`** The angle of the direction. Positive clockwise.

**`degrees`** If the `angle` value is in degrees or radians.

**`callback`** To be called when it reaches the end of the canvas.

**Parameters:**

▪ **angle**: *number*

▪`Optional`  **degrees**: *boolean*

▪`Optional`  **callback**: *function*

▸ (): *any*

**Returns:** *void*

___

###  moveLoop

▸ **moveLoop**(`path`: object[]): *void*

*Defined in [movement.ts:219](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L219)*

Move continuously between the positions in the path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | object[] | The path of the movement.  |

**Returns:** *void*

___

###  moveTo

▸ **moveTo**(`x`: number, `y`: number, `callback?`: function): *void*

*Defined in [movement.ts:95](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L95)*

Clears any previous path, and forces the element to move to the specified position.

**Parameters:**

▪ **x**: *number*

▪ **y**: *number*

▪`Optional`  **callback**: *function*

▸ (): *any*

**Returns:** *void*

___

###  moveToNext

▸ **moveToNext**(): *boolean*

*Defined in [movement.ts:118](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L118)*

Move to the next position in the path.

**Returns:** *boolean*

___

### `Protected` movementAngleLogic

▸ **movementAngleLogic**(`delta`: number): *void*

*Defined in [movement.ts:318](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L318)*

Deals with movement in a certain direction/angle.
Calls the function callback when it reaches the end of the canvas.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`delta` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

### `Protected` movementFollowLogic

▸ **movementFollowLogic**(`delta`: number): *void*

*Defined in [movement.ts:275](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L275)*

Keep moving towards the target element's position.

**Parameters:**

Name | Type |
------ | ------ |
`delta` | number |

**Returns:** *void*

___

### `Protected` movementPathLogic

▸ **movementPathLogic**(`delta`: number): *void*

*Defined in [movement.ts:343](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L343)*

Deals with movement to a x/y position.
Calls the function callback when it reaches the destination.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`delta` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  queueMoveTo

▸ **queueMoveTo**(`x`: number, `y`: number, `callback?`: function): *void*

*Defined in [movement.ts:193](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L193)*

Add a x/y position to the movement queue.

**Parameters:**

▪ **x**: *number*

The x position.

▪ **y**: *number*

The y position.

▪`Optional`  **callback**: *function*

Optional function to be called when it reaches this position.

▸ (): *any*

**Returns:** *void*

___

###  remove

▸ **remove**(): *void*

*Defined in [movement.ts:399](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L399)*

Clear the movement object.

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [movement.ts:176](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L176)*

Stop moving.

**Returns:** *void*
