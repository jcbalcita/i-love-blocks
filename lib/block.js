const NORMAL_FRAME_TIME_DELTA = 1000/60;

class Block {
  constructor(options) {
    this.pos = options.pos || [10, 10];
    this.size = options.size;
    this.color = this.randomColor();
    this.count = options.count || 4;
    this.game = options.game;
    this.vel = options.vel || [0, 0.5];
  }

  randomColor() {
    const hexDigits = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 3; i++) {
      color += hexDigits[Math.floor((Math.random() * 16))];
    }

    return color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.size, this.size);
  }

  isCollidedWith(bullet) {
    if (this.pos[0] < bullet.pos[0] + bullet.size &&
     this.pos[0] + this.size > bullet.pos[0] &&
     this.pos[1] + this.size > bullet.pos[1]) {
       this.count -= 1;
       this.game.score += 10;
       document.getElementById("enemy-damage").play();

      if (this.count > 0) {
        this.color = this.randomColor();
      } else if (this.count === 0 && this.size >= 50) {
        this.game.addBabyBlock();
        if (this.game.score > 10000) {
          this.game.addBabyBlock
        }
        this.game.remove(this);
      } else {
        this.game.remove(this);
      }

      if (this.count > 50 && this.count % 200 === 0) {
        this.game.addBabyBlock();
        this.game.addBabyBlock();
      }

      if (this.size <= 50){
        this.game.remove(bullet);
      }
     }
  }

  hasHitBottom() {
    if ((this.pos[1] + this.size) > 420) {
      document.getElementById("gameplay").pause();
      document.getElementById("game-over").play();
      window.setTimeout(3000);
      this.game.gameOver = true;
    }
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
  }


}

export default Block;
