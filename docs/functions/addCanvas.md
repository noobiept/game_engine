[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addCanvas

# Function: addCanvas()

> **addCanvas**(`canvas`, `position?`): `number`

Defined in: [source/game.ts:448](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L448)

## Parameters

### canvas

[`Canvas`](../classes/Canvas.md)

The canvas to be added.

### position?

`number`

The desired position of the canvas. The canvas are stacked on the same space. The 0 position, is the one in the back, and the higher the value, the most on top. Keep in mind that the position may not be the same as the returned id. If not provided, then the canvas is added on top (last position).

## Returns

`number`

The id of the canvas. Can be used to retrieve the canvas later on with Game.getCanvas(). The id can be invalidated if there's new canvas added in a specific position.
