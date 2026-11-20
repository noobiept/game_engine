[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Tween

# Class: Tween

Defined in: [source/tween.ts:61](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L61)

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

When two tweens set the same property at once, the newest one's value is the one that stays, but the older one
keeps running until it ends. To start a move from where the element is (a new move per key press), while its other
tweens keep going (a fade-in), use `override: "properties"`:

    new Game.Tween( block, { override: 'properties' } ).to( { x: 200, y: 100 }, 0.1 ).start();

Examples -- `2048`, `basic_example`, `clone`, `multiple_canvas`, `tween`

## Constructors

### Constructor

> **new Tween**(`element`, `options?`): `Tween`

Defined in: [source/tween.ts:73](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L73)

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

Defined in: [source/tween.ts:70](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L70)

---

### \_count

> `protected` **\_count**: `number`

Defined in: [source/tween.ts:68](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L68)

---

### \_current\_step

> `protected` **\_current\_step**: [`TweenStep`](../type-aliases/TweenStep.md) \| `null`

Defined in: [source/tween.ts:66](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L66)

---

### \_element

> `protected` **\_element**: `Record`\<`string`, `any`\>

Defined in: [source/tween.ts:64](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L64)

---

### \_override\_properties

> `protected` **\_override\_properties**: `boolean`

Defined in: [source/tween.ts:71](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L71)

---

### \_start\_properties

> `protected` **\_start\_properties**: `TweenProperties` \| `null`

Defined in: [source/tween.ts:67](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L67)

---

### \_steps

> `protected` **\_steps**: [`TweenStep`](../type-aliases/TweenStep.md)[]

Defined in: [source/tween.ts:65](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L65)

---

### \_update

> `protected` **\_update**: ((`delta`) => `any`) \| `null`

Defined in: [source/tween.ts:69](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L69)

---

### \_tweens

> `static` **\_tweens**: `Tween`[] = `[]`

Defined in: [source/tween.ts:62](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L62)

## Methods

### \_deactivate()

> `protected` **\_deactivate**(): `void`

Defined in: [source/tween.ts:233](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L233)

Stop updating the tween (when it's taken out of the tweens list).

#### Returns

`void`

---

### \_removeProperties()

> `protected` **\_removeProperties**(`properties`): `void`

Defined in: [source/tween.ts:187](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L187)

Stop animating some properties. A step left with nothing to animate still takes its time, so the steps after it
(a `.call()`) keep their timing.

#### Parameters

##### properties

`Set`\<`string`\>

#### Returns

`void`

---

### \_takeOverProperties()

> `protected` **\_takeOverProperties**(`properties`): `void`

Defined in: [source/tween.ts:175](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L175)

Take some properties out of the element's other tweens (for `override: "properties"`, when the step that animates
them starts).

#### Parameters

##### properties

`Set`\<`string`\>

#### Returns

`void`

---

### call()

> **call**(`callback`): `Tween`

Defined in: [source/tween.ts:162](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L162)

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

Defined in: [source/tween.ts:244](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L244)

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

Defined in: [source/tween.ts:315](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L315)

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

Defined in: [source/tween.ts:220](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L220)

Remove the tween (it stops, and the remaining steps aren't run).

#### Returns

`void`

---

### start()

> **start**(): `Tween`

Defined in: [source/tween.ts:95](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L95)

Start the tween animation.

#### Returns

`Tween`

The tween object, to keep it (and `remove()` it later): `const slide = new Tween( block ).to( ... ).start();`

---

### to()

> **to**(`properties`, `duration`, `ease?`): `Tween`

Defined in: [source/tween.ts:114](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L114)

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

Defined in: [source/tween.ts:147](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L147)

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

Defined in: [source/tween.ts:296](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L296)

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

Defined in: [source/tween.ts:358](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L358)

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

Defined in: [source/tween.ts:409](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L409)

Remove all the tween animations.

#### Returns

`void`

---

### removeProperties()

> `static` **removeProperties**(`element`, `properties`): `void`

Defined in: [source/tween.ts:380](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L380)

Stop animating some properties of an element, in all its tweens (they keep animating the rest, and their
`.call()` steps still run). For an element moved somewhere at once while a tween moves it (a teleport):

    Tween.removeProperties( player, [ 'x', 'y' ] );
    player.setPosition( 50, 50 );

#### Parameters

##### element

`object`

The element whose tweens animate the properties.

##### properties

readonly `string`[]

The names of the properties.

#### Returns

`void`

---

### removeTweens()

> `static` **removeTweens**(`element`): `void`

Defined in: [source/tween.ts:395](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L395)

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

Defined in: [source/tween.ts:422](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/tween.ts#L422)

Gets called in the game loop, to update all the tween animations.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`
