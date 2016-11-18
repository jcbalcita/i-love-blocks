const NORMAL_FRAME_TIME_DELTA = 1000/60;

class Bullet {
  constructor(options) {
    this.pos = options.pos;
    this.vel = [0, -2];
    this.size = 9;
    this.game = options.game;
    this.color = 'white';
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.size, this.size);
  }

  move(timeDelta) {
  //timeDelta is number of milliseconds since last move
  //if the computer is busy the time delta will be larger
  //in this case the MovingObject should move farther in this frame
  //velocity of object is how far it should move in 1/60th of a second
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (this.pos[1] < 0) {
      this.game.remove(this);
    }
  }
}

export default Bullet;
