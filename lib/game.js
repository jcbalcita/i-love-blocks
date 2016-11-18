import Block from './block';
import Bullet from './bullet';
import Cannon from './cannon';

class Game {
  constructor() {
    this.blocks = [];
    this.bullets = [];
    this.cannon = new Cannon({game: this});
    this.score = 0;
    this.gameOver = false;
    this.firstSet = true;
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
      block.move(delta);
      block.hasHitBottom();
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

    if (this.firstSet) {
      this.addBlocks();
      this.firstSet = false;
    }

    if (this.blocks.length === 0) {
      if (Math.random() < 0.66) {
        this.addBossBlock();
      } else {
        this.addBlocks();
      }
    }
  }

  addBlocks() {
    const positions = [[50, -20], [200, -20], [350, -20], [500, -20]];
    const position = Math.floor(Math.random(5));

    for (let i = 0; i < 4; i++) {
      this.blocks.push(new Block({pos: positions[i], size: 50, game: this}));
    }
  }

  addBossBlock() {
    this.blocks.push(new Block({count: 1400, pos: [50, -400], size: 400, vel: [0, 0.48], game: this}));
  }

  addBlock() {
    const positions = [[50, 0], [200, 0], [350, 0], [500, 0]];
    const position = Math.floor(Math.random(5));

    this.blocks.push(new Block({pos: positions[position], size: 50, game: this}));
  }

  addBabyBlock() {
    let posX1 = Math.floor(Math.random() * 500);
        posX1 = posX1 < 50 ? 50 : posX1

    this.blocks.push(new Block({pos: [posX1, -20], vel: [0, 1.2], size: 25, game: this, count: 1}));
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

  backgroundBlocks(ctx) {
    const positions = [[60, 150], [210, 150], [360, 150], [510, 150],
                       [60, 260], [210, 260], [360, 260], [510, 260],
                       [60, 370], [210, 370], [360, 370], [510, 370]];

    const bgBlocks = positions.map(position => new Block({pos: position, game: this, size: 50}));

    bgBlocks.forEach(block => block.draw(ctx));
  }

}

export default Game;
