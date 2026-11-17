# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Releases before `3.0.0` are not tracked here. To update a game from v3 to v4,
see the [migration guide](MIGRATION.md).

## [Unreleased]

### Added

- `@drk4/game-engine/testing`, with helpers to test a game in jsdom:
  `stubCanvasContext()`, `stubAnimationFrames()` (the game is updated with
  `Game.step()`), and `resetGame()`, which leaves the engine as if it was just
  loaded, so a test doesn't affect the next one (no game loop callbacks, tweens,
  event listeners, held keys or preloaded files are left). It's a separate
  entry, so it isn't in a game's bundle.
- `requireImage()`, `requireAudio()`, `requireJson<T>()` and `requireText()` on
  `Preload` (and on `Game.Preload`, for `saveGlobal`), for the files a game
  can't run without: they return the file (not `undefined`, so it can be given
  to a `Bitmap` or `Sprite` as is), or throw an error naming the id.

### Changed

- The sounds played before the player interacted with the page (browsers keep
  the audio suspended until then) start on the first key press, click or
  touch, so a game doesn't need a listener of its own to start its music.
- The migration guide covers games already on an earlier v4 (what each version
  makes unnecessary), pnpm 12 adding the `minimumReleaseAgeExclude` entries by
  itself, and a release that can't be downloaded for a minute.
- The package is built in three files: `game_engine.js` (the main entry),
  `testing.js`, and `engine.js` (the engine's code, which both use, so the
  testing helpers reset the engine that the game uses).

### Fixed

- The examples in the documentation of `Preload` and in the README's "Loading
  assets" didn't compile (an image that can be `undefined` given to a
  `Bitmap`, and a `return` outside of a function), and the ones of `Bitmap`,
  `Sprite`, `ScrollingBitmap` and `Sound` used `get()` (`any`).
- With a fixed timestep, a timer of a whole number of steps took one more step,
  for some intervals (adding up steps of `1 / 60` gives a rounding error: a
  `Cooldown` of 0.5 seconds was ready after 31 steps, and "every 2 seconds"
  was 121 steps). The timers compare their time with a tiny tolerance now: the
  `Cooldown`, game loop callbacks with a `delay`, `Game.Timeout`, sprite
  animations, scrolling bitmaps, weapon fire intervals and tween steps.

## [4.3.0] - 2026-11-17

Improvements from updating a third game to v4: a fixed update rate (with smooth
drawing at any refresh rate), keyboard controls with named actions, sounds that
pause while the page is hidden, game time for timeouts and measured times,
safer loading, tweens that stop as soon as their element is destroyed, and a
few conveniences (`overlaps()`, `Game.step()`, positioning by the edges).

### Added

- `Game.setFixedTimestep()`, to run the game logic at a fixed rate (the
  callbacks, tweens, `logic()` and collisions always get the same `deltaTime`,
  as many times as the time that passed calls for), while drawing on every
  animation frame. The elements are drawn between the last two steps (their
  position, rotation, scale and opacity), so they move smoothly on displays
  that refresh faster than the steps. `resetInterpolation()` draws an element
  that was moved to a new place at once right there, and `getFixedTimestep()`
  tells the current one. Custom elements can use `_applyTransform()` in their
  `drawElement()` to be drawn between the steps too.
- `element.overlaps(other)`, which tells if two elements overlap right now
  (with their current positions, and of the containers they're in), for a game
  that checks it in its own logic instead of waiting for the `collision` event.
  It uses the same shapes as the collision detection, but not the categories.
- `Game.Keyboard`, for keyboard controls: the game names its actions and binds
  keys to them (`new Game.Keyboard({ left: ["ArrowLeft", "KeyA"] })`), then asks
  `isHeld("left")`, `wasPressed()` or `wasReleased()`. The action names are
  checked by TypeScript, the keys are `KeyboardEvent.code` values (the same with
  any layout or `Shift`), a quick tap between two updates isn't lost,
  auto-repeat is ignored, the keys are let go when the window loses the focus
  or the loop pauses, keys typed in form fields are ignored, and the bound keys
  don't scroll the page (the browser's shortcuts, with ctrl, cmd or alt held,
  keep working). `setKeys()` changes the keys of an action.
