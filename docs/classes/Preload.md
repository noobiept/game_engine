[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Preload

# Class: Preload

Defined in: [preload.ts:54](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L54)

Basic Usage:

    const preload = new Game.Preload({ saveGlobal: true });

    preload.addEventListener( 'complete', completeListener );
    preload.load( 'id', 'path_to_file.png' );

        // or with a manifest
    const manifest = [
            { id: 'the_id', path: 'path_to_file.png' }
        ];
    preload.loadManifest( manifest, '' );

Events:

- `complete` -- `listener( data: { failedIds: string[]; loadedIds: string[]; } );`
  Dispatched once all the files were dealt with (loaded or failed). More files can be loaded from the listener.
- `error` -- `listener( data: PreloadErrorData );`
  Dispatched for every file that fails to load: network errors and timeouts (`event`), error statuses (`status`), and files that
  can't be parsed or decoded (`error`).
- `abort` -- `listener( data: { id: string; event; } );`
- `progress` -- `listener( progress: number );`
- `fileload` -- `listener( data: { id: string; data: Object; } );`

The `path` is used as is, so don't build it from untrusted data (a url parameter, user input, etc) without validating it first.

Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`, `sprite`

## Extends

- [`EventDispatcher`](EventDispatcher.md)

## Constructors

### Constructor

> **new Preload**(`args?`): `Preload`

Defined in: [preload.ts:64](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L64)

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

Defined in: [preload.ts:57](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L57)

---

### \_failed\_ids

> `protected` **\_failed\_ids**: `string`[]

Defined in: [preload.ts:60](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L60)

---

### \_file\_progress

> `protected` **\_file\_progress**: `Map`\<`string`, `number`\>

Defined in: [preload.ts:62](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L62)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L34)

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`_listeners`](EventDispatcher.md#_listeners)

---

### \_loaded\_ids

> `protected` **\_loaded\_ids**: `string`[]

Defined in: [preload.ts:61](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L61)

---

### \_loaded\_items

> `protected` **\_loaded\_items**: `number`

Defined in: [preload.ts:59](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L59)

---

### \_total\_items

> `protected` **\_total\_items**: `number`

Defined in: [preload.ts:58](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L58)

---

### saveGlobal

> **saveGlobal**: `boolean`

Defined in: [preload.ts:55](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L55)

---

### timeout

> **timeout**: `number`

Defined in: [preload.ts:56](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L56)

## Methods

### \_failed\_to\_load()

> `protected` **\_failed\_to\_load**(`id`): `void`

Defined in: [preload.ts:120](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L120)

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

#### Parameters

##### id

`string`

#### Returns

`void`

---

### \_loaded()

> `protected` **\_loaded**(`id`, `data`): `void`

Defined in: [preload.ts:96](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L96)

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

Defined in: [preload.ts:133](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L133)

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

#### Returns

`void`

---

### \_on\_abort()

> `protected` **\_on\_abort**(`event`, `id`): `void`

Defined in: [preload.ts:169](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L169)

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

Defined in: [preload.ts:155](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L155)

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

Defined in: [preload.ts:183](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L183)

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

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [event\_dispatcher.ts:48](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L48)

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

`string`

Type of the event.

##### listener

`EventListener`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added (`false` when it isn't a function, or was already added).

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [event\_dispatcher.ts:125](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L125)

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

Defined in: [preload.ts:347](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L347)

Get a previously loaded file.

#### Parameters

##### id

`string`

The id of the file.

#### Returns

`any`

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [event\_dispatcher.ts:146](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L146)

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

Defined in: [preload.ts:215](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L215)

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

> **loadManifest**(`manifest`, `basePath?`): `void`

Defined in: [preload.ts:328](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/preload.ts#L328)

Load several files.

#### Parameters

##### manifest

`object`[]

Has the information about the files.

##### basePath?

`string`

Base path for all the files in the manifest.

#### Returns

`void`

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [event\_dispatcher.ts:74](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L74)

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

`string`

The event type.

##### listener?

`EventListener`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)
