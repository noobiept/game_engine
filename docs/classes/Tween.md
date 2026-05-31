[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Tween

# Class: Tween

Defined in: [source/tween.ts:51](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L51)

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

> **new Tween**(`element`, `options?`): `Tween`

Defined in: [source/tween.ts:61](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L61)

#### Parameters

##### element

`object`

##### options?

[`TweenArgs`](../interfaces/TweenArgs.md)

#### Returns

`Tween`

## Properties

### \_count

> `protected` **\_count**: `number`

Defined in: [source/tween.ts:58](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L58)

---

### \_current_step

> `protected` **\_current_step**: [`TweenStep`](../type-aliases/TweenStep.md) \| `null`

Defined in: [source/tween.ts:56](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L56)

---

### \_element

> `protected` **\_element**: `Record`\<`string`, `any`\>

Defined in: [source/tween.ts:54](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L54)

---

### \_start_properties

> `protected` **\_start_properties**: `TweenProperties` \| `null`

Defined in: [source/tween.ts:57](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L57)

---

### \_steps

> `protected` **\_steps**: [`TweenStep`](../type-aliases/TweenStep.md)[]

Defined in: [source/tween.ts:55](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L55)

---

### \_update

> `protected` **\_update**: ((`delta`) => `any`) \| `null`

Defined in: [source/tween.ts:59](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L59)

---

### \_tweens

> `static` **\_tweens**: `Tween`[] = `[]`

Defined in: [source/tween.ts:52](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L52)

## Methods

### call()

> **call**(`callback`): `Tween`

Defined in: [source/tween.ts:134](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L134)

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

Defined in: [source/tween.ts:160](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L160)

Move unto the next step in the tween animation.

#### Returns

`void`

---

### propertiesUpdate()

> `protected` **propertiesUpdate**(`deltaTime`): `void`

Defined in: [source/tween.ts:213](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L213)

.to() tick logic.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

---

### remove()

> **remove**(): `void`

Defined in: [source/tween.ts:146](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L146)

Remove the tween.

#### Returns

`void`

---

### start()

> **start**(): `void`

Defined in: [source/tween.ts:78](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L78)

Start the tween animation.

#### Returns

`void`

---

### to()

> **to**(`properties`, `duration`, `ease?`): `Tween`

Defined in: [source/tween.ts:94](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L94)

Set the end value of some properties, and the animation duration.

#### Parameters

##### properties

`TweenProperties`

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

Defined in: [source/tween.ts:119](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L119)

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

Defined in: [source/tween.ts:194](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L194)

.wait() tick logic.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

---

### getTween()

> `static` **getTween**(`element`): `Tween` \| `null`

Defined in: [source/tween.ts:255](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L255)

Returns an existing tween of an element, or null if there's no active tween working on the element.

#### Parameters

##### element

`object`

The element that has a tween animation.

#### Returns

`Tween` \| `null`

The associated tween object.

---

### removeAll()

> `static` **removeAll**(): `void`

Defined in: [source/tween.ts:285](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L285)

Remove all the tween animations.

#### Returns

`void`

---

### removeTweens()

> `static` **removeTweens**(`element`): `void`

Defined in: [source/tween.ts:272](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L272)

Remove all the tweens of an element.

#### Parameters

##### element

`object`

The element associated with the tweens we want to remove.

#### Returns

`void`

---

### update()

> `static` **update**(`deltaTime`): `void`

Defined in: [source/tween.ts:294](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/tween.ts#L294)

Gets called in the game loop, to update all the tween animations.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`
