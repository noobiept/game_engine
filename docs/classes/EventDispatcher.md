[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / EventDispatcher

# Class: EventDispatcher

Defined in: [source/event_dispatcher.ts:12](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L12)

Base class that provides a way to add/remove listeners, and dispatch events.

## Extended by

- [`Element`](Element.md)
- [`Preload`](Preload.md)

## Constructors

### Constructor

> **new EventDispatcher**(`_args?`): `EventDispatcher`

Defined in: [source/event_dispatcher.ts:15](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L15)

#### Parameters

##### \_args?

[`EventDispatcherArgs`](../interfaces/EventDispatcherArgs.md)

#### Returns

`EventDispatcher`

## Properties

### \_listeners

> `protected` **\_listeners**: `Record`\<`string`, `EventListener`[]\>

Defined in: [source/event_dispatcher.ts:13](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L13)

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event_dispatcher.ts:27](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L27)

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

If it was successfully added.

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event_dispatcher.ts:81](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L81)

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

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event_dispatcher.ts:97](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L97)

Check if there are listeners to a particular event type.

#### Parameters

##### type

`string`

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:71](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L71)

Remove all the event listeners.

#### Returns

`void`

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event_dispatcher.ts:50](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L50)

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
