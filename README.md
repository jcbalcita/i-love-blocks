# i-love-blocks

A JavaScript game about a bureaucrat in the post-apocalyptic US government who, despite his great personal love of blocks, is forced to destroy them in order to keep his job and livelihood.

## Background

I Love Blocks is a variation on the classic game in which the player shoots objects at blocks on the screen with the goal of destroying the blocks on impact.  Each block will have a displayed number representing the number of hits left before it is destroyed. The player can also hit various bonuses that will increase his/her power to destroy blocks.

## Functionality and MVP

The game will feature:

- [ ] Start/Pause and New Game buttons
- [ ] Rendered blocks that the player can destroy on the screen
- [ ] Additional blocks that are rendered after each player turn
- [ ] A 'Game Over' message if the player allows blocks to reach the bottom of the screen

In addition, this project will include:

- [ ] A production Readme

### Architecture and Technologies 

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

`board.js`: this script will create and update the necessary `Easel.js` elements and render them to the DOM.

`logic.js`: this script will perform the logic of the game behind the scenes, including but not limited to the effects on impacted blocks.

`block.js`: this script will create the block objects and assign their 'hit points'.

`balls.js`" this script will create the ball objects.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  Set up the blocks module.

- Complete the `block.js` module (constructor, update functions)
- Render square blocks to the `Canvas` using `Easel.js`

**Day 3**:  Goals for the day:

- Complete the `balls.js` module (constructor, update functions)
- Make the blocks 'hittable' and 'destroyable'
- Have a functional grid on the `Canvas` frontend that correctly handles iterations from one generation of the game to the next

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset
- Have a styled `Canvas`, nice looking controls and title
