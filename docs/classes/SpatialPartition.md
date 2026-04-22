[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / SpatialPartition

# Class: SpatialPartition

Defined in: [source/collision-detection/collision_spatial_partition.ts:28](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L28)

Useful when there's lots of elements in the game.
Need to make sure no element is bigger than the size of a partition.

Basic Usage:

    var width = 400;
    var height = 400;

    var collision = new Game.CollisionDetection.SpatialPartition({
            canvasWidth: width,
            canvasHeight: height,
            partitions: 10
        });
    Game.init( document.body, width, height, collision );

Examples -- `collision_spatial_partition`

## Implements

- [`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md)

## Constructors

### Constructor

> **new SpatialPartition**(`args`): `SpatialPartition`

Defined in: [source/collision-detection/collision_spatial_partition.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L34)

#### Parameters

##### args

[`SpatialPartitionArgs`](../interfaces/SpatialPartitionArgs.md)

#### Returns

`SpatialPartition`

## Properties

### \_grid

> **\_grid**: [`Element`](Element.md)[][]

Defined in: [source/collision-detection/collision_spatial_partition.ts:29](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L29)

---

### \_grid_size

> **\_grid_size**: `number`

Defined in: [source/collision-detection/collision_spatial_partition.ts:30](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L30)

---

### \_partition_height

> **\_partition_height**: `number`

Defined in: [source/collision-detection/collision_spatial_partition.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L32)

---

### \_partition_width

> **\_partition_width**: `number`

Defined in: [source/collision-detection/collision_spatial_partition.ts:31](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L31)

## Methods

### add()

> **add**(`element`): `void`

Defined in: [source/collision-detection/collision_spatial_partition.ts:55](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L55)

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

Defined in: [source/collision-detection/collision_spatial_partition.ts:159](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L159)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`checkCollision`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#checkcollision)

---

### checkElement()

> **checkElement**(`element`, `other`): `void`

Defined in: [source/collision-detection/collision_spatial_partition.ts:214](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L214)

#### Parameters

##### element

[`Element`](Element.md)

The element to be compared with.

##### other

[`Element`](Element.md)

First element of the partition linked list.

#### Returns

`void`

---

### clear()

> **clear**(): `void`

Defined in: [source/collision-detection/collision_spatial_partition.ts:247](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L247)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`clear`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#clear)

---

### remove()

> **remove**(`element`): `void`

Defined in: [source/collision-detection/collision_spatial_partition.ts:129](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L129)

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

Defined in: [source/collision-detection/collision_spatial_partition.ts:89](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_spatial_partition.ts#L89)

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`update`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#update)
