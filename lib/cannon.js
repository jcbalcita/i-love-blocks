import Bullet from './bullet';

class Cannon {
  constructor(options) {
    this.pos = [320, 400];
    this.game = options.game;
  }

  draw(ctx) {
    const img = document.getElementById('char');
    ctx.drawImage(img, this.pos[0], this.pos[1]);
  }

  fireBullet() {
    const bullet = new Bullet({
      pos: [this.pos[0] + 35, this.pos[1]],
      vel: [0, 1],
      game: this.game
    });

    document.getElementById("bullet").play();
    this.game.addBullet(bullet);
  }

  move(direction) {
    this.pos[0] += direction
    if (this.pos[0] > canvas.width) {
      this.pos[0] = 0;
    } else if (this.pos[0] < 0 ) {
      this.pos[0] = canvas.width;
    }
  }


}

export default Cannon;