- `Game.Timeout` and `Game.Stopwatch`, which count game time (they run on the
  game loop, so they pause with it): a timeout with the methods of the
  utilities' `Timeout` (in seconds), and a stopwatch to measure a time that is
  shown or scored.
- `Preload.loadManifest()` returns a promise, which rejects with a
  `PreloadError` when a file that isn't `optional` fails to load (manifest
  entries take an `optional` flag). An `await` that isn't caught makes a
  missing file an error, instead of a game that starts without it.
- `getImage()`, `getAudio()`, `getJson<T>()` and `getText()` on `Preload` (and
  on `Game.Preload`, for `saveGlobal`), which return `undefined` for a file that
  wasn't loaded (or is of another type), so TypeScript makes the game check.
- `Game.Sound.setPauseWhenHidden()`.
- `Game.step(deltaTime)`, to update the game by hand while the loop is stopped
  (for tests of a game's timing).
- Setters for `left` and `top`, and `right`/`bottom` (getters and setters), to
  position an element by its edges.
- A `destroyOnEnd` option for `Sprite.play()`, which destroys the sprite once a
  non-looping animation ends.

### Changed

- The sounds pause while the page is hidden (like the game loop): `Sound`
  suspends its audio context then, and doesn't resume it for a sound that
  starts while the page is hidden. They kept playing in background tabs.
  `Game.Sound.setPauseWhenHidden(false)` keeps them playing. They don't pause
  for `stopGameLoop()` (the `pause`/`resume` events are for that).
- `destroy()` stops the element's tweens right away, instead of at the end of
  the frame, so a tween's `.call()` no longer runs for an element destroyed
  earlier in that frame.
- `Sound.play()` returns `null` for something that isn't an audio buffer (like
  a file that failed to load), instead of a `SoundInstance` that throws later.
- A `Cooldown` keeps the time past an interval of `0`, and doesn't count an
  interval that just started (`{ ready: false }`, or `restart()`) as waiting
  in its first update. A timer with a first delay of `0` (then
  `restart(interval)`) was one update late on every use.
- The migration guide covers more: games that compile without errors, timeouts
  and measured times, the sounds, tweens restarted on every update, timers with
  a first delay, how much faster the repeating timers are than in v3, and the
  leftover `minimumReleaseAgeExclude` entries.

### Fixed

- The `Game.addEventListener()` example called `music.suspend()`, which
  `SoundInstance` doesn't have (it's `pause()`).

## [4.2.0] - 2026-11-15

Improvements from updating a second game to v4 (one that wraps the engine's
elements instead of extending them): game loop events, typed `Preload` events,
random intervals with `Cooldown`, and a more complete migration guide.

### Added

- `Game.addEventListener()` and `Game.removeEventListener()`, with the `pause`
  and `resume` events of the game loop (dispatched when the page is hidden or
  visible again, and for `stopGameLoop()`/`startGameLoop()`), to stop what runs
  outside of the loop with the game (a timer in the page, music, timeouts).
- `Cooldown.restart(nextInterval)`, for intervals that change each time (a
  random spawn time). It keeps the time past the interval that ended, which
  setting `interval` before `restart()` didn't.
- The `PreloadCompleteData` and `PreloadEvents` types.

### Changed

- `Preload.addEventListener()` and `removeEventListener()` are typed: the event
  name has to be one of `Preload`'s, and the listener gets that event's data
  (it was `any`). A wrong event name, or a wrong property of the data (like
  `failed_ids` instead of `failedIds`), no longer compiles.
- The `setFps()` documentation and the 4.0.0 entry below say what v3's
  `setFps()` actually did (it ran well below the set rate, for example about 40
  updates per second for `setFps(60)` on a 60Hz display), and that the time
  between updates varies when the rate doesn't divide the display's refresh
  rate.
