[Game Engine](../README.md) › [Game](../modules/game.md) › [CollisionDetection](../modules/game.collisiondetection.md) › [CheckAll](game.collisiondetection.checkall.md)

# Class: CheckAll

Useful when there's a small number of elements in the game.

## Hierarchy

* **CheckAll**

## Implements

* [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)

## Index

### Constructors

* [constructor](game.collisiondetection.checkall.md#constructor)

### Properties

* [_elements](game.collisiondetection.checkall.md#_elements)

### Methods

* [add](game.collisiondetection.checkall.md#add)
* [checkCollision](game.collisiondetection.checkall.md#checkcollision)
* [clear](game.collisiondetection.checkall.md#clear)
* [remove](game.collisiondetection.checkall.md#remove)
* [update](game.collisiondetection.checkall.md#update)

## Constructors

###  constructor

\+ **new CheckAll**(): *[CheckAll](game.collisiondetection.checkall.md)*

*Defined in [collision_check_all.ts:12](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L12)*

**Returns:** *[CheckAll](game.collisiondetection.checkall.md)*

## Properties

###  _elements

• **_elements**: *[Element](game.element.md)[]*

*Defined in [collision_check_all.ts:12](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L12)*

## Methods

###  add

▸ **add**(`element`: [Element](game.element.md)): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_check_all.ts:21](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](game.element.md) |

**Returns:** *void*

___

###  checkCollision

▸ **checkCollision**(): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_check_all.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L44)*

Checks the collision between all the elements provided.

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_check_all.ts:98](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L98)*

**Returns:** *void*

___

###  remove

▸ **remove**(`element`: [Element](game.element.md)): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_check_all.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](game.element.md) |

**Returns:** *void*

___

###  update

▸ **update**(`element`: [Element](game.element.md)): *void*

*Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_check_all.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](game.element.md) |

**Returns:** *void*
