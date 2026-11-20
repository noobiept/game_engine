[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Keyboard

# Class: Keyboard\<Action\>

Defined in: [source/keyboard.ts:57](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L57)

Keyboard controls: name the game's actions and bind keys to them when the game starts, then the game code only asks
about the actions (`isHeld( 'left' )`), not about the keys.

- The keys are `KeyboardEvent.code` values: the key's position on the keyboard (`KeyW`, `ArrowLeft`, `Space`,
  `Digit1`), named after a US keyboard. They're the same with any keyboard layout (`KeyW` is the key labeled Z on a
  French keyboard, where players expect it), and they don't change with `Shift` (so a key can't get stuck held).
- `wasPressed()`/`wasReleased()` are true for one update of the game loop, even when the key was pressed and released
  between two updates (a quick tap isn't lost). A key held down doesn't count as pressed again (no auto-repeat).
- The keys are let go when the window loses the focus (their `keyup` goes to another window), when the game loop
  pauses, and when `Cmd` is released (on macOS, the browsers don't send the other keys' `keyup` while it's held).
  Keys pressed while the loop is paused don't count as pressed when it resumes.
- Keys typed in a form field (an `<input>`, `<textarea>`, `<select>` or an editable element) are ignored.
- The bound keys don't do their default browser action (the arrows and space scroll the page), see `preventDefault`.
  With `Ctrl`, `Cmd` or `Alt` held they do, so the browser's shortcuts keep working (`Cmd + R` reloads the page).

The action names are checked by TypeScript (`isHeld( 'lefft' )` doesn't compile). Several objects can be used at
the same time (a player on WASD, another one on the arrows).

Basic Usage:

    const controls = new Game.Keyboard({
        left: [ 'ArrowLeft', 'KeyA' ],
        right: [ 'ArrowRight', 'KeyD' ],
        fire: 'Space',
    });

    Game.addToGameLoop( function( deltaTime ) {
        if ( controls.isHeld( 'left' ) ) {
            player.x -= 100 * deltaTime;
        }

        if ( controls.wasPressed( 'fire' ) ) {
            player.fire();
        }
    });

    controls.setKeys( 'fire', [ 'Space', 'Enter' ] ); // change the keys (an options screen, for example)

## Type Parameters

### Action

`Action` _extends_ `string`

## Constructors

### Constructor

> **new Keyboard**\<`Action`\>(`actions`, `options?`): `Keyboard`\<`Action`\>

Defined in: [source/keyboard.ts:65](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L65)

#### Parameters

##### actions

`Record`\<`Action`, [`KeyboardKeys`](../type-aliases/KeyboardKeys.md)\>

The keys of each action (`KeyboardEvent.code` values).

##### options?

[`KeyboardOptions`](../interfaces/KeyboardOptions.md)

`preventDefault` (default `true`): the bound keys don't do their default browser action.

#### Returns

`Keyboard`\<`Action`\>

## Properties

### \_bindings

> `protected` **\_bindings**: `Map`\<`Action`, `string`[]\>

Defined in: [source/keyboard.ts:58](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L58)

---

### \_prevent\_default

> `protected` **\_prevent\_default**: `boolean`

Defined in: [source/keyboard.ts:59](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L59)

## Methods

### \_preventsDefault()

> **\_preventsDefault**(`code`): `boolean`

Defined in: [source/keyboard.ts:172](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L172)

If the default browser action of a key should be prevented (when it's bound to an action of this object).

#### Parameters

##### code

`string`

#### Returns

`boolean`

---

### \_some()

> `protected` **\_some**(`action`, `keys`): `boolean`

Defined in: [source/keyboard.ts:163](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L163)

#### Parameters

##### action

`Action`

##### keys

`Set`\<`string`\>

#### Returns

`boolean`

---

### destroy()

> **destroy**(): `void`

Defined in: [source/keyboard.ts:159](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L159)

Stop using this object: its keys aren't kept from their default browser action anymore.

#### Returns

`void`

---

### getKeys()

> **getKeys**(`action`): `string`[]

Defined in: [source/keyboard.ts:139](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L139)

The keys of an action (to show them in the game's help, for example).

#### Parameters

##### action

`Action`

#### Returns

`string`[]

---

### getPresses()

> **getPresses**(): `Action`[]

Defined in: [source/keyboard.ts:110](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L110)

The actions pressed since the last update, in the order of the presses, once per press (a key pressed twice is
there twice). For games where every press is an action (a move in a turn-based game), so the presses within one
update (a slow device, a stalled frame) aren't lost or reordered, which `wasPressed()` can't tell.

    for ( const action of controls.getPresses() ) {
        move( action );
    }

#### Returns

`Action`[]

---

### hasKey()

> **hasKey**(`code`): `boolean`

Defined in: [source/keyboard.ts:146](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L146)

Tells if a key is bound to any of the actions.

#### Parameters

##### code

`string`

#### Returns

`boolean`

---

### isHeld()

> **isHeld**(`action`): `boolean`

Defined in: [source/keyboard.ts:83](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L83)

If any of the keys of the action is held down.

#### Parameters

##### action

`Action`

#### Returns

`boolean`

---

### setKeys()

> **setKeys**(`action`, `keys`): `void`

Defined in: [source/keyboard.ts:129](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L129)

Change the keys of an action.

#### Parameters

##### action

`Action`

##### keys

[`KeyboardKeys`](../type-aliases/KeyboardKeys.md)

One key, or several (`KeyboardEvent.code` values).

#### Returns

`void`

---

### wasPressed()

> **wasPressed**(`action`): `boolean`

Defined in: [source/keyboard.ts:90](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L90)

If any of the keys of the action was pressed since the last update (it can be released already).

#### Parameters

##### action

`Action`

#### Returns

`boolean`

---

### wasReleased()

> **wasReleased**(`action`): `boolean`

Defined in: [source/keyboard.ts:97](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/keyboard.ts#L97)

If any of the keys of the action was released since the last update.

#### Parameters

##### action

`Action`

#### Returns

`boolean`
