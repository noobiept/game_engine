[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Movement

# Class: Movement

Defined in: [movement.ts:50](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L50)

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

Defined in: [movement.ts:65](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L65)

#### Parameters

##### args

[`MovementArgs`](../interfaces/MovementArgs.md)

#### Returns

`Movement`

## Properties

### \_destination\_x

> `protected` **\_destination\_x**: `number`

Defined in: [movement.ts:59](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L59)

---

### \_destination\_y

> `protected` **\_destination\_y**: `number`

Defined in: [movement.ts:60](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L60)

---

### \_element

> `protected` **\_element**: [`Element`](Element.md) \| `null`

Defined in: [movement.ts:53](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L53)

---

### \_follow\_target

> `protected` **\_follow\_target**: [`Element`](Element.md) \| `null`

Defined in: [movement.ts:63](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L63)

---

### \_is\_moving

> `protected` **\_is\_moving**: `boolean`

Defined in: [movement.ts:55](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L55)

---

### \_loop\_path\_position

> `protected` **\_loop\_path\_position**: `number`

Defined in: [movement.ts:62](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L62)

---

### \_move\_callback

> `protected` **\_move\_callback**: (() => `any`) \| `null`

Defined in: [movement.ts:58](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L58)

---

### \_move\_x

> `protected` **\_move\_x**: `number`

Defined in: [movement.ts:56](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L56)

---

### \_move\_y

> `protected` **\_move\_y**: `number`

Defined in: [movement.ts:57](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L57)

---

### \_movement\_state

> `protected` **\_movement\_state**: [`MovementState`](../enumerations/MovementState.md)

Defined in: [movement.ts:54](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L54)

---

### \_path

> `protected` **\_path**: `object`[]

Defined in: [movement.ts:61](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L61)

#### callback

> **callback**: (() => `any`) \| `null`

#### x

> **x**: `number`

#### y

> **y**: `number`

---

### movementSpeed

> **movementSpeed**: `number`

Defined in: [movement.ts:51](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L51)

## Methods

### \_moveTowards()

> `protected` **\_moveTowards**(`element`, `x`, `y`, `distance`): `boolean`

Defined in: [movement.ts:337](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L337)

Move the element a distance towards a position (the direction is calculated every time, so it doesn't drift away).

#### Parameters

##### element

[`Element`](Element.md)

##### x

`number`

##### y

`number`

##### distance

`number`

#### Returns

`boolean`

If it reached the position (it's placed exactly on it, instead of going past it).

---

### destroy()

> **destroy**(): `void`

Defined in: [movement.ts:372](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L372)

Destroy the movement object (it stops, and lets go of the element).

#### Returns

`void`

---

### follow()

> **follow**(`element`, `callback?`): `void`

Defined in: [movement.ts:227](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L227)

Move constantly towards the element's position.

#### Parameters

##### element

[`Element`](Element.md)

The element to follow.

##### callback?

() => `any`

Called when the element that we're following is destroyed.

#### Returns

`void`

---

### logic()

> **logic**(`_delta`): `void`

Defined in: [movement.ts:365](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L365)

Its called in every update. This is going to be assigned to a different movement logic method, depending on the current movement type.

#### Parameters

##### \_delta

`number`

#### Returns

`void`

---

### moveAngle()

> **moveAngle**(`angle`, `degrees?`, `callback?`): `void`

Defined in: [movement.ts:202](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L202)

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

Defined in: [movement.ts:180](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L180)

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

Defined in: [movement.ts:282](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L282)

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

Defined in: [movement.ts:237](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L237)

Keep moving towards the target element's position.

#### Parameters

##### delta

`number`

#### Returns

`void`

---

### movementPathLogic()

> `protected` **movementPathLogic**(`delta`): `void`

Defined in: [movement.ts:306](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L306)

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

Defined in: [movement.ts:83](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L83)

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

Defined in: [movement.ts:105](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L105)

Move to the next position in the path.

#### Returns

`boolean`

---

### queueMoveTo()

> **queueMoveTo**(`x`, `y`, `callback?`): `void`

Defined in: [movement.ts:156](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L156)

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

### stop()

> **stop**(): `void`

Defined in: [movement.ts:141](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/movement.ts#L141)

Stop moving.

#### Returns

`void`