- The migration guide covers more: installing the latest 4.x, games that wrap
  the engine's elements, games that called `setFps()`, steps that happen once
  per timer, translating counters to a `Cooldown`, `Game.Preload`'s
  `failedIds`, the utilities' `Timer`, and testing with automation tools.

## [4.1.0] - 2026-11-15

Improvements from updating a game to v4: a way to destroy a container's
children, a cooldown timer for game code, and a v3 to v4
[migration guide](MIGRATION.md).

### Added

- `Container.destroyAllChildren()`, which destroys all the children but keeps
  the container (for a layer that sets the drawing order, for example).
- `Game.Cooldown`, a timer for an action that can only happen once per
  interval (an attack, a spawn, health regeneration). It keeps the time past
  the interval like the engine's own timers do, so the rate doesn't depend on
  the display, and doesn't build up time while it waits to be used.
- A [migration guide](MIGRATION.md) for updating a game from v3 to v4
  (included in the npm package).

### Changed

- `getAllChildren()` (of `Container` and `Canvas`) is typed as returning a
  `readonly Element[]`, since it's the container's own list. Code that changes
  it, or passes it to a function that takes an `Element[]`, has to copy it
  first (with `slice()`), which TypeScript now reports.
- `Weapon` uses a `Cooldown` for its fire interval (the protected `_is_ready`
  and `_fire_count` are replaced by `_cooldown`). `fireInterval` throws a
  `RangeError` for a value that isn't a number `>= 0`, and changing it applies
  to the current interval, also when the weapon is ready (it uses the time
  since the last shot).
- The engine is type checked with `noImplicitOverride` (as are the examples),
  which the README now recommends for games: when a new version renames a
  method, the compiler reports the game's overrides of it.
- The `setFps()` documentation says that `setFps(30)` gets close to v3's
  timing.
- The 4.0.0 entry for the container size fix is moved to **Changed** and
  marked as **Breaking**, since it changes how existing games behave.
- The `tower_defense` example destroys the level's elements when restarting
  (it detached them), and its towers and creeps destroy their weapon and
  movement.

### Fixed

- Passing a container's own `getAllChildren()` to its `removeChild()`, to
  another container's `addChild()`, or to `Game.removeElement()`, skipped every
  other element (the list changed while it was gone through).

## [4.0.0] - 2026-11-15

A major release with a pass of bug fixes and a few API changes for clarity:
`remove()` is now `destroy()`, `removeChild()` detaches an element (so it can
be added again), and `@drk4/utilities` is imported directly instead of through
`Game.Utilities`. Many of the fixes change how existing games behave, so check
the **Breaking** entries when updating.

### Changed

- **Breaking**: clearer removal of elements, in line with PixiJS. `remove()`
  is renamed `destroy()` (and `isRemoved()` is `isDestroyed()`), which
  **destroys** an element: it stops colliding right away, and at the end of the
  frame it's taken out of its container/canvas and its tweens are stopped
  (destroying a container destroys its children). `removeChild()`,
  `removeAllChildren()` and `Game.removeElement()` **detach** an element right
  away: it's no longer drawn, updated or considered in the collision detection,
  and it can be added again later. `removeAllChildren()` used to destroy the
  children, `Game.removeElement()` now also detaches elements that are in a
  container, and `Container.removeChild()` returns whether an element was
  detached.
- **Breaking**: `Weapon.remove()` and `Movement.remove()` are renamed
  `destroy()`, and the `Bullet` event `remove` is renamed `destroy`.
- **Breaking**: elements only take part in the collision detection while
  they're in a canvas (directly or through containers), instead of from the
  moment they're created. Elements can now be created before `Game.init()`.
- **Breaking**: adding an element that is already in a container/canvas moves
  it (it used to end up in both). Adding a destroyed element, or a container to
  itself or to one of its children, throws.
