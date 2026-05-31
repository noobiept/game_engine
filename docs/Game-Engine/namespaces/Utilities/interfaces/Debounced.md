[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / Debounced

# Interface: Debounced()\<Args\>

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:52

## Type Parameters

### Args

`Args` _extends_ `unknown`[]

> **Debounced**(...`args`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:53

## Parameters

### args

...`Args`

## Returns

`void`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:55

Cancel any pending call without invoking `fn`.

#### Returns

`void`

---

### flush()

> **flush**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:57

Invoke any pending call immediately.

#### Returns

`void`
