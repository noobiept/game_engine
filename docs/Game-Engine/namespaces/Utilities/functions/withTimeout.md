[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / withTimeout

# Function: withTimeout()

> **withTimeout**\<`T`\>(`promise`, `ms`, `message?`): `Promise`\<`T`\>

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:15

Resolves with the value of `promise` if it settles before `ms` elapses,
otherwise rejects with a `TimeoutError`.

## Type Parameters

### T

`T`

## Parameters

### promise

`PromiseLike`\<`T`\>

### ms

`number`

### message?

`string`

## Returns

`Promise`\<`T`\>
