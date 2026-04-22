[Game Engine](../README.md) › [Game](../modules/game.md) › [CollisionDetection](../modules/game.collisiondetection.md) › [CheckAll](game.collisiondetection.checkall.md)

# Class: CheckAll

Useful when there's a small number of elements in the game.

## Hierarchy

- **CheckAll**

## Implements

- [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)

## Index

### Constructors

- [constructor](game.collisiondetection.checkall.md#constructor)

### Properties

- [\_elements](game.collisiondetection.checkall.md#_elements)

### Methods

- [add](game.collisiondetection.checkall.md#add)
- [checkCollision](game.collisiondetection.checkall.md#checkcollision)
- [clear](game.collisiondetection.checkall.md#clear)
- [remove](game.collisiondetection.checkall.md#remove)
- [update](game.collisiondetection.checkall.md#update)

## Constructors

### constructor

\+ **new CheckAll**(): _[CheckAll](game.collisiondetection.checkall.md)_

_Defined in [collision_check_all.ts:12](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L12)_

**Returns:** _[CheckAll](game.collisiondetection.checkall.md)_

## Properties

### \_elements

• **\_elements**: _[Element](game.element.md)[]_

_Defined in [collision_check_all.ts:12](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L12)_

## Methods

### add

▸ **add**(`element`: [Element](game.element.md)): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_check_all.ts:21](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L21)_

**Parameters:**

| Name      | Type                       |
| --------- | -------------------------- |
| `element` | [Element](game.element.md) |

**Returns:** _void_

---

### checkCollision

▸ **checkCollision**(): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_check_all.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L44)_

Checks the collision between all the elements provided.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_check_all.ts:98](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L98)_

**Returns:** _void_

---

### remove

▸ **remove**(`element`: [Element](game.element.md)): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_check_all.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L33)_

**Parameters:**

| Name      | Type                       |
| --------- | -------------------------- |
| `element` | [Element](game.element.md) |

**Returns:** _void_

---

### update

▸ **update**(`element`: [Element](game.element.md)): _void_

_Implementation of [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_check_all.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/collision_check_all.ts#L27)_

**Parameters:**

| Name      | Type                       |
| --------- | -------------------------- |
| `element` | [Element](game.element.md) |

**Returns:** _void_
