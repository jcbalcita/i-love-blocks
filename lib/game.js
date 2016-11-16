import Block from './block';
import Bullet from './bullet';
import Cannon from './cannon';

class Game {
  constructor() {
    this.blocks = [];
    this.bullets = [];
    this.cannon = new Cannon({game: this});
    this.numBlocks = 4;

    this.addBlocks();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.blocks.forEach(block => {
      block.draw(ctx);
    });

    this.cannon.draw(ctx);

    this.bullets.forEach(bullet => {
      bullet.draw(ctx);
    });
  }

  step(delta) {
    this.bullets.forEach(bullet => {
      bullet.move(delta);
    });

    this.blocks.forEach(block => {
      block.pos[1] += 0.2;
    });
  }

  addBlocks() {
    const positions = [[10, 0], [150, 0], [300, 0], [450, 0]];

    for (let i = 0; i < this.numBlocks; i++) {
      this.blocks.push(new Block({pos: positions[i], size: 50}));
    }
  }

  addBullet(bullet) {
    this.bullets.push(bullet);
  }

}

export default Game;
