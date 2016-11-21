# i-love-blocks

A JavaScript game, displayed via `HTML5 Canvas`, about a bureaucrat in the post-apocalyptic US government who, despite his great personal love of blocks, is forced to destroy them in order to keep his job and livelihood.

### Features

- Canvas DOM element that is re-rendered at a rate of 60 frames per second.
- 2-dimensional collision detection that is fired off at each frame.
- Random color generator that is called each time a block is hit with a bullet.
- Moveable character that can fire objects


- [x] Start screen
- [x] Mute/unmute buttons
- [x] Rendered blocks, with varying hit points, that the player can destroy on the screen
- [x] Additional blocks that are rendered after blocks are destroyed
- [x] A 'Game Over' message if the player allows blocks to reach the bottom of the screen

### Architecture and Technologies 

This project features the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

`game_view.js`: this script creates and updates the Canvas element and renders it to the DOM

`game.js`: this script performs the logic of the game behind the scenes, including but not limited to the effects on impacted blocks.

`block.js`: this script creates the block objects and assigns their 'hit points', velocity, size, etc.

`cannon.js`: this script renders the main character object at the bottom of the screen and allows it to move and shoot bullets.

`bullet.js`" this script will create the bullet objects; `new Bullet()` is called within `cannon.js`.

### Gameplay/Directions

Spacebar -- shoot bullet
"a" -- move left
"d" -- move right

Shoot bullets to destroy the blocks before they reach the bottom of the screen.



