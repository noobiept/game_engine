A 2d game engine, for simple browser games using the html canvas.

# Install

```sh
pnpm add @drk4/game-engine
```

# Usage

```ts
import * as Game from "@drk4/game-engine";
import "@drk4/game-engine/style.css";
```

The CSS is optional, but it provides basic styling for the engine's HTML helpers.
All the CSS classes/ids from the engine start with the string `Game-`, so its easy to avoid conflicts (for example, `.Game-Container`).

## Getting started

`Game.init()` creates the canvas and starts the game loop. After that you add elements (shapes, images, text, ...) to the canvas.

```ts
import * as Game from "@drk4/game-engine";

Game.init({ container: document.body, width: 400, height: 400 });

const player = new Game.Rectangle({
    x: 200, // x/y is the center of the element
    y: 200,
    width: 30,
    height: 30,
    color: "green",
});

Game.addElement(player);
```

## Loading assets

Use `Preload` to load images, audio, json and text files. With `saveGlobal: true` the loaded files are stored globally and retrieved with `Game.Preload.get(id)`.

```ts
const preload = new Game.Preload({ saveGlobal: true });

preload.addEventListener("complete", function () {
    const ship = new Game.Bitmap({
        x: 200,
        y: 200,
        image: Game.Preload.get("ship"),
    });
    Game.addElement(ship);

    // play looping background music at half volume
    Game.Sound.play(Game.Preload.get("music"), { loop: true, volume: 0.5 });
});

preload.loadManifest(
    [
        { id: "ship", path: "ship.png" },
        { id: "music", path: "music.ogg" },
    ],
    "assets/", // base path, prepended to every file
);
```

## Sprites & animation

A `Sprite` animates frames from a sprite sheet. Pass `{ loop: false }` to play an animation once; it emits an `animationend` event when it reaches the last frame.

```ts
const explosion = new Game.Sprite({
    x: 200,
    y: 200,
    image: Game.Preload.get("explosion"),
    frameWidth: 40,
    frameHeight: 40,
    interval: 0.07, // seconds between frames
    animations: { boom: [0, 1, 2, 3, 4, 5] },
});

Game.addElement(explosion);

// play once, then remove itself when finished
explosion.addEventListener("animationend", function (data) {
    data.sprite.remove();
});
explosion.play("boom", { loop: false });
```

## Input / events

Add listeners to any element. The mouse events are `click`, `mousedown`, `mouseup`, `mouseover`, `mouseout` and `mousemove`.

```ts
const button = new Game.Rectangle({
    x: 200,
    y: 200,
    width: 80,
    height: 30,
    color: "steelblue",
});

Game.addElement(button);

button.addEventListener("click", function () {
    console.log("clicked!");
});
```

## Tweens

A `Tween` animates an element's properties over time (durations are in **seconds**). Pass `{ override: true }` to cancel any tween already running on the target.

```ts
const tween = new Game.Tween(player, { override: true });

tween
    .to({ x: 350 }, 1) // animate x to 350 over 1 second
    .wait(0.5)
    .to({ y: 350 }, 1, Game.Tween.Ease.quadraticIn)
    .call(function () {
        console.log("done");
    });

tween.start();
```

## Game loop

Run your own logic on the loop with `Game.addToGameLoop()`. The callback receives the `deltaTime` (seconds since the last update). By default it runs every tick; pass a `delay` (in seconds) to run on an interval.

```ts
// every tick — move at a constant speed regardless of the frame rate
Game.addToGameLoop(function (deltaTime) {
    player.x += 50 * deltaTime;
});

// every 2 seconds
Game.addToGameLoop(spawnEnemy, { delay: 2 });
```

## Collision detection

Give elements a `category` (a bit flag) and the categories they should collide with (`collidesWith`). Colliding elements receive a `collision` event.

```ts
const PLAYER = 1; // 0b01
const ENEMY = 2; // 0b10

player.category = PLAYER;
player.collidesWith = ENEMY;

const enemy = new Game.Rectangle({
    x: 100,
    y: 100,
    width: 20,
    height: 20,
    color: "red",
    category: ENEMY,
    collidesWith: PLAYER,
});

Game.addElement(enemy);

player.addEventListener("collision", function (data) {
    console.log("player hit", data.collidedWith);
});
```

For a large number of elements, you can use the spatial-partition algorithm instead of the default (which checks every pair):

```ts
const collision = new Game.CollisionDetection.SpatialPartition({
    canvasWidth: 400,
    canvasHeight: 400,
    partitions: 10,
});

Game.init({ container: document.body, width: 400, height: 400, collision });
```

# Direct Browser Usage

The package is distributed as an ES module, so you can use it in the browser without a bundler through a `<script type="module">` — either from a CDN or by self-hosting the built file. A plain `<script src>` won't work, and there is no global variable.

From a CDN:

```html
<!-- optional: basic styling for the engine's HTML helpers -->
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@drk4/game-engine/dist/game_engine.css"
/>

<script type="module">
    import * as Game from "https://cdn.jsdelivr.net/npm/@drk4/game-engine/dist/game_engine.js";

    Game.init({ container: document.body, width: 400, height: 400 });
</script>
```

Or self-host, by copying `dist/game_engine.js` (and, optionally, `dist/game_engine.css`) from the package and importing the local file:

```html
<link rel="stylesheet" href="game_engine.css" />

<script type="module">
    import * as Game from "./game_engine.js";

    Game.init({ container: document.body, width: 400, height: 400 });
</script>
```

The built file is self-contained (its dependencies are bundled in), so no import map is needed. The CSS is optional — it provides basic styling for the engine's HTML helpers.

# Documentation

The full API reference is available [in here](docs/README.md).

There are also many runnable examples in the [`examples/`](examples/) directory — run `pnpm run dev` to browse them.

# Build

- `pnpm install` - Install the dependencies.
- `pnpm run dev` - Start the examples app with Vite.
- `pnpm run build` - Build the npm package files in `dist/`.
- `pnpm run docs` - Build the documentation in `docs/`.
