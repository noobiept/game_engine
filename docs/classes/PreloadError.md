[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / PreloadError

# Class: PreloadError

Defined in: [source/preload.ts:40](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L40)

The error `loadManifest()` rejects with, when files that aren't `optional` fail to load.

## Extends

- `Error`

## Constructors

### Constructor

> **new PreloadError**(`failedIds`, `data`): `PreloadError`

Defined in: [source/preload.ts:44](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L44)

#### Parameters

##### failedIds

`string`[]

##### data

[`PreloadCompleteData`](../interfaces/PreloadCompleteData.md)

#### Returns

`PreloadError`

#### Overrides

`Error.constructor`

## Properties

### data

> **data**: [`PreloadCompleteData`](../interfaces/PreloadCompleteData.md)

Defined in: [source/preload.ts:42](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L42)

---

### failedIds

> **failedIds**: `string`[]

Defined in: [source/preload.ts:41](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L41)

---

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

---

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1074

#### Inherited from

`Error.name`

---

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`
