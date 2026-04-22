[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / init

# Function: init()

> **init**(`htmlContainer`, `canvasWidth`, `canvasHeight`, `collision?`): `void`

Defined in: [source/game.ts:64](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/game.ts#L64)

Initialize the canvas/game loop/etc.

## Parameters

### htmlContainer

`HTMLElement`

The canvas is going to be appended to this element.

### canvasWidth

`number`

Canvas width.

### canvasHeight

`number`

Canvas height.

### collision?

[`CollisionDetectionAlgorithm`](../Game-Engine/namespaces/CollisionDetection/interfaces/CollisionDetectionAlgorithm.md)

Collision detection algorithm object. Default is the 'CheckAll' algorithm.

## Returns

`void`
