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

    Game.init(document.body, 400, 400);
</script>
```

Or self-host, by copying `dist/game_engine.js` (and, optionally, `dist/game_engine.css`) from the package and importing the local file:

```html
<link rel="stylesheet" href="game_engine.css" />

<script type="module">
    import * as Game from "./game_engine.js";

    Game.init(document.body, 400, 400);
</script>
```

The built file is self-contained (its dependencies are bundled in), so no import map is needed. The CSS is optional — it provides basic styling for the engine's HTML helpers.

# Documentation

Is available [in here](docs/README.md).

# Build

- `pnpm install` - Install the dependencies.
- `pnpm run dev` - Start the examples app with Vite.
- `pnpm run build` - Build the npm package files in `dist/`.
- `pnpm run docs` - Build the documentation in `docs/`.
