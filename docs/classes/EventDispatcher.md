[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / EventDispatcher

# Class: EventDispatcher

Defined in: [source/event_dispatcher.ts:24](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L24)

Base class that provides a way to add/remove listeners, and dispatch events.
Most engine classes extend it (every `Element`, `Preload`, etc.), which is how
you listen to their events with `addEventListener()`.

Basic Usage:

    const dispatcher = new Game.EventDispatcher();

    dispatcher.addEventListener( 'custom', function( data ) {
        console.log( 'got', data.value );
    });

    dispatcher.dispatchEvent( 'custom', { value: 42 } );

## Extended by

- [`Element`](Element.md)
- [`Preload`](Preload.md)

## Constructors

### Constructor

> **new EventDispatcher**(`_args?`): `EventDispatcher`

Defined in: [source/event_dispatcher.ts:27](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L27)

#### Parameters

##### \_args?

[`EventDispatcherArgs`](../interfaces/EventDispatcherArgs.md)

#### Returns

`EventDispatcher`

## Properties

### \_listeners

> `protected` **\_listeners**: `Record`\<`string`, `EventListener`[]\>

Defined in: [source/event_dispatcher.ts:25](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L25)

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event_dispatcher.ts:39](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L39)

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

Defined in: [source/event_dispatcher.ts:93](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L93)

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

Defined in: [source/event_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L109)

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

Defined in: [source/event_dispatcher.ts:83](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L83)

Remove all the event listeners.

#### Returns

`void`

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event_dispatcher.ts:62](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/event_dispatcher.ts#L62)

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
