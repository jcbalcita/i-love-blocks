import Block from './block';
import Bullet from './bullet';
import Cannon from './cannon';

class Game {
  constructor() {
    this.blocks = [];
    this.bullet = new Bullet({game: this});
    this.cannon = new Cannon();
    this.numBlocks = 4;

    this.addBlocks();
  }

  draw(ctx) {
    this.blocks.forEach(block => {
      block.draw(ctx)
    });

    this.cannon.draw(ctx);
    this.bullet.draw(ctx);
  }

  addBlocks() {
    const positions = [[10, 100], [150, 100], [300, 100], [450, 100]];

    for (let i = 0; i < this.numBlocks; i++) {
      this.blocks.push(new Block({pos: positions[i], size: 50}));
    }
  }

}

export default Game;
