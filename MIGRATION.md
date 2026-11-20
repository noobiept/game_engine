# Migrating from v3 to v4

v4 renames `remove()` to `destroy()`, changes what removing an element means, runs the game loop at the display's refresh rate, and fixes many bugs in ways that change how existing games behave. This guide goes through what to check, in order. Every change is listed in the [changelog](CHANGELOG.md).

Games use the engine in two ways, and some steps only apply to one of them: classes that **extend** the engine's elements (`class Tower extends Game.Rectangle`), or classes that **wrap** them (a `Ship` class that holds a `Game.Bitmap` in a `shape` property, and adds it to a container). Most games do some of both.

A game that only wraps the engine's elements may compile against v4 without a single error. Steps 1 and 3 then find nothing, and the whole update is in sections 4, 6, 7 and 8, which the compiler can't check.

**From v2**: first go through the **Breaking** entries of 3.0.0 in the [changelog](CHANGELOG.md). They change signatures and names (`Game.init()` takes an options object, for example), so the compiler reports most of them. A game on v2 also comes with `@drk4/utilities` v6 (through `Game.Utilities`), so section 8 applies to it as well.

Once the game runs on v4, see [Updating from an earlier v4](#updating-from-an-earlier-v4) at the end for what it can use instead of its own code (keyboard controls, game time, tests).

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

`Game.Utilities` is gone, so `@drk4/utilities` becomes a direct dependency, and the engine requires v8 of it. Update both together, to the latest 4.x (this guide uses what was added up to v4.4, like `Cooldown`, the game loop events, `Game.Timeout`, `Game.Stopwatch` and `override: "properties"`):

```sh
pnpm add @drk4/game-engine@^4.4.0 @drk4/utilities@^8.0.0
```

Then check the version that was installed (`pnpm list @drk4/game-engine`). With pnpm's `minimumReleaseAge` setting, releases newer than that age aren't installed right away:

- pnpm 12 adds the packages to `minimumReleaseAgeExclude` in `pnpm-workspace.yaml` by itself, and installs them (with `minimumReleaseAgeStrict`, it asks first).
- Older versions of pnpm can install an older 4.x instead of failing. Add both packages to `minimumReleaseAgeExclude` by hand to update within that time.

Either way, run your formatter on `pnpm-workspace.yaml` afterwards (pnpm writes it in its own style), and remove the entries left over from earlier updates (releases older than that age don't need one).

Right after a release, npm can list the new version a minute before its files can be downloaded, and the install then fails (with pnpm, `ERR_PNPM_TARBALL_SIBLING_FETCH_FAILED`). Try again a minute later.

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

Destroying an element also stops its tweens right away, which detaching doesn't. (In v4.0 to v4.2 the tweens were only stopped at the end of the frame, so a tween's `.call()` could still run for an element destroyed in that frame. A game that calls `Tween.removeTweens()` next to `destroy()` for that reason can drop it with v4.3.)

## 5. Container sizes

A container's `width`/`height` now covers its children correctly. v3 treated each child's `x`/`y` as its top-left corner (it's the center), so the size was off whenever the children weren't all at the same position. For example, a container with a 10×10 sprite and a health bar above it measured 15×17 in v3, and measures 10×13 in v4.

Check the game logic that uses a container's size: collision or hit radiuses, range checks, health bars, text positioned above an element.

## 6. The game loop runs at the display's refresh rate

v3 aimed for 35 updates per second, which ran at 30 on a 60Hz display. v4 updates on every animation frame by default: 60 times per second on most displays, and more on high refresh rate ones.

If the game called `setFps(n)` in v3, it ran **below** `n`: v3 skipped every animation frame that came less than `1000 / n` milliseconds (in whole milliseconds) after the last update. On a 60Hz display, `setFps(60)` ran at about 40 updates per second, and `setFps(30)` at 20. v4 keeps to the set rate, so check the game's balance against the rate it really ran at, not against `n`.

- Continuous movement should be scaled by `deltaTime` (it probably already is). But a step that happens once per timer (a beat, a turn, a move to the next tile) should be a fixed distance, not scaled by the `deltaTime` of the frame the timer happens to fire on. Otherwise the step's size depends on the frame rate (and in v3 it also varied from one step to the next).
- A tween started on each input (a move per key press), while the previous one may still be running: since v4.4.0, the newest tween's value is the one drawn, and `new Tween(element, { override: "properties" })` stops the previous move without stopping the element's other tweens (a fade-in). Before v4.4.0, the older tween's value was drawn until it ended, then the element jumped. `override: true` stops all the element's tweens.
- A tween started again on every update (to move an element while a key is held, for example) also depends on the frame rate: what's left of the tween when it stops being restarted (when the key is released) is a different distance at each rate. Tween to a target based on the time instead (`speed * deltaTime` ahead, plus a fixed glide, at the same speed), or move the element by `speed * deltaTime` in its logic.
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
    - **The start**: a counter set to the interval at the start (`count = interval`) waits a whole interval first, which is `new Game.Cooldown(interval, { ready: false })`. `new Game.Cooldown(interval)` is ready right away, so the first use happens on the first update. A timer that first waits a different time (a spawner that starts after 3 seconds, then spawns every second) is `new Game.Cooldown(firstDelay, { ready: false })`, then `restart(interval)` on each use (see below).
    - **Units**: a `Cooldown` is in seconds, like `deltaTime`. Convert counters in milliseconds.
    - **An interval that changes** (it gets faster as the game goes on): set `interval` at any time. It applies to the current interval, using the time that already passed.
    - **An interval that is different each time** (a random spawn time, or a first delay followed by a regular interval): pass the next one to `restart(nextInterval)` (added in v4.2.0). Setting `interval` before `restart()` would compare the time to the new interval, and lose the time past the one that ended.

    `Game.addToGameLoop(callback, { delay })` already keeps to the interval, for timers that don't belong to an element.

- Logic that changes the page (updating the text of a score, for example) runs 2 to 5 times as often. Only change the page when the value changes.
- `deltaTime` is limited to `0.25` seconds, so a long pause doesn't move the elements a big distance at once (see `Game.setMaxDeltaTime()`).
- To make the game behave the same on every display, run its logic at a fixed rate with `Game.setFixedTimestep()` (added in v4.3.0): the logic always gets the same `deltaTime`, and the drawing is still smooth at any refresh rate. With the rate the game really ran at in v3, it also gets close to v3's timing: `Game.setFixedTimestep(1 / 30)` for a game that didn't call `setFps()`. That's better than `Game.setFps(30)`, which also draws only 30 times per second. Elements moved to a new place at once (a respawn) should call `resetInterpolation()`, or they glide there during a step.
- Setting the rate the game really ran at in v3 with `setFps()` gets close to its old timing too: `Game.setFps(30)` for a game that didn't call `setFps()`, or `Game.setFps(40)` for one that called `setFps(60)`. It's a stopgap while updating a game whose balance depends on it.
- What runs outside of the loop doesn't pause with it. The loop pauses while the page is hidden and for `stopGameLoop()`, so the game freezes, but:
    - **Timeouts** (`setTimeout()`, or the utilities' `Timeout`) keep counting, and what they call runs while the game is frozen (the next level starts on a hidden page). Use `Game.Timeout` (added in v4.3.0), which has the same methods as the utilities' one but counts game time.
    - **A measured time** (a time shown in the page, or a score that is a time) keeps counting. When the time should stop with the game (a game played in real time, which freezes while the page is hidden), use `Game.Stopwatch` (added in v4.3.0), which adds up the game time. Stopping a utilities `Timer` on `pause` loses up to an interval (a second) every time (see section 8). When the score is the time the player took (a turn-based puzzle, where nothing happens while they think), keep a utilities `Timer`, which counts real time: a clock that stops on a hidden page lets the player think with it stopped.
    - **The engine's sounds** (`Game.Sound`) pause while the page is hidden since v4.3.0. They kept playing in v4.0 to v4.2. They don't pause for `stopGameLoop()`.
    - For anything else (music played through your own `AudioContext`, or sounds that should pause for `stopGameLoop()` too), use the `pause` and `resume` events (`Game.addEventListener("pause", ...)`, added in v4.2.0).

## 7. Other changes in behavior

Most games don't need to do anything for these, but check the ones a game uses:

- Elements only collide while they're in a canvas (directly or through containers), instead of from the moment they're created.
- `Circle` collides (and gets the mouse events) as a circle instead of as its bounding square.
- `EventDispatcher` calls the listeners in the order they were added (it used to be the reverse order). This only matters when an event has several listeners.
- Adding an element that is already in a container/canvas moves it (it used to end up in both).
- Repeating timers keep the time past their interval: game loop callbacks with a `delay`, sprite animations, weapon fire intervals and scrolling bitmaps run at the set rate. v3 dropped the time past the interval, which rounded every interval up to a whole number of updates. At v3's 30 updates per second, a sprite frame of 0.08 seconds took 0.1 (the animation is now 20% shorter), and an interval just above a multiple of 1/30 of a second (0.034) ran at nearly half its rate.
- The `container` of the `Html` elements is never `null`. `clear()` takes it out of the page, and `isCleared()` tells if it was called.
- `Game.Preload` dispatches `error` for every file that fails (error statuses, invalid json, files that can't be decoded). The `complete` event still comes once every file was dealt with, so check its `failedIds` before starting the game (a missing image otherwise only shows up later, as a broken element). Since v4.2.0 the listeners are typed. Since v4.3.0, `await preload.loadManifest(...)` rejects when a file that isn't `optional` fails, and `getImage()`, `getAudio()`, `getJson()` and `getText()` return `undefined` for a file that wasn't loaded (`get()` returns `any`, so using a missing file compiles).
- `HighScore.add()` throws before `init()` is called, and ignores values that aren't finite numbers.
- `Grid`, `SpatialPartition` and `PathFinding.breadthFirstSearch()` throw a `RangeError` for invalid arguments (a destination outside the map, for example). `breadthFirstSearch()` returns all `null` for a blocked destination.

## 8. `@drk4/utilities` v8

The utilities have breaking changes of their own (see [its changelog](https://github.com/noobiept/utilities/blob/master/CHANGELOG.md)). The ones games are most likely to notice:

- The utilities' own `Preload` (not `Game.Preload`) dispatches `error` for HTTP error statuses and for files that can't be parsed or decoded. A game that uses it and only listens to `complete` should check its `failed_ids` (with an underscore, unlike `Game.Preload`'s `failedIds`) before starting, or a missing file only shows up later as a crash when it's used.
- `Timer` counts real elapsed time. Its `onTick` is still called once per interval callback, but the browser slows those down in a background tab, and then the time jumps several seconds at once. Read `getTimeMilliseconds()` instead of counting `onTick` calls. A `Timer` also keeps running while the game loop is paused (a hidden page). Stopping it on the loop's `pause` event loses up to an interval each time, and a timer started while the loop is paused gets no `pause` event. Before v8, a `Timer` added its interval on each callback, which browsers run about once a second in a background tab, so a timer with an interval under a second nearly stopped while the page was hidden. Either way, what a hidden page does to a time is a decision to make (see "A measured time" in section 6).
- `Dialog` titles and bodies given as strings are set as plain text. Pass an `HTMLElement` for markup.
- A modal `Dialog` takes the focus when it opens, and makes the page behind it inert. A game that styles the dialog itself (instead of importing the utilities' `dialog.css`) should add `.dialog:focus { outline: none; }`, or the browser draws its focus ring around the whole dialog when it's opened from a key press.
- `getObject()` returns `null` for invalid JSON instead of throwing (with v7, corrupted saved data could stop a game from starting).
- `EventDispatcher` calls the listeners in the order they were added.

## 9. Testing the update

- Play the game at the refresh rates players have (60 and 120 or 144Hz), since the timing is what changed the most.
- Browsers driven by automation tools (like Playwright) run the animation frames at a rate that depends on the setup: 30Hz on some, the display's rate on others. Measure it (from a few `requestAnimationFrame` timestamps) before drawing conclusions about timing.
- Automation tools can keep every page visible, so switching tabs doesn't hide the page. To test what happens while the page is hidden, override `document.hidden` and dispatch a `visibilitychange` event, which is what the engine listens to.
- To check the timing in unit tests, stop the loop (`Game.stopGameLoop()`) and update the game by hand with `Game.step(deltaTime)` (added in v4.3.0), at the rates players have. `@drk4/game-engine/testing` (added in v4.4.0) has the setup for that: `stubCanvasContext()` and `stubAnimationFrames()` for jsdom, and `resetGame()` between the tests (see the README).

## Updating from an earlier v4

The steps above are for a game on v3 (or v2). A game already on v4 can skip them, and check what the later versions make unnecessary in it (every change is in the [changelog](CHANGELOG.md)):

- **v4.1**: `Game.Cooldown` replaces hand-written timers (section 6), and `destroyAllChildren()` a loop that destroys a container's children.
- **v4.2**: the game loop's `pause`/`resume` events, `Cooldown.restart(nextInterval)` for intervals that change each time, and typed `Preload` listeners.
- **v4.3**:
    - The engine's sounds pause while the page is hidden. Remove the game's own pausing of them on a hidden page (doing both pauses them twice).
    - `destroy()` stops the element's tweens right away, so a `Tween.removeTweens()` next to it isn't needed.
    - `Sound.play()` returns `null` for a file that failed to load, so the checks before it aren't needed.
    - `Game.Timeout` and `Game.Stopwatch` replace the utilities' `Timeout` and `Timer` for what should pause with the game.
    - `Game.Keyboard` replaces the game's own keyboard handling, `overlaps()` its own collision checks, `left`/`top`/`right`/`bottom` the conversions from the center, and `destroyOnEnd` the `animationend` listeners that destroy a one-shot sprite. `setFixedTimestep()` makes the game behave the same on every display, and `Game.step()` makes it testable.
- **v4.4**:
    - The sounds played before the player interacted with the page start on the first key press, click or touch. Remove the game's own listener that starts the music on the first key press.
    - `requireImage()` and the other `require*()` getters replace a game's own helper that checks what `getImage()` returns (or the `!` after it).
    - `@drk4/game-engine/testing` replaces a copy of the canvas stub, and resetting the engine by hand between tests.
    - With a fixed timestep, the timers of a whole number of steps fire on that step. Tests that allowed for an extra step can be exact.
    - When two tweens set the same property, the newest one's value is drawn, and `override: "properties"` stops the previous move only. Keeping each tween to `remove()` it before the next one isn't needed anymore (and `Tween.start()` returns the tween, for when it's kept).
    - `Keyboard.getPresses()` gives the presses in order, for a game where every press is an action.
