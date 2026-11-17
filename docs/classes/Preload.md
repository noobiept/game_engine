[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Preload

# Class: Preload

Defined in: [source/preload.ts:133](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L133)

Basic Usage:

    const preload = new Game.Preload({ saveGlobal: true });

    try {
        await preload.loadManifest([
            { id: 'ship', path: 'ship.png' },
            { id: 'music', path: 'music.ogg', optional: true }, // the game can run without it
        ]);
    } catch ( error ) {
        // `error.failedIds` has the files that couldn't be loaded (and aren't optional)
    }

    const ship = new Game.Bitmap({ image: Game.Preload.getImage( 'ship' ) });

        // or file by file, with the events
    preload.addEventListener( 'complete', function( data ) {
        if ( data.failedIds.length > 0 ) {
            // show an error, instead of starting the game with missing files
        }
    });
    preload.load( 'id', 'path_to_file.png' );

Get the files with `getImage()`, `getAudio()`, `getJson()` or `getText()` (on the object, or on `Game.Preload` with
`saveGlobal`). They return `undefined` for a file that wasn't loaded (or is of another type), which TypeScript
makes you check. `get()` returns `any`.

Events (the listeners are typed, see `PreloadEvents`):

- `complete` -- `listener( data: PreloadCompleteData );`
  Dispatched once all the files were dealt with (loaded or failed). More files can be loaded from the listener.
- `error` -- `listener( data: PreloadErrorData );`
  Dispatched for every file that fails to load: network errors and timeouts (`event`), error statuses (`status`), and files that
  can't be parsed or decoded (`error`).
- `abort` -- `listener( data: { id: string; event: ProgressEvent; } );`
- `progress` -- `listener( progress: number );`
- `fileload` -- `listener( data: { id: string; data: Object; } );`

The `path` is used as is, so don't build it from untrusted data (a url parameter, user input, etc) without validating it first.

Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`, `sprite`

## Extends

- [`EventDispatcher`](EventDispatcher.md)

## Constructors

### Constructor

> **new Preload**(`args?`): `Preload`

Defined in: [source/preload.ts:144](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L144)

#### Parameters

##### args?

[`PreloadArgs`](../interfaces/PreloadArgs.md)

#### Returns

`Preload`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### \_data

> `protected` **\_data**: `Record`\<`string`, `any`\>

Defined in: [source/preload.ts:136](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L136)

---

### \_failed\_ids

> `protected` **\_failed\_ids**: `string`[]

Defined in: [source/preload.ts:139](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L139)

---

### \_file\_progress

> `protected` **\_file\_progress**: `Map`\<`string`, `number`\>

Defined in: [source/preload.ts:141](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L141)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [source/event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L34)

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`_listeners`](EventDispatcher.md#_listeners)

---

### \_loaded\_ids

> `protected` **\_loaded\_ids**: `string`[]

Defined in: [source/preload.ts:140](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L140)

---

### \_loaded\_items

> `protected` **\_loaded\_items**: `number`

Defined in: [source/preload.ts:138](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L138)

---

### \_pending\_manifests

> `protected` **\_pending\_manifests**: `PendingManifest`[]

Defined in: [source/preload.ts:142](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L142)

---

### \_total\_items

> `protected` **\_total\_items**: `number`

Defined in: [source/preload.ts:137](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L137)

---

### saveGlobal

> **saveGlobal**: `boolean`

Defined in: [source/preload.ts:134](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L134)

---

### timeout

> **timeout**: `number`

Defined in: [source/preload.ts:135](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L135)

## Methods

### \_failed\_to\_load()

> `protected` **\_failed\_to\_load**(`id`): `void`

Defined in: [source/preload.ts:225](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L225)

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

#### Parameters

##### id

`string`

#### Returns

`void`

---

### \_loaded()

> `protected` **\_loaded**(`id`, `data`): `void`

Defined in: [source/preload.ts:177](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L177)

An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.

#### Parameters

##### id

`string`

The id of the loaded element.

##### data

`any`

Its data.

#### Returns

`void`

---

### \_loading\_complete()

> `protected` **\_loading\_complete**(): `void`

Defined in: [source/preload.ts:238](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L238)

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

#### Returns

`void`

---

### \_on\_abort()

> `protected` **\_on\_abort**(`event`, `id`): `void`

Defined in: [source/preload.ts:287](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L287)

Dispatch the `abort` event, and count the file as failed (even if a listener throws).

#### Parameters

##### event

`ProgressEvent`\<`EventTarget`\>

The event to dispatch.

##### id

`string`

The id of the element.

#### Returns

`void`

---

### \_on\_error()

> `protected` **\_on\_error**(`id`, `details`): `void`

Defined in: [source/preload.ts:273](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L273)

Dispatch the `error` event, and count the file as failed (even if a listener throws).

#### Parameters

##### id

`string`

The id of the element.

##### details

`Omit`\<[`PreloadErrorData`](../interfaces/PreloadErrorData.md), `"id"`\>

What went wrong.

#### Returns

`void`

---

### \_on\_progress()

> `protected` **\_on\_progress**(`event`, `id`): `void`

Defined in: [source/preload.ts:301](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L301)

Dispatch the current progress percentage (of all the files being loaded).

#### Parameters

##### event

`ProgressEvent`

The event that was triggered.

##### id

`string`

The id of the file.

#### Returns

`void`

---

### addEventListener()

> **addEventListener**\<`K`\>(`type`, `listener`): `boolean`

Defined in: [source/preload.ts:203](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L203)

Add a listener to one of the events (see `PreloadEvents` for the data each one gets).

#### Type Parameters

##### K

`K` _extends_ keyof [`PreloadEvents`](../interfaces/PreloadEvents.md)

#### Parameters

##### type

`K`

##### listener

(`data`) => `any`

#### Returns

`boolean`

If it was successfully added (`false` when it isn't a function, or was already added).

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event\_dispatcher.ts:125](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L125)

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

##### type

`string`

Type of the event to dispatch.

##### data?

`any`

Data to be sent to every listener.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatchEvent`](EventDispatcher.md#dispatchevent)

---

### get()

> **get**(`id`): `any`

Defined in: [source/preload.ts:502](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L502)

Get a previously loaded file (as `any`). See `getImage()`, `getAudio()`, `getJson()` and `getText()` for typed
versions.

#### Parameters

##### id

`string`

The id of the file.

#### Returns

`any`

---

### getAudio()

> **getAudio**(`id`): `AudioBuffer` \| `undefined`

Defined in: [source/preload.ts:516](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L516)

Get a loaded audio file (decoded), or `undefined` when there isn't one with that id.

#### Parameters

##### id

`string`

#### Returns

`AudioBuffer` \| `undefined`

---

### getImage()

> **getImage**(`id`): `HTMLImageElement` \| `undefined`

Defined in: [source/preload.ts:509](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L509)

Get a loaded image, or `undefined` when there isn't one with that id.

#### Parameters

##### id

`string`

#### Returns

`HTMLImageElement` \| `undefined`

---

### getJson()

> **getJson**\<`T`\>(`id`): `T` \| `undefined`

Defined in: [source/preload.ts:531](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L531)

Get a loaded json file (parsed), or `undefined` when there isn't a file with that id. The data isn't checked
against `T`.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### id

`string`

#### Returns

`T` \| `undefined`

---

### getText()

> **getText**(`id`): `string` \| `undefined`

Defined in: [source/preload.ts:523](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L523)

Get a loaded text file, or `undefined` when there isn't one with that id.

#### Parameters

##### id

`string`

#### Returns

`string` \| `undefined`

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event\_dispatcher.ts:146](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L146)

