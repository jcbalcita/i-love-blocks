const NORMAL_FRAME_TIME_DELTA = 1000/60;

class Block {
  constructor(options) {
    this.pos = options.pos;
    this.size = options.size;
    this.color = this.randomColor();
    this.count = options.count || 20;
    this.game = options.game
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
       this.count -= 1

      if (this.count > 0) {
        this.color = this.randomColor();
      } else {
        this.game.remove(this);
      }

       this.game.remove(bullet);
     }
  }


}

export default Block;
