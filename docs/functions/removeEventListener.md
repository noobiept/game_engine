[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / removeEventListener

# Function: removeEventListener()

> **removeEventListener**\<`K`\>(`type`, `listener?`): `boolean`

Defined in: [game.ts:203](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/game.ts#L203)

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
