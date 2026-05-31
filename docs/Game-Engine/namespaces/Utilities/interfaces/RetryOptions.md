[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / RetryOptions

# Interface: RetryOptions

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:26

## Properties

### attempts

> **attempts**: `number`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:28

Total number of attempts (including the first one). Must be >= 1.

---

### backoff?

> `optional` **backoff?**: `number`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:32

Multiplier applied to `delay` after each failed attempt. Defaults to 1 (constant delay).

---

### delay?

> `optional` **delay?**: `number`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:30

Milliseconds to wait between attempts. Defaults to 0 (immediate retry).

---

### onError?

> `optional` **onError?**: (`error`, `attempt`) => `void`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:34

Called with the error and the (1-indexed) attempt number after each failure.

#### Parameters

##### error

`unknown`

##### attempt

`number`

#### Returns

`void`
