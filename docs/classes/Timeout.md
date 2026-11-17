[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Timeout

# Class: Timeout

Defined in: [source/game\_time.ts:16](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L16)

A timeout that counts game time: it runs on the game loop, so it pauses with it (while the page is hidden, or after
`Game.stopGameLoop()`), and what it calls never runs while the game is paused. Use it instead of `setTimeout()` for
what belongs to the game (a message that starts the next level, a delayed spawn). It has the same methods as the
`Timeout` of `@drk4/utilities`, but in seconds. `Game.removeAllCallbacks()` cancels it as well.

Basic Usage:

    const timeout = new Game.Timeout();

    timeout.start( () => startNextLevel(), 2 ); // in 2 seconds of game time
    timeout.clear(); // cancel it

## Constructors

### Constructor

> **new Timeout**(): `Timeout`

#### Returns

`Timeout`

## Properties

### \_call

> `protected` **\_call**: (() => `void`) \| `null` = `null`

Defined in: [source/game\_time.ts:17](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L17)

## Methods

### clear()

> **clear**(): `void`

Defined in: [source/game\_time.ts:44](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L44)

Cancel the timeout (if it's active).

#### Returns

`void`

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/game\_time.ts:54](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L54)

If it was started and wasn't called (or canceled) yet.

#### Returns

`boolean`

---

### start()

> **start**(`callback`, `seconds`): `void`

Defined in: [source/game\_time.ts:25](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L25)

Start the timeout. If it was already active, the previous one is canceled.

#### Parameters

##### callback

() => `void`

Called once the time passed (at the start of an update, like the game loop callbacks).

##### seconds

`number`

Game time to wait, a number `>= 0` (`0` calls it on the next update).

#### Returns

`void`
