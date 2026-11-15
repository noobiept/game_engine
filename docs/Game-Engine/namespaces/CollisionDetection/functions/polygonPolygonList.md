[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [CollisionDetection](../README.md) / polygonPolygonList

# Function: polygonPolygonList()

> **polygonPolygonList**(`list1`, `list2`): `boolean`

Defined in: [collision-detection/collision\_detection.ts:126](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/collision-detection/collision_detection.ts#L126)

Uses the `Separating Axis Theorem` to determine if two elements have collided.
Checks a list of vertices against another list of vertices (for example for comparing containers, which can have several elements).

Works for convex polygon shapes.

## Parameters

### list1

[`Vertices`](../type-aliases/Vertices.md)[]

### list2

[`Vertices`](../type-aliases/Vertices.md)[]

## Returns

`boolean`
