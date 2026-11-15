# Migrating from v3 to v4

v4 renames `remove()` to `destroy()`, changes what removing an element means, runs the game loop at the display's refresh rate, and fixes many bugs in ways that change how existing games behave. This guide goes through what to check, in order. Every change is listed in the [changelog](CHANGELOG.md).

## 1. Before updating: enable `noImplicitOverride`

Most of the renamed methods are ones that games override (`remove()` on their own elements), and the compiler doesn't report those: after the update, a game's `remove()` is a new method that happens to have the old name. The engine never calls it, so when the engine destroys the element itself (destroying a container destroys its children, for example) the game's cleanup is skipped.

TypeScript's [`noImplicitOverride`](https://www.typescriptlang.org/tsconfig/#noImplicitOverride) catches these. Enable it **while still on v3**:

```json
{
    "compilerOptions": {
        "noImplicitOverride": true
    }
}
```

1. On v3, it requires the `override` keyword on every method that overrides one of the engine's (error TS4114). Add them.
2. After updating to v4, each `override remove()` fails (error TS4113, the method isn't in the base class anymore), so the compiler points at every override of a renamed method.

## 2. Install

`Game.Utilities` is gone, so `@drk4/utilities` becomes a direct dependency, and the engine requires v8 of it. Update both together:

```sh
pnpm add @drk4/game-engine@4 @drk4/utilities@8
```

Then replace `Game.Utilities` with a direct import:

```ts
import * as Utilities from "@drk4/utilities";
```

## 3. `remove()` is now `destroy()`

| v3                        | v4                         |
| ------------------------- | -------------------------- |
| `element.remove()`        | `element.destroy()`        |
| `element.isRemoved()`     | `element.isDestroyed()`    |
| `weapon.remove()`         | `weapon.destroy()`         |
| `movement.remove()`       | `movement.destroy()`       |
| `Bullet` event `"remove"` | `Bullet` event `"destroy"` |

Besides the compiler errors, search for what the compiler can't find (event names in strings, and hand-written "removed" flags):

```sh
grep -rnE "\.remove\(\)|_removed|isRemoved|['\"]remove['\"]" src/
```

`isDestroyed()` is `true` right after `destroy()` (only taking the element out waits for the end of the frame), so it replaces a hand-written flag as a guard:

```ts
// v3
remove() {
    if (this.removed) {
        return;
    }
    this.removed = true;
    super.remove();
    // ...cleanup
}

// v4
override destroy() {
    if (this.isDestroyed()) {
        return;
    }
    super.destroy();
    // ...cleanup
}
```

## 4. Detaching versus destroying

`removeChild()`, `removeAllChildren()` and `Game.removeElement()` only **detach** elements now: they're taken out right away, but they can be added again. `removeAllChildren()` used to destroy the children. For each call, decide which one is meant:

- The element is added again later (a menu, a pooled object): keep the call.
- The element is gone for good (clearing a level): destroy it with `destroy()`. To destroy all of a container's children but keep the container (when its position in the canvas sets the drawing order, for example), use `destroyAllChildren()` (added in v4.1.0).

Destroying an element also stops its tweens, which detaching doesn't.

## 5. Container sizes

A container's `width`/`height` now covers its children correctly. v3 treated each child's `x`/`y` as its top-left corner (it's the center), so the size was off whenever the children weren't all at the same position. For example, a container with a 10×10 sprite and a health bar above it measured 15×17 in v3, and measures 10×13 in v4.

Check the game logic that uses a container's size: collision or hit radiuses, range checks, health bars, text positioned above an element.

## 6. The game loop runs at the display's refresh rate

v3 aimed for 35 updates per second (which ran at 30 on a 60Hz display). v4 updates on every animation frame by default: 60 times per second on most displays, and more on high refresh rate ones.

- Movement should be scaled by `deltaTime` (it probably already is).
- Repeating timers that reset their counter lose part of a frame every time, so their rate depends on the display. For a tower that attacks 5 times per second:

    | Refresh rate     | Attacks per second |
    | ---------------- | ------------------ |
    | 30Hz (v3's loop) | 4.62               |
    | 60Hz             | 4.80               |
    | 144Hz            | 4.96               |

    Use `Game.Cooldown` (added in v4.1.0) for these timers. It keeps the time past the interval, and doesn't build up time while it waits to be used (a tower without a target in range):

    ```ts
    // v3
    this.attackCount -= deltaTime;

    if (this.attackCount <= 0 && target) {
        this.attackCount = this.attackInterval; // loses up to a frame per attack
        this.attack(target);
    }

    // v4
    this.attackCooldown.update(deltaTime);

    if (this.attackCooldown.isReady() && target) {
        this.attackCooldown.restart(); // keeps the time past the interval
        this.attack(target);
    }
    ```

    `Game.addToGameLoop(callback, { delay })` already keeps to the interval, for timers that don't belong to an element.

- Logic that changes the page (updating the text of a score, for example) runs 2 to 5 times as often. Only change the page when the value changes.
- `deltaTime` is limited to `0.25` seconds, so a long pause doesn't move the elements a big distance at once (see `Game.setMaxDeltaTime()`).
- `Game.setFps(30)` gets close to v3's timing. It's a stopgap while updating a game whose balance depends on it.
- Browsers driven by automation tools can run the animation frames at 30Hz (Chrome driven by Playwright, for example), so automated play doesn't show what happens on a 60 or 144Hz display.

## 7. Other changes in behavior

Most games don't need to do anything for these, but check the ones a game uses:

- Elements only collide while they're in a canvas (directly or through containers), instead of from the moment they're created.
- `Circle` collides (and gets the mouse events) as a circle instead of as its bounding square.
- `EventDispatcher` calls the listeners in the order they were added (it used to be the reverse order). This only matters when an event has several listeners.
- Adding an element that is already in a container/canvas moves it (it used to end up in both).
- Repeating timers keep the time past their interval: game loop callbacks with a `delay`, sprite animations, weapon fire intervals and scrolling bitmaps run at the set rate, which is a bit faster than before.
- The `container` of the `Html` elements is never `null`. `clear()` takes it out of the page, and `isCleared()` tells if it was called.
- `Game.Preload` dispatches `error` for every file that fails (error statuses, invalid json, files that can't be decoded).
- `HighScore.add()` throws before `init()` is called, and ignores values that aren't finite numbers.
- `Grid`, `SpatialPartition` and `PathFinding.breadthFirstSearch()` throw a `RangeError` for invalid arguments (a destination outside the map, for example). `breadthFirstSearch()` returns all `null` for a blocked destination.

## 8. `@drk4/utilities` v8

The utilities have breaking changes of their own (see [its changelog](https://github.com/noobiept/utilities/blob/master/CHANGELOG.md)). The ones games are most likely to notice:

- `Preload` dispatches `error` for HTTP error statuses and for files that can't be parsed or decoded. A game that only listens to `complete` should check `failed_ids` before starting, or a missing file only shows up later as a crash when it's used.
- `Dialog` titles and bodies given as strings are set as plain text. Pass an `HTMLElement` for markup.
- `getObject()` returns `null` for invalid JSON instead of throwing (with v7, corrupted saved data could stop a game from starting).
- `EventDispatcher` calls the listeners in the order they were added.
