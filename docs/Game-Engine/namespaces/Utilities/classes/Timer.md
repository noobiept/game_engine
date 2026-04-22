[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / Timer

# Class: Timer

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:21

Count-up or count-down timer. Can optionally update an html element.

## Constructors

### Constructor

> **new Timer**(`args?`): `Timer`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:33

#### Parameters

##### args?

[`TimerArgs`](../interfaces/TimerArgs.md)

#### Returns

`Timer`

## Methods

### add()

> **add**(`time`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:72

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

#### Parameters

##### time

`number`

In milliseconds.

#### Returns

`void`

---

### getTimeMilliseconds()

> **getTimeMilliseconds**(): `number`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:84

Returns the time it has passed so far, in milliseconds.

#### Returns

`number`

---

### getTimeSeconds()

> **getTimeSeconds**(): `number`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:80

Returns the time it has passed so far, in seconds.

#### Returns

`number`

---

### getTimeString()

> **getTimeString**(): `string`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:76

Returns a string with the time passed so far.

#### Returns

`string`

---

### isActive()

> **isActive**(): `boolean`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:88

Returns whether the timer is currently active or not.

#### Returns

`boolean`

---

### reset()

> **reset**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:57

Stops and resets the count.

#### Returns

`void`

---

### restart()

> **restart**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:61

Restart the timer.

#### Returns

`void`

---

### resume()

> **resume**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:49

Resumes the timer with the same settings/values that were set before it was stopped.

#### Returns

`void`

---

### setUpdateFormat()

> **setUpdateFormat**(`format?`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:62

#### Parameters

##### format?

[`UpdateFormat`](../type-aliases/UpdateFormat.md)

#### Returns

`void`

---

### start()

> **start**(`args?`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:45

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`onEnd` is called when the timer ends (only if an `endValue` was provided).
`onTick` is called every second.
`countDown` if it counts up or down (default is count up).
`interval` time in between each tick (default is 1000 milliseconds).

#### Parameters

##### args?

[`TimerStartArgs`](../interfaces/TimerStartArgs.md)

#### Returns

`void`

---

### stop()

> **stop**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:53

Stop counting.

#### Returns

`void`

---

### updateHtmlElement()

> **updateHtmlElement**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timer/timer.d.ts:66

Updates the associated html element (if was given) with the current time value.

#### Returns

`void`
