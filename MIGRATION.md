# Migrating from v3 to v4

v4 renames `remove()` to `destroy()`, changes what removing an element means, runs the game loop at the display's refresh rate, and fixes many bugs in ways that change how existing games behave. This guide goes through what to check, in order. Every change is listed in the [changelog](CHANGELOG.md).

Games use the engine in two ways, and some steps only apply to one of them: classes that **extend** the engine's elements (`class Tower extends Game.Rectangle`), or classes that **wrap** them (a `Ship` class that holds a `Game.Bitmap` in a `shape` property, and adds it to a container). Most games do some of both.

## 1. Before updating: enable `noImplicitOverride`

For classes that extend the engine's elements, most of the renamed methods are ones that games override (`remove()` on their own elements), and the compiler doesn't report those: after the update, a game's `remove()` is a new method that happens to have the old name. The engine never calls it, so when the engine destroys the element itself (destroying a container destroys its children, for example) the game's cleanup is skipped.

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

`Game.Utilities` is gone, so `@drk4/utilities` becomes a direct dependency, and the engine requires v8 of it. Update both together, to the latest 4.x (this guide uses `Cooldown` from v4.1 and the game loop events from v4.2):

```sh
pnpm add @drk4/game-engine@^4.2.0 @drk4/utilities@^8.0.0
```

Then check the version that was installed (`pnpm list @drk4/game-engine`). With pnpm's `minimumReleaseAge` setting, releases newer than that age aren't installed, and pnpm can install an older 4.x instead of failing. To update within that time, add both packages to `minimumReleaseAgeExclude` in `pnpm-workspace.yaml` (and run your formatter on that file, since pnpm writes it in its own style).

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

Besides the compiler errors, search for what the compiler can't find (event names in strings, and hand-written "removed" flags), in your source folder:

```sh
grep -rnE "\.remove\(\)|_removed|isRemoved|['\"]remove['\"]" src/
```

In classes that wrap the engine's elements, this also finds their own `remove()` methods. Those aren't overrides, so there's nothing to rename: what matters is what they call on the element they hold (see the next step).

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

`removeChild()`, `removeAllChildren()` and `Game.removeElement()` only **detach** elements now: they're taken out right away, but they can be added again. `removeAllChildren()` used to destroy the children. Find the calls:

```sh
grep -rnE "\.(removeChild|removeAllChildren|removeElement)\(" src/
```

For each call, decide which one is meant:

- The element is added again later (a menu, a pooled object): keep the call.
- The element is gone for good (a bullet that hit something, clearing a level): destroy it with `destroy()`. When an element is always taken out through one method of your own (a `remove()` that also takes it out of your lists), destroy it there, which covers both the one-off removals and clearing a level. To destroy all of a container's children but keep the container (when its position in the canvas sets the drawing order, for example), use `destroyAllChildren()` (added in v4.1.0).

Destroying an element also stops its tweens, which detaching doesn't.

## 5. Container sizes

