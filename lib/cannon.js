import Bullet from './bullet';

class Cannon {
  constructor(options) {
    this.angle = [];
    this.pos = [320, 450];
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.pos[0], this.pos[1], 20, 50);
  }

  fireBullet() {
    const bullet = new Bullet({
      pos: this.pos,
      vel: [0, 1],
      game: this.game
    });

    this.game.addBullet(bullet);
  }

  move(direction) {
    this.pos[0] += direction
    if (this.pos[0] > canvas.width) {
      this.pos = [0, 450];
    } else if (this.pos[0] < 0 ) {
      this.pos[0] = canvas.width;
    }
  }


}

export default Cannon;
