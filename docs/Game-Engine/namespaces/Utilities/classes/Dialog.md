[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Utilities](../README.md) / Dialog

# Class: Dialog

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:37

Create a dialog window with the given message.
Can be a modal (forces user interaction) or not.

Usage:

    const dialog = new Dialog({
        title: 'the title',
        body: 'the body'
    });
    dialog.open();

There's some basic styling available, that you can import in case there's no need for custom styling (may require to setup a css/style loader on your build configuration).

    import "@drk4/utilities/build/dialog.css";

## Constructors

### Constructor

> **new Dialog**(`args`): `Dialog`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:46

#### Parameters

##### args

[`DialogArgs`](../interfaces/DialogArgs.md)

#### Returns

`Dialog`

## Properties

### body

> `readonly` **body**: `HTMLElement`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:40

---

### buttons?

> `readonly` `optional` **buttons?**: `HTMLElement`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:41

---

### container

> `readonly` **container**: `HTMLElement`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:38

---

### title

> `readonly` **title**: `HTMLElement`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:39

## Methods

### close()

> **close**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:62

Remove the dialog from the page.

#### Returns

`void`

---

### isOpened()

> **isOpened**(): `boolean`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:66

Check if the dialog is opened or not.

#### Returns

`boolean`

---

### open()

> **open**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:58

Add the dialog to the page.

#### Returns

`void`

---

### setBody()

> **setBody**(`content`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:78

Change the body of the dialog.

#### Parameters

##### content

`string` \| `HTMLElement`

#### Returns

`void`

---

### setTitle()

> **setTitle**(`content`): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:74

Change the title of the dialog.

#### Parameters

##### content

`string` \| `HTMLElement`

#### Returns

`void`

---

### toggle()

> **toggle**(): `void`

Defined in: node_modules/.pnpm/@drk4+utilities@6.3.2/node_modules/@drk4/utilities/build/dialog/dialog.d.ts:70

Toggle between the open/close state.

#### Returns

`void`
