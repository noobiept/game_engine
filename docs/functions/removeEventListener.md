[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / removeEventListener

# Function: removeEventListener()

> **removeEventListener**\<`K`\>(`type`, `listener?`): `boolean`

Defined in: [source/game.ts:210](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L210)

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
