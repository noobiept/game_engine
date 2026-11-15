[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addEventListener

# Function: addEventListener()

> **addEventListener**\<`K`\>(`type`, `listener`): `boolean`

Defined in: [game.ts:191](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/game.ts#L191)

Listen to the game loop stopping and starting again, for what runs outside of it but should stop with the game: a
timer shown in the page, music played through your own `AudioContext`, a `setTimeout()`, etc.

- `pause` -- the loop stopped: the page was hidden, or `stopGameLoop()` was called.
- `resume` -- the loop is running again: the page is visible again, or `startGameLoop()` was called (and when
  `init()` starts it).

The listeners are called right after the loop stopped/started (`isGameLoopRunning()` already tells the new state),
and they're kept when `init()` is called again.

    Game.addEventListener( 'pause', () => music.suspend() );
    Game.addEventListener( 'resume', () => music.resume() );

## Type Parameters

### K

`K` _extends_ keyof [`GameEvents`](../interfaces/GameEvents.md)

## Parameters

### type

`K`

### listener

() => `any`

## Returns

`boolean`

If it was successfully added (`false` when it isn't a function, or was already added).
