[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Stopwatch

# Class: Stopwatch

Defined in: [source/game\_time.ts:75](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L75)

Measures game time: it adds up the `deltaTime` of the game loop, so it stops with it (while the page is hidden, or
after `Game.stopGameLoop()`), without any listener. Use it for a time that is shown or scored (how long a level took).
Since `deltaTime` is limited (see `Game.setMaxDeltaTime()`), it runs slower than real time when the game stalls,
like the game itself. `Game.removeAllCallbacks()` stops it as well (until `start()` is called again).

Basic Usage:

    const stopwatch = new Game.Stopwatch();

    stopwatch.start();
    // ...
    stopwatch.stop();
    console.log( stopwatch.getTime() ); // in seconds

## Constructors

### Constructor

> **new Stopwatch**(): `Stopwatch`

#### Returns

`Stopwatch`

## Properties

### \_running

> `protected` **\_running**: `boolean` = `false`

Defined in: [source/game\_time.ts:77](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L77)

---

### \_time

> `protected` **\_time**: `number` = `0`

Defined in: [source/game\_time.ts:76](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L76)

## Methods

### \_tick()

> `protected` **\_tick**(`deltaTime`): `void`

Defined in: [source/game\_time.ts:78](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L78)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

---

### getTime()

> **getTime**(): `number`

Defined in: [source/game\_time.ts:112](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L112)

The game time counted, in seconds.

#### Returns

`number`

---

### isRunning()

> **isRunning**(): `boolean`

Defined in: [source/game\_time.ts:119](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L119)

If it's counting.

#### Returns

`boolean`

---

### reset()

> **reset**(): `void`

Defined in: [source/game\_time.ts:105](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L105)

Set the time back to `0` (it keeps running if it was).

#### Returns

`void`

---

### start()

> **start**(): `void`

Defined in: [source/game\_time.ts:85](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L85)

Start counting (from the current time, see `reset()`). It counts from the next update of the game loop.

#### Returns

`void`

---

### stop()

> **stop**(): `void`

Defined in: [source/game\_time.ts:95](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game_time.ts#L95)

Stop counting (it keeps the time, so `start()` continues from it).

#### Returns

`void`
