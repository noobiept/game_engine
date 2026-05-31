[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / weightedPick

# Function: weightedPick()

> **weightedPick**\<`T`\>(`items`, `weights`): `T` \| `undefined`

Defined in: node_modules/.pnpm/@drk4+utilities@7.0.0/node_modules/@drk4/utilities/build/random/random.d.ts:18

Returns a random item picked according to the given weights.
`items` and `weights` are matched by index — higher weight means more likely.

Negative weights are treated as 0. If the lengths differ, the shorter one wins.
Returns `undefined` if there's nothing to pick from or the total weight is 0.

## Type Parameters

### T

`T`

## Parameters

### items

readonly `T`[]

### weights

readonly `number`[]

## Returns

`T` \| `undefined`
