# i-love-blocks

A JavaScript game, displayed via HTML5 Canvas, about a bureaucrat in the post-apocalyptic US government who, despite his great personal love of blocks, is forced to destroy them in order to keep his job and livelihood.

## Functionality and MVP

The game will feature:

- [ ] Start/Pause and New Game buttons
- [ ] Rendered blocks that the player can destroy on the screen
- [ ] Additional blocks that are rendered after blocks are destroyed
- [ ] A 'Game Over' message if the player allows blocks to reach the bottom of the screen

In addition, this project will include:

- [ ] A production Readme

### Architecture and Technologies 

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

`game_view.js`: this script will create and update the necessary `Easel.js` elements and render them to the DOM.

`game.js`: this script will perform the logic of the game behind the scenes, including but not limited to the effects on impacted blocks.

`block.js`: this script will create the block objects and assign their 'hit points'.

`cannon.js`: this script renders the 'cannon' object and allows it to move and shoot bullets.

`bullet.js`" this script will create the bullet objects.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and displaying a Canvas board.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of Canvas.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Canvas` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the Canvas API.  Set up the blocks module.

- Complete the `block.js` module (constructor, update functions)
- Render square blocks to the `Canvas`

**Day 3**:  Goals for the day:

- Complete the `bullets.js` module (constructor, update functions)
- Make the blocks 'hittable' and 'destroyable'

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset
- Have a styled `Canvas`, nice looking controls and title