Check if there are listeners to a particular event type.

#### Parameters

##### type

`string`

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`hasListeners`](EventDispatcher.md#haslisteners)

---

### load()

> **load**(`id`, `path`, `typeId?`): `void`

Defined in: [source/preload.ts:333](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L333)

Load a file.

#### Parameters

##### id

`string`

The id to be used later on to get the element.

##### path

`string`

Path to the file.

##### typeId?

[`TYPES`](../Game-Engine/namespaces/Preload/enumerations/TYPES.md)

Type of the file to load. If not provided then it will try to determine the type from the file extension.

#### Returns

`void`

---

### loadManifest()

> **loadManifest**(`manifest`, `basePath?`): `Promise`\<[`PreloadCompleteData`](../interfaces/PreloadCompleteData.md)\>

Defined in: [source/preload.ts:451](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L451)

Load several files.

The returned promise resolves once all the files were dealt with (like the `complete` event, with its data), or
rejects with a `PreloadError` when any file that isn't `optional` fails to load. Awaiting it makes a missing
file an error, instead of a game that starts without it. The events are dispatched as well, and a game that
uses them instead can ignore the promise (its rejection isn't reported as unhandled).

#### Parameters

##### manifest

[`PreloadManifestEntry`](../interfaces/PreloadManifestEntry.md)[]

Has the information about the files (`optional` ones don't fail the promise).

##### basePath?

`string`

Base path for all the files in the manifest.

#### Returns

`Promise`\<[`PreloadCompleteData`](../interfaces/PreloadCompleteData.md)\>

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**\<`K`\>(`type`, `listener?`): `boolean`

Defined in: [source/preload.ts:215](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L215)

Remove a listener of an event, or all its listeners (when `listener` isn't given).

#### Type Parameters

##### K

`K` _extends_ keyof [`PreloadEvents`](../interfaces/PreloadEvents.md)

#### Parameters

##### type

`K`

##### listener?

(`data`) => `any`

#### Returns

`boolean`

If it was successfully removed.

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)
