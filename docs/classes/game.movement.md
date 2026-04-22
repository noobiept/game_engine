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

- **Movement**

## Index

### Constructors

- [constructor](game.movement.md#constructor)

### Properties

- [\_destination_x](game.movement.md#protected-_destination_x)
- [\_destination_y](game.movement.md#protected-_destination_y)
- [\_element](game.movement.md#protected-_element)
- [\_follow_target](game.movement.md#protected-_follow_target)
- [\_is_destination_x_diff_positive](game.movement.md#protected-_is_destination_x_diff_positive)
- [\_is_destination_y_diff_positive](game.movement.md#protected-_is_destination_y_diff_positive)
- [\_is_moving](game.movement.md#protected-_is_moving)
- [\_loop_path_position](game.movement.md#protected-_loop_path_position)
- [\_move_callback](game.movement.md#protected-_move_callback)
- [\_move_x](game.movement.md#protected-_move_x)
- [\_move_y](game.movement.md#protected-_move_y)
- [\_movement_state](game.movement.md#protected-_movement_state)
- [\_path](game.movement.md#protected-_path)
- [movement_speed](game.movement.md#movement_speed)

### Methods

- [follow](game.movement.md#follow)
- [logic](game.movement.md#logic)
- [moveAngle](game.movement.md#moveangle)
- [moveLoop](game.movement.md#moveloop)
- [moveTo](game.movement.md#moveto)
- [moveToNext](game.movement.md#movetonext)
- [movementAngleLogic](game.movement.md#protected-movementanglelogic)
- [movementFollowLogic](game.movement.md#protected-movementfollowlogic)
- [movementPathLogic](game.movement.md#protected-movementpathlogic)
- [queueMoveTo](game.movement.md#queuemoveto)
- [remove](game.movement.md#remove)
- [stop](game.movement.md#stop)

## Constructors

### constructor

\+ **new Movement**(`args`: [MovementArgs](../interfaces/game.movementargs.md)): _[Movement](game.movement.md)_

_Defined in [movement.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L70)_

**Parameters:**

| Name   | Type                                               |
| ------ | -------------------------------------------------- |
| `args` | [MovementArgs](../interfaces/game.movementargs.md) |

**Returns:** _[Movement](game.movement.md)_

## Properties

### `Protected` \_destination_x

• **\_destination_x**: _number_

_Defined in [movement.ts:64](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L64)_

---

### `Protected` \_destination_y

• **\_destination_y**: _number_

_Defined in [movement.ts:65](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L65)_

---

### `Protected` \_element

• **\_element**: _[Element](game.element.md)_

_Defined in [movement.ts:58](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L58)_

---

### `Protected` \_follow_target

• **\_follow_target**: _[Element](game.element.md)_

_Defined in [movement.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L70)_

---

### `Protected` \_is_destination_x_diff_positive

• **\_is_destination_x_diff_positive**: _boolean_

_Defined in [movement.ts:66](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L66)_

---

### `Protected` \_is_destination_y_diff_positive

• **\_is_destination_y_diff_positive**: _boolean_

_Defined in [movement.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L67)_

---

### `Protected` \_is_moving

• **\_is_moving**: _boolean_

_Defined in [movement.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L60)_

---

### `Protected` \_loop_path_position

• **\_loop_path_position**: _number_

_Defined in [movement.ts:69](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L69)_

---

### `Protected` \_move_callback

• **\_move_callback**: _function_

_Defined in [movement.ts:63](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L63)_

#### Type declaration:

▸ (): _any_

---

### `Protected` \_move_x

• **\_move_x**: _number_

_Defined in [movement.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L61)_

---

### `Protected` \_move_y

• **\_move_y**: _number_

_Defined in [movement.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L62)_

---

### `Protected` \_movement_state

• **\_movement_state**: _[MovementState](../enums/game.movementstate.md)_

_Defined in [movement.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L59)_

---

### `Protected` \_path

• **\_path**: _object[]_

_Defined in [movement.ts:68](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L68)_

---

### movement_speed

• **movement_speed**: _number_

_Defined in [movement.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L56)_

## Methods

### follow

▸ **follow**(`element`: [Element](game.element.md), `callback?`: function): _void_

_Defined in [movement.ts:263](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L263)_

Move constantly towards the element's position.

**`element`** The element to follow.

**`callback`** Called when the element that we're following is removed.

**Parameters:**

▪ **element**: _[Element](game.element.md)_

▪`Optional` **callback**: _function_

▸ (): _any_

**Returns:** _void_

---

### logic

▸ **logic**(`delta`: number): _void_

_Defined in [movement.ts:390](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L390)_

Its called in every update. This is going to be assigned to a different movement logic method, depending on the current movement type.

**Parameters:**

| Name    | Type   | Description                         |
| ------- | ------ | ----------------------------------- |
| `delta` | number | Time elapsed since the last update. |

**Returns:** _void_

---

### moveAngle

▸ **moveAngle**(`angle`: number, `degrees?`: boolean, `callback?`: function): _void_

_Defined in [movement.ts:237](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L237)_

Move continuously in a specific angle.

**`angle`** The angle of the direction. Positive clockwise.

**`degrees`** If the `angle` value is in degrees or radians.

**`callback`** To be called when it reaches the end of the canvas.

**Parameters:**

▪ **angle**: _number_

▪`Optional` **degrees**: _boolean_

▪`Optional` **callback**: _function_

▸ (): _any_

**Returns:** _void_

---

### moveLoop

▸ **moveLoop**(`path`: object[]): _void_

_Defined in [movement.ts:219](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L219)_

Move continuously between the positions in the path.

**Parameters:**

| Name   | Type     | Description               |
| ------ | -------- | ------------------------- |
| `path` | object[] | The path of the movement. |

**Returns:** _void_

---

### moveTo

▸ **moveTo**(`x`: number, `y`: number, `callback?`: function): _void_

_Defined in [movement.ts:95](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L95)_

Clears any previous path, and forces the element to move to the specified position.

**Parameters:**

▪ **x**: _number_

▪ **y**: _number_

▪`Optional` **callback**: _function_

▸ (): _any_

**Returns:** _void_

---

### moveToNext

▸ **moveToNext**(): _boolean_

_Defined in [movement.ts:118](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L118)_

Move to the next position in the path.

**Returns:** _boolean_

---

### `Protected` movementAngleLogic

▸ **movementAngleLogic**(`delta`: number): _void_

_Defined in [movement.ts:318](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L318)_

Deals with movement in a certain direction/angle.
Calls the function callback when it reaches the end of the canvas.

**Parameters:**

| Name    | Type   | Description                         |
| ------- | ------ | ----------------------------------- |
| `delta` | number | Time elapsed since the last update. |

**Returns:** _void_

---

### `Protected` movementFollowLogic

▸ **movementFollowLogic**(`delta`: number): _void_

_Defined in [movement.ts:275](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L275)_

Keep moving towards the target element's position.

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `delta` | number |

**Returns:** _void_

---

### `Protected` movementPathLogic

▸ **movementPathLogic**(`delta`: number): _void_

_Defined in [movement.ts:343](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L343)_

Deals with movement to a x/y position.
Calls the function callback when it reaches the destination.

**Parameters:**

| Name    | Type   | Description                         |
| ------- | ------ | ----------------------------------- |
| `delta` | number | Time elapsed since the last update. |

**Returns:** _void_

---

### queueMoveTo

▸ **queueMoveTo**(`x`: number, `y`: number, `callback?`: function): _void_

_Defined in [movement.ts:193](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L193)_

Add a x/y position to the movement queue.

**Parameters:**

▪ **x**: _number_

The x position.

▪ **y**: _number_

The y position.

▪`Optional` **callback**: _function_

Optional function to be called when it reaches this position.

▸ (): _any_

**Returns:** _void_

---

### remove

▸ **remove**(): _void_

_Defined in [movement.ts:399](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L399)_

Clear the movement object.

**Returns:** _void_

---

### stop

▸ **stop**(): _void_

_Defined in [movement.ts:176](https://github.com/noobiept/game_engine/blob/625c324/source/movement.ts#L176)_

Stop moving.

**Returns:** _void_
