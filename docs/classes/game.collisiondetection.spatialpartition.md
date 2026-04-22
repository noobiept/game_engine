[Game Engine](../README.md) › [Game](../modules/game.md) › [CollisionDetection](../modules/game.collisiondetection.md) › [SpatialPartition](game.collisiondetection.spatialpartition.md)

# Class: SpatialPartition

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

## Hierarchy

- **SpatialPartition**

## Implements

- [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)

## Index

### Constructors

- [constructor](game.collisiondetection.spatialpartition.md#constructor)

### Properties

- [\_grid](game.collisiondetection.spatialpartition.md#_grid)
- [\_grid_size](game.collisiondetection.spatialpartition.md#_grid_size)
- [\_partition_height](game.collisiondetection.spatialpartition.md#_partition_height)
- [\_partition_width](game.collisiondetection.spatialpartition.md#_partition_width)

### Methods

- [add](game.collisiondetection.spatialpartition.md#add)
- [checkCollision](game.collisiondetection.spatialpartition.md#checkcollision)
- [checkElement](game.collisiondetection.spatialpartition.md#checkelement)
- [clear](game.collisiondetection.spatialpartition.md#clear)
- [remove](game.collisiondetection.spatialpartition.md#remove)
- [update](game.collisiondetection.spatialpartition.md#update)

## Constructors

### constructor

\+ **new SpatialPartition**(`args`: [SpatialPartitionArgs](../interfaces/game.collisiondetection.spatialpartitionargs.md)): _[SpatialPartition](game.collisiondetection.spatialpartition.md)_

_Defined in [collision_spatial_partition.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L39)_

**Parameters:**

| Name   | Type                                                                                  |
| ------ | ------------------------------------------------------------------------------------- |
| `args` | [SpatialPartitionArgs](../interfaces/game.collisiondetection.spatialpartitionargs.md) |

**Returns:** _[SpatialPartition](game.collisiondetection.spatialpartition.md)_

## Properties

### \_grid

• **\_grid**: _[Element](game.element.md)[][]_

_Defined in [collision_spatial_partition.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L36)_

---

### \_grid_size

• **\_grid_size**: _number_

_Defined in [collision_spatial_partition.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L37)_

---

### \_partition_height

• **\_partition_height**: _number_

_Defined in [collision_spatial_partition.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L39)_

---

### \_partition_width

• **\_partition_width**: _number_

_Defined in [collision_spatial_partition.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L38)_

## Methods

### add

▸ **add**(`element`: [Element](game.element.md)): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_spatial_partition.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L67)_

Add an element to a partition in the grid, based on its current x/y position.

**Parameters:**

| Name      | Type                       |
| --------- | -------------------------- |
| `element` | [Element](game.element.md) |

**Returns:** _void_

---

### checkCollision

▸ **checkCollision**(): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_spatial_partition.ts:188](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L188)_

**Returns:** _void_

---

### checkElement

▸ **checkElement**(`element`: [Element](game.element.md), `other`: [Element](game.element.md)): _void_

_Defined in [collision_spatial_partition.ts:237](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L237)_

**Parameters:**

| Name      | Type                       | Description                                 |
| --------- | -------------------------- | ------------------------------------------- |
| `element` | [Element](game.element.md) | The element to be compared with.            |
| `other`   | [Element](game.element.md) | First element of the partition linked list. |

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_spatial_partition.ts:276](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L276)_

**Returns:** _void_

---

### remove

▸ **remove**(`element`: [Element](game.element.md)): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_spatial_partition.ts:150](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L150)_

**Parameters:**

| Name      | Type                       |
| --------- | -------------------------- |
| `element` | [Element](game.element.md) |

**Returns:** _void_

---

### update

▸ **update**(`element`: [Element](game.element.md)): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_spatial_partition.ts:107](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L107)_

**Parameters:**

| Name      | Type                       |
| --------- | -------------------------- |
| `element` | [Element](game.element.md) |

**Returns:** _void_
