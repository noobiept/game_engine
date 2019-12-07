A 2d game engine, for simple browser games using the html canvas.


Usage
=====

Link the *game_engine.js* file.

You can optionally use the `style.css` for some basic styling, but its not necessary for the engine to work.
Just something to get you started, and then later on you can use your own styling.

All the css classes/ids from the engine start with the string `Game-`, so its easy to avoid conflicts (for example, `.Game-Container`).


Documentation
=============

Is available [in here](docs/README.md).


Build
=====

* `npm install` - Install the dependencies.
* `npm run dev` - Run the development build.
    * Its available in the `/build/` directory.
    * A local server is started at `localhost:8000/` in the root directory. Open the `examples` directory for something to play with.
* `npm run docs` - Build the documentation, in the `/docs/` directory.
* `npm run release` - Build the release version in the `/release/<version>/` directory.
