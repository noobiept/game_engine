[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Tween

# Class: Tween

Defined in: [source/tween.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L36)

Basic Usage:

    var rectangle = new Game.Rectangle({
            x: 10,
            y: 10,
            width: 10,
            height: 10,
            color: 'green'
        });
    Game.addElement( rectangle );

    var tween = new Game.Tween( rectangle );

    tween.to( { x: 200 }, 2 ).wait( 1 ).call( function()
        {
        console.log( 'Finished!' );
        }).start();

Examples -- `2048`, `basic_example`, `clone`, `multiple_canvas`, `tween`

## Constructors

### Constructor

> **new Tween**(`element`): `Tween`

Defined in: [source/tween.ts:46](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L46)

#### Parameters

##### element

`Object`

#### Returns

`Tween`

## Properties

### \_count

> `protected` **\_count**: `number`

Defined in: [source/tween.ts:43](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L43)

---

### \_current_step

> `protected` **\_current_step**: [`TweenStep`](../interfaces/TweenStep.md)

Defined in: [source/tween.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L41)

---

### \_element

> `protected` **\_element**: `Object`

Defined in: [source/tween.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L39)

---

### \_start_properties

> `protected` **\_start_properties**: `Object`

Defined in: [source/tween.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L42)

---

### \_steps

> `protected` **\_steps**: [`TweenStep`](../interfaces/TweenStep.md)[]

Defined in: [source/tween.ts:40](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L40)

---

### \_update

> `protected` **\_update**: (`delta`) => `any`

Defined in: [source/tween.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L44)

#### Parameters

##### delta

`number`

#### Returns

`any`

---

### \_tweens

> `static` **\_tweens**: `Tween`[] = `[]`

Defined in: [source/tween.ts:37](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L37)

## Methods

### call()

> **call**(`callback`): `Tween`

Defined in: [source/tween.ts:108](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L108)

Call a given function.

#### Parameters

##### callback

() => `any`

The function to be called.

#### Returns

`Tween`

The tween object for chaining.

---

### nextStep()

> **nextStep**(): `void`

Defined in: [source/tween.ts:129](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L129)

Move unto the next step in the tween animation.

#### Returns

`void`

---

### propertiesUpdate()

> `protected` **propertiesUpdate**(`deltaTime`): `void`

Defined in: [source/tween.ts:178](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L178)

.to() tick logic.

#### Parameters

##### deltaTime

`any`

Time elapsed since the last update.

#### Returns

`void`

---

### remove()

> **remove**(): `void`

Defined in: [source/tween.ts:120](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L120)

Remove the tween.

#### Returns

`void`

---

### start()

> **start**(): `void`

Defined in: [source/tween.ts:58](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L58)

Start the tween animation.

#### Returns

`void`

---

### to()

> **to**(`properties`, `duration`, `ease?`): `Tween`

Defined in: [source/tween.ts:72](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L72)

Set the end value of some properties, and the animation duration.

#### Parameters

##### properties

`Object`

The `key` is the element's properties we want to animate, and the `value` is the value that property will have at the end of the animation.

##### duration

`number`

Duration of the animation.

##### ease?

(`value`) => `number`

Ease function, that describes how the value of the property will progress between the animation.

#### Returns

`Tween`

The tween object for chaining.

---

### wait()

> **wait**(`duration`): `Tween`

Defined in: [source/tween.ts:93](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L93)

Wait for some time doing nothing.

#### Parameters

##### duration

`number`

Duration of the wait.

#### Returns

`Tween`

The tween object for chaining.

---

### waitUpdate()

> `protected` **waitUpdate**(`deltaTime`): `void`

Defined in: [source/tween.ts:163](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L163)

.wait() tick logic.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

---

### getTween()

> `static` **getTween**(`element`): `Tween`

Defined in: [source/tween.ts:211](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L211)

Returns an existing tween of an element, or null if there's no active tween working on the element.

#### Parameters

##### element

`Object`

The element that has a tween animation.

#### Returns

`Tween`

The associated tween object.

---

### removeAll()

> `static` **removeAll**(): `void`

Defined in: [source/tween.ts:241](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L241)

Remove all the tween animations.

#### Returns

`void`

---

### removeTweens()

> `static` **removeTweens**(`element`): `void`

Defined in: [source/tween.ts:228](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L228)

Remove all the tweens of an element.

#### Parameters

##### element

`Object`

The element associated with the tweens we want to remove.

#### Returns

`void`

---

### update()

> `static` **update**(`deltaTime`): `void`

Defined in: [source/tween.ts:250](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/tween.ts#L250)

Gets called in the game loop, to update all the tween animations.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`
