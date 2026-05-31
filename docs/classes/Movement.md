[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Movement

# Class: Movement

Defined in: [source/movement.ts:50](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L50)

Basic Usage:

    class Unit extends Game.Rectangle
        {
        constructor( args )
            {
            super( args );

            this._has_logic = true;
            this.movement = new Game.Movement({
                    element: this,
                    movementSpeed: 100
                });
            }
        logic( deltaTime )
            {
            this.movement.logic( deltaTime );
            }
        }

    const unit = new Unit({
            width: 10,
            height: 10,
            color: 'red'
        });
    Game.addElement( unit );

    unit.movement.moveAngle( Math.PI / 4 );

Examples -- `basic_example`, `bullets`, `collision_detection`, `collision_spatial_partition`, `tower_defense`

## Constructors

### Constructor

> **new Movement**(`args`): `Movement`

Defined in: [source/movement.ts:67](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L67)

#### Parameters

##### args

[`MovementArgs`](../interfaces/MovementArgs.md)

#### Returns

`Movement`

## Properties

### \_destination_x

> `protected` **\_destination_x**: `number`

Defined in: [source/movement.ts:59](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L59)

---

### \_destination_y

> `protected` **\_destination_y**: `number`

Defined in: [source/movement.ts:60](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L60)

---

### \_element

> `protected` **\_element**: [`Element`](Element.md) \| `null`

Defined in: [source/movement.ts:53](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L53)

---

### \_follow_target

> `protected` **\_follow_target**: [`Element`](Element.md) \| `null`

Defined in: [source/movement.ts:65](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L65)

---

### \_is_destination_x_diff_positive

> `protected` **\_is_destination_x_diff_positive**: `boolean`

Defined in: [source/movement.ts:61](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L61)

---

### \_is_destination_y_diff_positive

> `protected` **\_is_destination_y_diff_positive**: `boolean`

Defined in: [source/movement.ts:62](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L62)

---

### \_is_moving

> `protected` **\_is_moving**: `boolean`

Defined in: [source/movement.ts:55](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L55)

---

### \_loop_path_position

> `protected` **\_loop_path_position**: `number`

Defined in: [source/movement.ts:64](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L64)

---

### \_move_callback

> `protected` **\_move_callback**: (() => `any`) \| `null`

Defined in: [source/movement.ts:58](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L58)

---

### \_move_x

> `protected` **\_move_x**: `number`

Defined in: [source/movement.ts:56](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L56)

---

### \_move_y

> `protected` **\_move_y**: `number`

Defined in: [source/movement.ts:57](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L57)

---

### \_movement_state

> `protected` **\_movement_state**: [`MovementState`](../enumerations/MovementState.md)

Defined in: [source/movement.ts:54](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L54)

---

### \_path

> `protected` **\_path**: `object`[]

Defined in: [source/movement.ts:63](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L63)

#### callback

> **callback**: (() => `any`) \| `null`

#### x

> **x**: `number`

#### y

> **y**: `number`

---

### movementSpeed

> **movementSpeed**: `number`

Defined in: [source/movement.ts:51](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L51)

## Methods

### follow()

> **follow**(`element`, `callback?`): `void`

Defined in: [source/movement.ts:251](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L251)

Move constantly towards the element's position.

#### Parameters

##### element

[`Element`](Element.md)

The element to follow.

##### callback?

() => `any`

Called when the element that we're following is removed.

#### Returns

`void`

---

### logic()

> **logic**(`_delta`): `void`

Defined in: [source/movement.ts:375](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L375)

Its called in every update. This is going to be assigned to a different movement logic method, depending on the current movement type.

#### Parameters

##### \_delta

`number`

#### Returns

`void`

---

### moveAngle()

> **moveAngle**(`angle`, `degrees?`, `callback?`): `void`

Defined in: [source/movement.ts:226](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L226)

Move continuously in a specific angle.

#### Parameters

##### angle

`number`

The angle of the direction. Positive clockwise.

##### degrees?

`boolean`

If the `angle` value is in degrees or radians.

##### callback?

() => `any`

To be called when it reaches the end of the canvas.

#### Returns

`void`

---

### moveLoop()

> **moveLoop**(`path`): `void`

Defined in: [source/movement.ts:204](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L204)

Move continuously between the positions in the path.

#### Parameters

##### path

`object`[]

The path of the movement.

#### Returns

`void`

---

### movementAngleLogic()

> `protected` **movementAngleLogic**(`delta`): `void`

Defined in: [source/movement.ts:307](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L307)

Deals with movement in a certain direction/angle.
Calls the function callback when it reaches the end of the canvas.

#### Parameters

##### delta

`number`

Time elapsed since the last update.

#### Returns

`void`

---

### movementFollowLogic()

> `protected` **movementFollowLogic**(`delta`): `void`

Defined in: [source/movement.ts:261](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L261)

Keep moving towards the target element's position.

#### Parameters

##### delta

`number`

#### Returns

`void`

---

### movementPathLogic()

> `protected` **movementPathLogic**(`delta`): `void`

Defined in: [source/movement.ts:331](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L331)

Deals with movement to a x/y position.
Calls the function callback when it reaches the destination.

#### Parameters

##### delta

`number`

Time elapsed since the last update.

#### Returns

`void`

---

### moveTo()

> **moveTo**(`x`, `y`, `callback?`): `void`

Defined in: [source/movement.ts:87](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L87)

Clears any previous path, and forces the element to move to the specified position.

#### Parameters

##### x

`number`

##### y

`number`

##### callback?

() => `any`

#### Returns

`void`

---

### moveToNext()

> **moveToNext**(): `boolean`

Defined in: [source/movement.ts:109](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L109)

Move to the next position in the path.

#### Returns

`boolean`

---

### queueMoveTo()

> **queueMoveTo**(`x`, `y`, `callback?`): `void`

Defined in: [source/movement.ts:180](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L180)

Add a x/y position to the movement queue.

#### Parameters

##### x

`number`

The x position.

##### y

`number`

The y position.

##### callback?

() => `any`

Optional function to be called when it reaches this position.

#### Returns

`void`

---

### remove()

> **remove**(): `void`

Defined in: [source/movement.ts:382](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L382)

Clear the movement object.

#### Returns

`void`

---

### stop()

> **stop**(): `void`

Defined in: [source/movement.ts:165](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/movement.ts#L165)

Stop moving.

#### Returns

`void`
