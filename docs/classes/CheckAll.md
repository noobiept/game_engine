[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / CheckAll

# Class: CheckAll

Defined in: [source/collision-detection/collision\_check\_all.ts:7](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L7)

Checks every pair of elements. Useful when there's a small number of elements in the game.

## Implements

- [`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md)

## Constructors

### Constructor

> **new CheckAll**(): `CheckAll`

Defined in: [source/collision-detection/collision\_check\_all.ts:11](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L11)

#### Returns

`CheckAll`

## Properties

### \_elements

> **\_elements**: [`Element`](Element.md)[]

Defined in: [source/collision-detection/collision\_check\_all.ts:8](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L8)

---

### \_registered

> `protected` **\_registered**: `Set`\<[`Element`](Element.md)\>

Defined in: [source/collision-detection/collision\_check\_all.ts:9](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L9)

## Methods

### \_canCollide()

> `protected` **\_canCollide**(`element`): `boolean`

Defined in: [source/collision-detection/collision\_check\_all.ts:100](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L100)

If the element is still part of the collision detection (it may have been removed by a collision listener).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`boolean`

---

### add()

> **add**(`element`): `void`

Defined in: [source/collision-detection/collision\_check\_all.ts:16](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L16)

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

Defined in: [source/collision-detection/collision\_check\_all.ts:44](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L44)

Checks the collision between all the elements provided.

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`checkCollision`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#checkcollision)

---

### clear()

> **clear**(): `void`

Defined in: [source/collision-detection/collision\_check\_all.ts:108](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L108)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`clear`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#clear)

---

### remove()

> **remove**(`element`): `void`

Defined in: [source/collision-detection/collision\_check\_all.ts:29](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L29)

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`remove`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#remove)

---

### update()

> **update**(`_element`): `void`

Defined in: [source/collision-detection/collision\_check\_all.ts:25](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/collision-detection/collision_check_all.ts#L25)

#### Parameters

##### \_element

[`Element`](Element.md)

#### Returns

`void`

#### Implementation of

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md).[`update`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md#update)
