[Game Engine](../README.md) › [Game](../modules/game.md) › [Utilities](../modules/game.utilities.md) › [Timeout](game.utilities.timeout.md)

# Class: Timeout

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Hierarchy

- **Timeout**

## Index

### Constructors

- [constructor](game.utilities.timeout.md#constructor)

### Properties

- [id](game.utilities.timeout.md#id)
- [is_active](game.utilities.timeout.md#is_active)

### Methods

- [clear](game.utilities.timeout.md#clear)
- [start](game.utilities.timeout.md#start)

## Constructors

### constructor

\+ **new Timeout**(): _[Timeout](game.utilities.timeout.md)_

_Defined in [utilities.ts:532](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L532)_

**Returns:** _[Timeout](game.utilities.timeout.md)_

## Properties

### id

• **id**: _number_

_Defined in [utilities.ts:532](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L532)_

---

### is_active

• **is_active**: _boolean_

_Defined in [utilities.ts:531](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L531)_

## Methods

### clear

▸ **clear**(): _void_

_Defined in [utilities.ts:578](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L578)_

Cancels the timeout.

**Returns:** _void_

---

### start

▸ **start**(`functionToCall`: Function, `interval`: number): _void_

_Defined in [utilities.ts:548](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L548)_

Starts the timeout. If there was an active timeout already, that one is canceled.

Throws an `Error` exception if:

- `functionToCall` isn't a function.
- `interval` isn't a number.

**Parameters:**

| Name             | Type     |
| ---------------- | -------- |
| `functionToCall` | Function |
| `interval`       | number   |

**Returns:** _void_
