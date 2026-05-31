[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / pollUntil

# Function: pollUntil()

> **pollUntil**\<`T`\>(`check`, `options`): `Promise`\<`T`\>

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:51

Calls `check` repeatedly until it returns a truthy value (which is then returned),
or until `timeout` is exceeded (rejects with `TimeoutError`).

## Type Parameters

### T

`T`

## Parameters

### check

() => `false` \| `T` \| `Promise`\<`false` \| `T` \| `null` \| `undefined`\> \| `null` \| `undefined`

### options

[`PollOptions`](../interfaces/PollOptions.md)

## Returns

`Promise`\<`T`\>