- **Breaking**: by default the game loop updates on every animation frame (at
  the display's refresh rate), instead of trying to run at 35 fps, which
  actually ran at 30 on a 60Hz display. `setFps()` limits it, and now keeps to
  the set rate. It used to run well below it: it skipped every animation frame
  that came less than `1000 / fps` milliseconds (in whole milliseconds) after
  the last update, so on a 60Hz display `setFps(60)` ran at about 40 updates
  per second and `setFps(30)` at 20. A game that called `setFps(60)` updates
  50% more often in v4. `setFps(Infinity)` removes the limit, and `setFps()`
  throws a `RangeError` for a value that isn't a positive number.
- **Breaking**: `deltaTime` is limited to `0.25` seconds, so a long pause
  doesn't move the elements a big distance at once (see `setMaxDeltaTime()`).
- **Breaking**: repeating timers keep the time past their interval instead of
  dropping it, so they no longer run slower than set: game loop callbacks with
  a `delay`, sprite animations (which advance several frames when several
  intervals passed), weapon fire intervals, and scrolling bitmaps. Tween steps
  pass the time left over to the next step. A game loop callback is called at
  most once per update.
- **Breaking**: an element that is destroyed or detached during the logic
  isn't updated for the rest of that frame, and a destroyed element doesn't
  collide with anything else in that frame (both elements of a collision still
  get the event).
- **Breaking**: `Circle` collides (and gets the mouse events) as a circle (a
  16-sided polygon), instead of as its bounding square.
- **Breaking**: a container's `width`/`height` (`calculateDimensions()`)
  covers its children correctly. It treated each child's `x`/`y` as its
  top-left corner (it's the center), so the size was off whenever the children
  weren't all at the same position (a container with a 10×10 sprite and a
  health bar above it measured 15×17 instead of 10×13). Check the game logic
  that uses a container's size (hit radiuses, range checks, health bars).
- **Breaking**: `Preload` dispatches the `error` event for every file that
  fails (error statuses, invalid json, files that can't be decoded), with
  `{ id, event?, status?, error? }`. Any 2xx status, `304` and `0` (`file://`)
  count as loaded, and the type is taken from the file name ignoring the case
  and the url's query/hash. The protected `_on_error()` and `_on_progress()`
  methods take different arguments.
- **Breaking**: `HighScore.add()` throws before `init()` is called, ignores
  values that aren't finite numbers, and returns whether the score is in the
  list. `HighScore.get()` is typed as possibly `undefined`, and `init()` throws
  when `maxScoresSaved` isn't a positive integer.
- **Breaking**: the `container` of the `Html` elements (and the `element` of
  `Html.Value`) is always set: it was typed as possibly `null`, since `clear()`
  set it to `null`. `clear()` now takes it out of the page, and the new
  `isCleared()` tells if it was called.
- **Breaking**: `Grid` and `PathFinding.breadthFirstSearch()` throw a
  `RangeError` for invalid arguments (columns/lines that aren't positive
  integers, a destination outside the map).
- **Breaking**: `SpatialPartition` throws a `RangeError` when `partitions`
  isn't a positive integer, or the canvas dimensions aren't positive numbers.
- **Breaking**: `removeFromGameLoop()` removes the callback every time it was
  added.
- **Breaking**: `EventDispatcher` calls the listeners in the order they were
  added (it used to call them in reverse order), like the DOM and
  `@drk4/utilities` do.
- **Breaking**: `@drk4/utilities` is no longer re-exported as
  `Game.Utilities`. To use it, install `@drk4/utilities` and import it
  directly. It's updated to v8, which has breaking changes of its own (for
  example `Dialog` titles and bodies given as strings are set as plain text
  instead of HTML), see its
  [changelog](https://github.com/noobiept/utilities/blob/master/CHANGELOG.md).
- `Game.init()` can be called again, which replaces the previous game.
- `disableMouseMoveEvents()` dispatches `mouseout` to the elements that were
  under the mouse.
- Releases are now published to npm from CI, with
  [provenance](https://docs.npmjs.com/generating-provenance-statements).
- Updated the runtimes (Node 26, pnpm 12) and the development dependencies to
  their latest versions (TypeScript stays on v6, since the tooling doesn't
  support v7 yet).

### Added

- `Game.setMaxDeltaTime()` and `Game.isGameLoopRunning()`.
- `isCleared()` on the `Html` elements.
- A `timeout` option for `Preload` (in seconds), and the `PreloadErrorData`
  type for its `error` event.

### Fixed

- Detached elements stayed in the collision detection, as invisible colliders
  at their last position.
- Removing an element that wasn't in the collision detection (removed twice,
  or after a new `Game.init()`) took another element out of it.
- A destroyed element came back to the spatial partition when it moved (its
  tweens kept moving it).
- Moving or removing elements from a collision listener made the spatial
  partition skip or repeat collisions, and could make `CheckAll` throw.
- An element with a `NaN` position crashed the spatial partition.
- `Vector.normalize()` and `Vector.projection()` with the zero vector gave `NaN`.
- In the spatial partition, an element whose center was just outside the
  canvas didn't collide with the elements inside.
- `clone()` didn't keep the `category`/`collidesWith`, and sprite clones shared
  the animations.
- `EventDispatcher` called a listener twice, or after it was removed, when
  listeners were removed during a dispatch, and event types like `__proto__`
  or `constructor` threw.
- Destroying a container from the logic of one of its children threw.
- `removeAllCallbacks()` and `Tween.removeAll()` called from a callback threw,
  or updated a tween twice, and a tween removed from its own `.call()` step was
  left half active.
- `Container.removeChild()` with an element that isn't a child broke the link
  to its real parent, and a container's size wasn't updated when children were
  removed.
- `startGameLoop()` started a second loop when the loop was already running,
  and a loop stopped with `stopGameLoop()` restarted when the page became
  visible again. Calling `activateMouseMoveEvents()` twice left an interval
  running. Elements destroyed while the loop was stopped were never taken out.
- `Preload` never dispatched `complete` when a file had a network error, was
  aborted, or a listener threw. The `complete` event's lists were emptied after
  it was dispatched, loading files from its listener broke the counting, the
  progress was wrong with several files, and an id like `__proto__` replaced
  the prototype of the data object.
- `HighScore` threw on startup when the saved scores weren't valid JSON, saved
  data of the wrong shape crashed it or lost the scores, a saved list bigger
  than the limit was never cut, a full storage made `add()` throw, and
  `get('__proto__')` returned `Object.prototype`.
- `Sprite.play()` accepted inherited properties (like `toString`) as
  animations.
- A bullet's collisions were passed on to the element that fired it after that
  element was destroyed.
- `PathFinding.breadthFirstSearch()` spread from a blocked destination, gave a
  `TypeError` or wrong paths for a destination outside the map, and its result
  referenced the given destination object.
- A `Text` with a `timeout` couldn't be cleaned up before the timeout.
- `HtmlElement` threw for a `cssClass` with spaces.
- `Weapon` no longer changes the arguments object given to it.
- `Movement` could miss its destination and keep going (moving left or up near
  the coordinate `0`, or to the position it was already in), and `follow()`
  didn't settle on the target once it reached it.
- A container's click listener didn't get the clicks on its children unless a
  child listened to them too, and got one per overlapping child. Now only the
  front child under the mouse gets the click (like the elements of a canvas).
- `ScrollingBitmap` jumped when the step didn't divide the image size evenly.
- `Text.clone()` didn't keep the color.
- `ElementGrid.add()` on a taken position left the replaced element's
  `grid_data` pointing at that position.
- `Html.Range` didn't show its value when it started at `0`.
- `Rectangle`, `Bullet`, `ElementGrid` and `Html.Range` no longer change the
  arguments object given to them.

## [3.0.2] - 2026-06-02

### Documentation

- Rewrote the README: clearer introduction with a feature list, npm and pnpm
  install instructions, the optional stylesheet import, a table of contents,
  and version/license badges.
- Expanded the getting-started example into a small playable demo — movement,
  bounds clamping, live text, and a click tween.
- Removed the outdated "Direct Browser Usage" and "Build" sections.

## [3.0.1] - 2026-05-31

### Fixed

- `async` functions can now be registered as event listeners
  (`addEventListener()`). They were previously rejected by the internal
  `isFunction` check.

### Documentation

- Expanded the README with usage examples — getting started, loading assets,
  sprites & animation, input, tweens, the game loop, and collision detection.
- Added and modernized the usage examples shown in the in-code API
  documentation.

## [3.0.0] - 2026-05-31

Enhancements to make the engine easier to use for CreateJS-style ports, plus a
pass of breaking API-consistency cleanups.

### Added

- **Sound**: `Sound.play()` now returns a `SoundInstance` that supports looping
  and per-instance volume, and can be controlled with `pause()`, `resume()`,
  `stop()`, the `loop`/`volume` setters, and a `playing` getter.
- **Sprite**: one-shot animations via `play(id, { loop: false })`, which stop on
  the last frame and dispatch an `animationend` event
  (`{ sprite, animationId }`).
- **Container** and **Canvas**: z-order control — `bringToFront()`,
  `sendToBack()`, and `setChildIndex()`.
- **Tween**: an `override` option (`new Tween(target, { override: true })`) that
  removes any existing tweens on the target before starting.
- **Element**: top-left bounds accessors — `left`, `top`, and `getBoundingBox()`
  (a non-rotated, top-left box).
- Game-loop callbacks added with `addToGameLoop()` now receive the loop's
  `deltaTime`.
- New examples: `sound`, `sprite_animation`, `z_order`, and `tween_override`.

### Changed

- **Breaking**: `Sound.play()` now returns a `SoundInstance | null` instead of
  the raw `AudioBufferSourceNode`.
- **Breaking**: `Sprite.play()`'s second parameter is now an options object
  (`{ loop?, reset? }`) instead of a positional `reset` boolean.
- **Breaking**: `Game.init()` now takes an options object —
  `init({ container, width, height, collision? })`.
- **Breaking**: `addToGameLoop()`'s second argument is now an options object —
  `addToGameLoop(callback, { delay?, interval? })`.
- **Breaking**: `Element.rotate()` now only accepts radians; use the new
  `rotateDegrees()` for degrees.
- **Breaking**: dimension accessors were consolidated — `width`/`height` are now
  get/set on `Element` and getters on `Canvas`; the
  `getWidth()`/`getHeight()`/`setWidth()`/`setHeight()` methods were removed
  (`setDimensions()` remains).
- **Breaking**: several public members were renamed to camelCase for
  consistency:
    - `Text`: `font_family`/`font_size` → `fontFamily`/`fontSize`
    - `Element`: `half_width`/`half_height` → `halfWidth`/`halfHeight`
    - `Canvas`: `events_enabled`/`update_on_loop` → `eventsEnabled`/`updateOnLoop`
    - `Preload`: `save_global` → `saveGlobal`; the `complete` event's
      `failed_ids`/`loaded_ids` → `failedIds`/`loadedIds`
    - `ElementGrid`: `square_size`/`ref_x`/`ref_y` → `squareSize`/`refX`/`refY`
    - `Weapon`: `fire_interval` → `fireInterval`
    - `Movement`: `movement_speed` → `movementSpeed`
- A suspended `AudioContext` is now resumed automatically when a sound starts,
  so audio becomes audible after the first user interaction.

[Unreleased]: https://github.com/noobiept/game_engine/compare/v4.3.0...HEAD
[4.3.0]: https://github.com/noobiept/game_engine/releases/tag/v4.3.0
[4.2.0]: https://github.com/noobiept/game_engine/releases/tag/v4.2.0
[4.1.0]: https://github.com/noobiept/game_engine/releases/tag/v4.1.0
[4.0.0]: https://github.com/noobiept/game_engine/releases/tag/v4.0.0
[3.0.2]: https://github.com/noobiept/game_engine/releases/tag/v3.0.2
[3.0.1]: https://github.com/noobiept/game_engine/releases/tag/v3.0.1
[3.0.0]: https://github.com/noobiept/game_engine/releases/tag/v3.0.0
