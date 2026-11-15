[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Tween

# Class: Tween

Defined in: [tween.ts:51](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L51)

Basic Usage:

    const rectangle = new Game.Rectangle({
            x: 10,
            y: 10,
            width: 10,
            height: 10,
            color: 'green'
        });
    Game.addElement( rectangle );

    const tween = new Game.Tween( rectangle );

    tween.to( { x: 200 }, 2 ).wait( 1 ).call( function()
        {
        console.log( 'Finished!' );
        }).start();

Examples -- `2048`, `basic_example`, `clone`, `multiple_canvas`, `tween`

## Constructors

### Constructor

> **new Tween**(`element`, `options?`): `Tween`

Defined in: [tween.ts:62](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L62)

#### Parameters

##### element

`object`

##### options?

[`TweenArgs`](../interfaces/TweenArgs.md)

#### Returns

`Tween`

## Properties

### \_active

> `protected` **\_active**: `boolean`

Defined in: [tween.ts:60](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L60)

---

### \_count

> `protected` **\_count**: `number`

Defined in: [tween.ts:58](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L58)

---

### \_current\_step

> `protected` **\_current\_step**: [`TweenStep`](../type-aliases/TweenStep.md) \| `null`

Defined in: [tween.ts:56](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L56)

---

### \_element

> `protected` **\_element**: `Record`\<`string`, `any`\>

Defined in: [tween.ts:54](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L54)

---

### \_start\_properties

> `protected` **\_start\_properties**: `TweenProperties` \| `null`

Defined in: [tween.ts:57](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L57)

---

### \_steps

> `protected` **\_steps**: [`TweenStep`](../type-aliases/TweenStep.md)[]

Defined in: [tween.ts:55](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L55)

---

### \_update

> `protected` **\_update**: ((`delta`) => `any`) \| `null`

Defined in: [tween.ts:59](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L59)

---

### \_tweens

> `static` **\_tweens**: `Tween`[] = `[]`

Defined in: [tween.ts:52](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L52)

## Methods

### \_deactivate()

> `protected` **\_deactivate**(): `void`

Defined in: [tween.ts:162](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L162)

Stop updating the tween (when it's taken out of the tweens list).

#### Returns

`void`

---

### call()

> **call**(`callback`): `Tween`

Defined in: [tween.ts:137](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L137)

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

> **nextStep**(`leftover?`): `void`

Defined in: [tween.ts:173](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L173)

Move unto the next step in the tween animation.

#### Parameters

##### leftover?

`number` = `0`

Time (in seconds) left over from the previous step, which is applied to this step (so the steps don't fall behind).

#### Returns

`void`

---

### propertiesUpdate()

> `protected` **propertiesUpdate**(`deltaTime`): `void`

Defined in: [tween.ts:238](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L238)

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

Defined in: [tween.ts:149](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L149)

Remove the tween (it stops, and the remaining steps aren't run).

#### Returns

`void`

---

### start()

> **start**(): `void`

Defined in: [tween.ts:80](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L80)

Start the tween animation.

#### Returns

`void`

---

### to()

> **to**(`properties`, `duration`, `ease?`): `Tween`

Defined in: [tween.ts:97](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L97)

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

Defined in: [tween.ts:122](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L122)

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

Defined in: [tween.ts:219](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L219)

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

Defined in: [tween.ts:281](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L281)

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

Defined in: [tween.ts:312](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L312)

Remove all the tween animations.

#### Returns

`void`

---

### removeTweens()

> `static` **removeTweens**(`element`): `void`

Defined in: [tween.ts:298](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L298)

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

Defined in: [tween.ts:325](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/tween.ts#L325)

Gets called in the game loop, to update all the tween animations.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`
