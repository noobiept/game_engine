[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / Deferred

# Interface: Deferred\<T\>

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:16

## Type Parameters

### T

`T`

## Properties

### promise

> **promise**: `Promise`\<`T`\>

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:17

---

### reject

> **reject**: (`reason?`) => `void`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:19

#### Parameters

##### reason?

`unknown`

#### Returns

`void`

---

### resolve

> **resolve**: (`value`) => `void`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/async/async.d.ts:18

#### Parameters

##### value

`T` \| `PromiseLike`\<`T`\>

#### Returns

`void`
