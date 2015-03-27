Usage
=====

Link the *game_engine.js* and *utilities.js* files.

You can optionally use the `style.css` for some basic styling, but its not necessary for the engine to work.
Just something to get you started, and then later on you can use your own styling.

All the css classes/ids from the engine start with the string `Game-`, so its easy to avoid conflicts (for example, `.Game-Container`).


Documentation
=============

Is available in [http://game-engine1.herokuapp.com/](http://game-engine1.herokuapp.com/).


Build
=====

Uses gruntjs. 
The result is available on the */build/output/* folder.

* ```cd build``` - move to the build folder
* ```npm install``` - install the build dependencies
* ```grunt``` - development build
* ```grunt docs``` - build the documentation 
* ```grunt release``` release build


Examples
========

To try out the examples, start a local server at the root path (otherwise the preloading of assets won't work).

For example with python3: ```python -m http.server```