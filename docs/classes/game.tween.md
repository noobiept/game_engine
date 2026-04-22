[Game Engine](../README.md) › [Game](../modules/game.md) › [Tween](game.tween.md)

# Class: Tween

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

## Hierarchy

- **Tween**

## Index

### Modules

- [Ease](../modules/game.tween.ease.md)

### Constructors

- [constructor](game.tween.md#constructor)

### Properties

- [\_count](game.tween.md#protected-_count)
- [\_current_step](game.tween.md#protected-_current_step)
- [\_element](game.tween.md#protected-_element)
- [\_start_properties](game.tween.md#protected-_start_properties)
- [\_steps](game.tween.md#protected-_steps)
- [\_update](game.tween.md#protected-_update)
- [\_tweens](game.tween.md#static-_tweens)

### Methods

- [call](game.tween.md#call)
- [nextStep](game.tween.md#nextstep)
- [propertiesUpdate](game.tween.md#protected-propertiesupdate)
- [remove](game.tween.md#remove)
- [start](game.tween.md#start)
- [to](game.tween.md#to)
- [wait](game.tween.md#wait)
- [waitUpdate](game.tween.md#protected-waitupdate)
- [getTween](game.tween.md#static-gettween)
- [removeAll](game.tween.md#static-removeall)
- [removeTweens](game.tween.md#static-removetweens)
- [update](game.tween.md#static-update)

## Constructors

### constructor

\+ **new Tween**(`element`: Object): _[Tween](game.tween.md)_

_Defined in [tween.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L45)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `element` | Object |

**Returns:** _[Tween](game.tween.md)_

## Properties

### `Protected` \_count

• **\_count**: _number_

_Defined in [tween.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L44)_

---

### `Protected` \_current_step

• **\_current_step**: _[TweenStep](../interfaces/game.tweenstep.md)_

_Defined in [tween.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L42)_

---

### `Protected` \_element

• **\_element**: _Object_

_Defined in [tween.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L40)_

---

### `Protected` \_start_properties

• **\_start_properties**: _Object_

_Defined in [tween.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L43)_

---

### `Protected` \_steps

• **\_steps**: _[TweenStep](../interfaces/game.tweenstep.md)[]_

_Defined in [tween.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L41)_

---

### `Protected` \_update

• **\_update**: _function_

_Defined in [tween.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L45)_

#### Type declaration:

▸ (`delta`: number): _any_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `delta` | number |

---

### `Static` \_tweens

▪ **\_tweens**: _[Tween](game.tween.md)[]_ = []

_Defined in [tween.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L38)_

## Methods

### call

▸ **call**(`callback`: function): _this_

_Defined in [tween.ts:119](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L119)_

Call a given function.

**Parameters:**

▪ **callback**: _function_

The function to be called.

▸ (): _any_

**Returns:** _this_

The tween object for chaining.

---

### nextStep

▸ **nextStep**(): _void_

_Defined in [tween.ts:144](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L144)_

Move unto the next step in the tween animation.

**Returns:** _void_

---

### `Protected` propertiesUpdate

▸ **propertiesUpdate**(`deltaTime`: any): _void_

_Defined in [tween.ts:207](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L207)_

.to() tick logic.

**Parameters:**

| Name        | Type | Description                         |
| ----------- | ---- | ----------------------------------- |
| `deltaTime` | any  | Time elapsed since the last update. |

**Returns:** _void_

---

### remove

▸ **remove**(): _void_

_Defined in [tween.ts:133](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L133)_

Remove the tween.

**Returns:** _void_

---

### start

▸ **start**(): _void_

_Defined in [tween.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L62)_

Start the tween animation.

**Returns:** _void_

---

### to

▸ **to**(`properties`: Object, `duration`: number, `ease?`: function): _this_

_Defined in [tween.ts:78](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L78)_

Set the end value of some properties, and the animation duration.

**Parameters:**

▪ **properties**: _Object_

The `key` is the element's properties we want to animate, and the `value` is the value that property will have at the end of the animation.

▪ **duration**: _number_

Duration of the animation.

▪`Optional` **ease**: _function_

Ease function, that describes how the value of the property will progress between the animation.

▸ (`value`: number): _number_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `value` | number |

**Returns:** _this_

The tween object for chaining.

---

### wait

▸ **wait**(`duration`: number): _this_

_Defined in [tween.ts:102](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L102)_

Wait for some time doing nothing.

**Parameters:**

| Name       | Type   | Description           |
| ---------- | ------ | --------------------- |
| `duration` | number | Duration of the wait. |

**Returns:** _this_

The tween object for chaining.

---

### `Protected` waitUpdate

▸ **waitUpdate**(`deltaTime`: number): _void_

_Defined in [tween.ts:189](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L189)_

.wait() tick logic.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `deltaTime` | number | Time elapsed since the last update. |

**Returns:** _void_

---

### `Static` getTween

▸ **getTween**(`element`: Object): _[Tween](game.tween.md)‹›_

_Defined in [tween.ts:245](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L245)_

Returns an existing tween of an element, or null if there's no active tween working on the element.

**Parameters:**

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| `element` | Object | The element that has a tween animation. |

**Returns:** _[Tween](game.tween.md)‹›_

The associated tween object.

---

### `Static` removeAll

▸ **removeAll**(): _void_

_Defined in [tween.ts:283](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L283)_

Remove all the tween animations.

**Returns:** _void_

---

### `Static` removeTweens

▸ **removeTweens**(`element`: Object): _void_

_Defined in [tween.ts:266](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L266)_

Remove all the tweens of an element.

**Parameters:**

| Name      | Type   | Description                                               |
| --------- | ------ | --------------------------------------------------------- |
| `element` | Object | The element associated with the tweens we want to remove. |

**Returns:** _void_

---

### `Static` update

▸ **update**(`deltaTime`: number): _void_

_Defined in [tween.ts:294](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L294)_

Gets called in the game loop, to update all the tween animations.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `deltaTime` | number | Time elapsed since the last update. |

**Returns:** _void_
