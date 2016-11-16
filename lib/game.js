import Block from './block';
import Bullet from './bullet';
import Cannon from './cannon';

class Game {
  constructor() {
    this.blocks = [];
    this.bullets = [];
    this.cannon = new Cannon({game: this});
    this.score = 0;

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
    // move objects
    this.bullets.forEach(bullet => {
      bullet.move(delta);
    });

    this.blocks.forEach(block => {
      block.pos[1] += 0.2;
    });

    //check collisions
    for (var i = 0; i < this.blocks.length; i++) {
      for (var j = 0; j < this.bullets.length; j++) {
        let block = this.blocks[i];
        let bullet = this.bullets[j];

        if (block) {
          block.isCollidedWith(bullet)
        }

        if (bullet.pos[1] - bullet.size[1] < 0) {
          this.remove(bullet);
        }

      }
    }

    if (this.blocks.length === 0) {
      if (Math.random() > 0.2) {
        this.addBossBlock();
      } else {
        this.addBlocks();
      }
    }
  }

  addBlocks() {
    const positions = [[50, 50], [200, 50], [350, 50], [500, 50]];

    for (let i = 0; i < 4; i++) {
      this.blocks.push(new Block({pos: positions[i], size: 50, game: this}));
    }
  }

  addBossBlock() {
    this.blocks.push(new Block({count: 200, pos: [50, -400], size: 400, game: this}));
  }

  addBullet(bullet) {
    this.bullets.push(bullet);
  }

  remove(object) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Block) {
      this.blocks.splice(this.blocks.indexOf(object), 1);
    } else {
      throw "wtf?";
    }
  }

}

export default Game;
