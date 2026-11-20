[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / removeEventListener

# Function: removeEventListener()

> **removeEventListener**\<`K`\>(`type`, `listener?`): `boolean`

Defined in: [source/game.ts:245](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L245)

Remove a listener of a game loop event (see `addEventListener()`), or all its listeners (when `listener` isn't given).

## Type Parameters

### K

`K` _extends_ keyof [`GameEvents`](../interfaces/GameEvents.md)

## Parameters

### type

`K`

### listener?

() => `any`

## Returns

`boolean`

If it was successfully removed.
