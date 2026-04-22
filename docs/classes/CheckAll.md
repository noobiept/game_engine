[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / CheckAll

# Class: CheckAll

Defined in: [source/collision-detection/collision_check_all.ts:7](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L7)

Useful when there's a small number of elements in the game.

## Implements

- [`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md)

## Constructors

### Constructor

> **new CheckAll**(): `CheckAll`

Defined in: [source/collision-detection/collision_check_all.ts:10](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L10)

#### Returns

`CheckAll`

## Properties

### \_elements

> **\_elements**: [`Element`](Element.md)[]

Defined in: [source/collision-detection/collision_check_all.ts:8](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L8)

## Methods

### add()

> **add**(`element`): `void`

Defined in: [source/collision-detection/collision_check_all.ts:14](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L14)

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

Defined in: [source/collision-detection/collision_check_all.ts:31](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L31)

Checks the collision between all the elements provided.

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`checkCollision`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#checkcollision)

---

### clear()

> **clear**(): `void`

Defined in: [source/collision-detection/collision_check_all.ts:77](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L77)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`clear`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#clear)

---

### remove()

> **remove**(`element`): `void`

Defined in: [source/collision-detection/collision_check_all.ts:22](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L22)

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

Defined in: [source/collision-detection/collision_check_all.ts:18](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/collision-detection/collision_check_all.ts#L18)

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`update`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#update)
