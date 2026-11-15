[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / SpatialPartition

# Class: SpatialPartition

Defined in: [collision-detection/collision\_spatial\_partition.ts:44](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L44)

Useful when there's lots of elements in the game.
Need to make sure no element is bigger than the size of a partition.

The canvas is divided in a grid of `partitions` x `partitions` cells, and each element is placed in the cell of its center position,
so an element only needs to be compared with the elements in the same and neighbor cells.
Elements whose center is outside the canvas (by more than a partition) aren't considered.

Basic Usage:

    const width = 400;
    const height = 400;

    const collision = new Game.CollisionDetection.SpatialPartition({
            canvasWidth: width,
            canvasHeight: height,
            partitions: 10
        });
    Game.init({ container: document.body, width, height, collision });

Examples -- `collision_spatial_partition`

## Implements

- [`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md)

## Constructors

### Constructor

> **new SpatialPartition**(`args`): `SpatialPartition`

Defined in: [collision-detection/collision\_spatial\_partition.ts:56](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L56)

Throws if `partitions` isn't a positive integer, or the canvas dimensions aren't positive numbers.

#### Parameters

##### args

[`SpatialPartitionArgs`](../interfaces/SpatialPartitionArgs.md)

#### Returns

`SpatialPartition`

## Properties

### \_checking

> `protected` **\_checking**: `boolean`

Defined in: [collision-detection/collision\_spatial\_partition.ts:50](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L50)

---

### \_elements

> `protected` **\_elements**: `Set`\<[`Element`](Element.md)\>

Defined in: [collision-detection/collision\_spatial\_partition.ts:49](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L49)

---

### \_grid

> **\_grid**: ([`Element`](Element.md) \| `null`)[][]

Defined in: [collision-detection/collision\_spatial\_partition.ts:45](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L45)

---

### \_grid\_size

> **\_grid\_size**: `number`

Defined in: [collision-detection/collision\_spatial\_partition.ts:46](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L46)

---

### \_partition\_height

> **\_partition\_height**: `number`

Defined in: [collision-detection/collision\_spatial\_partition.ts:48](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L48)

---

### \_partition\_width

> **\_partition\_width**: `number`

Defined in: [collision-detection/collision\_spatial\_partition.ts:47](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L47)

---

### \_pending

> `protected` **\_pending**: `Set`\<[`Element`](Element.md)\>

Defined in: [collision-detection/collision\_spatial\_partition.ts:51](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L51)

## Methods

### \_canCollide()

> `protected` **\_canCollide**(`element`): `any`

Defined in: [collision-detection/collision\_spatial\_partition.ts:287](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L287)

If the element is still part of the collision detection (it may have been removed by a collision listener).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`any`

---

### \_getCell()

> `protected` **\_getCell**(`element`): \{ `column`: `number`; `line`: `number`; \} \| `null`

Defined in: [collision-detection/collision\_spatial\_partition.ts:334](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L334)

The cell of the element's center position.
An element whose center is just outside the canvas (in the ring of cells around the grid) can still overlap elements inside,
so its put in the closest cell of the grid.

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

\{ `column`: `number`; `line`: `number`; \} \| `null`

The cell, or `null` when it's too far outside the canvas (or isn't a valid position, like `NaN`).

---

### \_getData()

> `protected` **\_getData**(`element`): `PartitionData` \| `null`

Defined in: [collision-detection/collision\_spatial\_partition.ts:274](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L274)

The element's data, if it was created by this object.

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`PartitionData` \| `null`

---

### \_link()

> `protected` **\_link**(`element`, `data`, `column`, `line`): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:353](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L353)

Add the element to the start of a cell's linked list.

#### Parameters

##### element

[`Element`](Element.md)

##### data

`PartitionData`

##### column

`number`

##### line

`number`

#### Returns

`void`

---

### \_sync()

> `protected` **\_sync**(`element`, `data`): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:298](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L298)

Put the element in the cell of its current position, or take it out of the grid (when it's no longer registered, or is outside the canvas).

#### Parameters

##### element

[`Element`](Element.md)

##### data

`PartitionData`

#### Returns

`void`

---

### \_unlink()

> `protected` **\_unlink**(`element`, `data`): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:376](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L376)

Take the element out of its cell's linked list (if it's in one).

#### Parameters

##### element

[`Element`](Element.md)

##### data

`PartitionData`

#### Returns

`void`

---

### add()

> **add**(`element`): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:93](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L93)

Add an element to a partition in the grid, based on its current x/y position.

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`add`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#add)

---

### checkCollision()

> **checkCollision**(): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:139](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L139)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`checkCollision`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#checkcollision)

---

### checkElement()

> **checkElement**(`element`, `other`): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:208](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L208)

#### Parameters

##### element

[`Element`](Element.md)

The element to be compared with.

##### other

[`Element`](Element.md) \| `null`

First element of the partition linked list.

#### Returns

`void`

---

### clear()

> **clear**(): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:250](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L250)

Remove all the elements (the object can still be used).

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`clear`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#clear)

---

### remove()

> **remove**(`element`): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:127](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L127)

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`remove`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#remove)

---

### update()

> **update**(`element`): `void`

Defined in: [collision-detection/collision\_spatial\_partition.ts:119](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_spatial_partition.ts#L119)

Move the element to the partition of its current position.

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`update`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#update)
