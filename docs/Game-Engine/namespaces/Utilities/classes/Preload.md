[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / Preload

# Class: Preload

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/preload/preload.d.ts:62

Basic Usage:
import { Preload } from '@drk4/utilities';

    const preload = new Preload();

    preload.addEventListener('complete', (loaded) => {
        console.log( loaded.loaded_ids );
        const image = preload.get( 'the_id' );
    });

    const manifest = [
            { id: 'the_id', path: 'path_to_file.png' },          // try to determine the type from the extension
            { id: 'other', path: 'other_path', type: 'json' }    // or just specify it directly
        ];
    preload.loadManifest( manifest );

Events:

- `complete` -- `listener( data: { failed_ids: string[]; loaded_ids: string[]; } );`
- `error` -- `listener( data: { id: string; event; } );`
- `abort` -- `listener( data: { id: string; event; } );`
- `progress` -- `listener( progress: number );`
- `fileload` -- `listener( data: { id: string; data: Object; } );`

## Extends

- [`EventDispatcher`](EventDispatcher.md)\<[`PreloadEvent`](../type-aliases/PreloadEvent.md)\>

## Constructors

### Constructor

> **new Preload**(`args?`): `Preload`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/preload/preload.d.ts:76

#### Parameters

##### args?

[`PreloadArgs`](../interfaces/PreloadArgs.md)

#### Returns

`Preload`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/event_dispatcher/event_dispatcher.d.ts:30

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

[`PreloadEvent`](../type-aliases/PreloadEvent.md)

Type of the event.

##### listener

(`data`) => `void`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/event_dispatcher/event_dispatcher.d.ts:49

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

##### type

[`PreloadEvent`](../type-aliases/PreloadEvent.md)

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

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/preload/preload.d.ts:127

Get a previously loaded file.

#### Parameters

##### id

`string`

#### Returns

`any`

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/event_dispatcher/event_dispatcher.d.ts:56

Check if there are listeners to a particular event type.

#### Parameters

##### type

[`PreloadEvent`](../type-aliases/PreloadEvent.md)

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`hasListeners`](EventDispatcher.md#haslisteners)

---

### load()

> **load**(`id`, `path`, `typeId?`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/preload/preload.d.ts:119

Load a file.

#### Parameters

##### id

`string`

The id to be used later on to get the element.

##### path

`string`

Path to the file.

##### typeId?

`"image"` \| `"text"` \| `"json"` \| `"audio_ogg"` \| `"audio_mp3"`

Type of the file to load. If not provided then it will try to determine the type from the file extension.

#### Returns

`void`

---

### loadManifest()

> **loadManifest**(`manifest`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/preload/preload.d.ts:123

Load several files.

#### Parameters

##### manifest

[`ManifestData`](../type-aliases/ManifestData.md)

#### Returns

`void`

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/event_dispatcher/event_dispatcher.d.ts:42

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/event_dispatcher/event_dispatcher.d.ts:38

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

[`PreloadEvent`](../type-aliases/PreloadEvent.md)

The event type.

##### listener?

(`data`) => `any`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)

---

### get()

> `static` **get**(`id`): `any`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/preload/preload.d.ts:75

Get an element that was saved in the global `DATA` object.

#### Parameters

##### id

`string`

The id of the element we're retrieving.

#### Returns

`any`

The preloaded element.
