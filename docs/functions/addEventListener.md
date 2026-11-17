[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addEventListener

# Function: addEventListener()

> **addEventListener**\<`K`\>(`type`, `listener`): `boolean`

Defined in: [source/game.ts:198](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L198)

Listen to the game loop stopping and starting again, for what runs outside of it but should stop with the game:
music played through your own `AudioContext`, or the engine's sounds when the game is paused with `stopGameLoop()`
(they already pause while the page is hidden). For a timeout or a time measured in the game, `Game.Timeout` and
`Game.Stopwatch` already run on the loop.

- `pause` -- the loop stopped: the page was hidden, or `stopGameLoop()` was called.
- `resume` -- the loop is running again: the page is visible again, or `startGameLoop()` was called (and when
  `init()` starts it).

The listeners are called right after the loop stopped/started (`isGameLoopRunning()` already tells the new state),
and they're kept when `init()` is called again.

    Game.addEventListener( 'pause', () => music.pause() );
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
