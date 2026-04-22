[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / Timeout

# Class: Timeout

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timeout/timeout.d.ts:4

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Constructors

### Constructor

> **new Timeout**(): `Timeout`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timeout/timeout.d.ts:7

#### Returns

`Timeout`

## Methods

### clear()

> **clear**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timeout/timeout.d.ts:15

Cancels the timeout.

#### Returns

`void`

---

### isActive()

> **isActive**(): `boolean`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timeout/timeout.d.ts:19

Returns whether the timeout is active or not.

#### Returns

`boolean`

---

### start()

> **start**(`functionToCall`, `interval`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/timeout/timeout.d.ts:11

Starts the timeout. If there was an active timeout already, that one is canceled.

#### Parameters

##### functionToCall

() => `void`

##### interval

`number`

#### Returns

`void`
