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

* **SpatialPartition**

## Implements

* [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)

## Index

### Constructors

* [constructor](game.collisiondetection.spatialpartition.md#constructor)

### Properties

* [_grid](game.collisiondetection.spatialpartition.md#_grid)
* [_grid_size](game.collisiondetection.spatialpartition.md#_grid_size)
* [_partition_height](game.collisiondetection.spatialpartition.md#_partition_height)
* [_partition_width](game.collisiondetection.spatialpartition.md#_partition_width)

### Methods

* [add](game.collisiondetection.spatialpartition.md#add)
* [checkCollision](game.collisiondetection.spatialpartition.md#checkcollision)
* [checkElement](game.collisiondetection.spatialpartition.md#checkelement)
* [clear](game.collisiondetection.spatialpartition.md#clear)
* [remove](game.collisiondetection.spatialpartition.md#remove)
* [update](game.collisiondetection.spatialpartition.md#update)

## Constructors

###  constructor

\+ **new SpatialPartition**(`args`: [SpatialPartitionArgs](../interfaces/game.collisiondetection.spatialpartitionargs.md)): *[SpatialPartition](game.collisiondetection.spatialpartition.md)*

*Defined in [collision_spatial_partition.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SpatialPartitionArgs](../interfaces/game.collisiondetection.spatialpartitionargs.md) |

**Returns:** *[SpatialPartition](game.collisiondetection.spatialpartition.md)*

## Properties

###  _grid

• **_grid**: *[Element](game.element.md)[][]*

*Defined in [collision_spatial_partition.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L36)*

___

###  _grid_size

• **_grid_size**: *number*

*Defined in [collision_spatial_partition.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L37)*

___

###  _partition_height

• **_partition_height**: *number*

*Defined in [collision_spatial_partition.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L39)*

___

###  _partition_width

• **_partition_width**: *number*

*Defined in [collision_spatial_partition.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L38)*

## Methods

###  add

▸ **add**(`element`: [Element](game.element.md)): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_spatial_partition.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L67)*

Add an element to a partition in the grid, based on its current x/y position.

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](game.element.md) |

**Returns:** *void*

___

###  checkCollision

▸ **checkCollision**(): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_spatial_partition.ts:188](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L188)*

**Returns:** *void*

___

###  checkElement

▸ **checkElement**(`element`: [Element](game.element.md), `other`: [Element](game.element.md)): *void*

*Defined in [collision_spatial_partition.ts:237](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L237)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [Element](game.element.md) | The element to be compared with. |
`other` | [Element](game.element.md) | First element of the partition linked list.  |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_spatial_partition.ts:276](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L276)*

**Returns:** *void*

___

###  remove

▸ **remove**(`element`: [Element](game.element.md)): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_spatial_partition.ts:150](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](game.element.md) |

**Returns:** *void*

___

###  update

▸ **update**(`element`: [Element](game.element.md)): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_spatial_partition.ts:107](https://github.com/noobiept/game_engine/blob/625c324/source/collision_spatial_partition.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](game.element.md) |

**Returns:** *void*