A container's `width`/`height` now covers its children correctly. v3 treated each child's `x`/`y` as its top-left corner (it's the center), so the size was off whenever the children weren't all at the same position. For example, a container with a 10×10 sprite and a health bar above it measured 15×17 in v3, and measures 10×13 in v4.

Check the game logic that uses a container's size: collision or hit radiuses, range checks, health bars, text positioned above an element.

## 6. The game loop runs at the display's refresh rate

v3 aimed for 35 updates per second, which ran at 30 on a 60Hz display. v4 updates on every animation frame by default: 60 times per second on most displays, and more on high refresh rate ones.

If the game called `setFps(n)` in v3, it ran **below** `n`: v3 skipped every animation frame that came less than `1000 / n` milliseconds (in whole milliseconds) after the last update. On a 60Hz display, `setFps(60)` ran at about 40 updates per second, and `setFps(30)` at 20. v4 keeps to the set rate, so check the game's balance against the rate it really ran at, not against `n`.

- Continuous movement should be scaled by `deltaTime` (it probably already is). But a step that happens once per timer (a beat, a turn, a move to the next tile) should be a fixed distance, not scaled by the `deltaTime` of the frame the timer happens to fire on. Otherwise the step's size depends on the frame rate (and in v3 it also varied from one step to the next).
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

    When translating a counter to a `Cooldown`:
    - **The start**: a counter set to the interval at the start (`count = interval`) waits a whole interval first, which is `new Game.Cooldown(interval, { ready: false })`. `new Game.Cooldown(interval)` is ready right away, so the first use happens on the first update.
    - **Units**: a `Cooldown` is in seconds, like `deltaTime`. Convert counters in milliseconds.
    - **An interval that changes** (it gets faster as the game goes on): set `interval` at any time. It applies to the current interval, using the time that already passed.
    - **An interval that is different each time** (a random spawn time): pass the next one to `restart(nextInterval)` (added in v4.2.0). Setting `interval` before `restart()` would compare the time to the new interval, and lose the time past the one that ended.

    `Game.addToGameLoop(callback, { delay })` already keeps to the interval, for timers that don't belong to an element.

- Logic that changes the page (updating the text of a score, for example) runs 2 to 5 times as often. Only change the page when the value changes.
- `deltaTime` is limited to `0.25` seconds, so a long pause doesn't move the elements a big distance at once (see `Game.setMaxDeltaTime()`).
- Setting the rate the game really ran at in v3 gets close to its old timing: `Game.setFps(30)` for a game that didn't call `setFps()`, or `Game.setFps(40)` for one that called `setFps(60)`. It's a stopgap while updating a game whose balance depends on it.
- What runs outside of the loop doesn't pause with it (a timer shown in the page, music played through your own `AudioContext`, a `setTimeout()`). The loop pauses while the page is hidden and for `stopGameLoop()`. Use the `pause` and `resume` events (`Game.addEventListener("pause", ...)`, added in v4.2.0) to stop and restart those with the game.

## 7. Other changes in behavior

Most games don't need to do anything for these, but check the ones a game uses:

- Elements only collide while they're in a canvas (directly or through containers), instead of from the moment they're created.
- `Circle` collides (and gets the mouse events) as a circle instead of as its bounding square.
- `EventDispatcher` calls the listeners in the order they were added (it used to be the reverse order). This only matters when an event has several listeners.
- Adding an element that is already in a container/canvas moves it (it used to end up in both).
- Repeating timers keep the time past their interval: game loop callbacks with a `delay`, sprite animations, weapon fire intervals and scrolling bitmaps run at the set rate, which is a bit faster than before.
- The `container` of the `Html` elements is never `null`. `clear()` takes it out of the page, and `isCleared()` tells if it was called.
- `Game.Preload` dispatches `error` for every file that fails (error statuses, invalid json, files that can't be decoded). The `complete` event still comes once every file was dealt with, so check its `failedIds` before starting the game (a missing image otherwise only shows up later, as a broken element). Since v4.2.0 the listeners are typed, so a wrong property name doesn't compile.
- `HighScore.add()` throws before `init()` is called, and ignores values that aren't finite numbers.
- `Grid`, `SpatialPartition` and `PathFinding.breadthFirstSearch()` throw a `RangeError` for invalid arguments (a destination outside the map, for example). `breadthFirstSearch()` returns all `null` for a blocked destination.

## 8. `@drk4/utilities` v8

The utilities have breaking changes of their own (see [its changelog](https://github.com/noobiept/utilities/blob/master/CHANGELOG.md)). The ones games are most likely to notice:

- The utilities' own `Preload` (not `Game.Preload`) dispatches `error` for HTTP error statuses and for files that can't be parsed or decoded. A game that uses it and only listens to `complete` should check its `failed_ids` (with an underscore, unlike `Game.Preload`'s `failedIds`) before starting, or a missing file only shows up later as a crash when it's used.
- `Timer` counts real elapsed time. Its `onTick` is still called once per interval callback, but the browser slows those down in a background tab, and then the time jumps several seconds at once. Read `getTimeMilliseconds()` instead of counting `onTick` calls. A `Timer` also keeps running while the game loop is paused (a hidden page), so stop it with the game (see the `pause`/`resume` events in section 6).
- `Dialog` titles and bodies given as strings are set as plain text. Pass an `HTMLElement` for markup.
- `getObject()` returns `null` for invalid JSON instead of throwing (with v7, corrupted saved data could stop a game from starting).
- `EventDispatcher` calls the listeners in the order they were added.

## 9. Testing the update

- Play the game at the refresh rates players have (60 and 120 or 144Hz), since the timing is what changed the most.
- Browsers driven by automation tools (like Playwright) run the animation frames at a rate that depends on the setup: 30Hz on some, the display's rate on others. Measure it (from a few `requestAnimationFrame` timestamps) before drawing conclusions about timing.
- Automation tools can keep every page visible, so switching tabs doesn't hide the page. To test what happens while the page is hidden, override `document.hidden` and dispatch a `visibilitychange` event, which is what the engine listens to.
