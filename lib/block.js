const NORMAL_FRAME_TIME_DELTA = 1000/60;

class Block {
  constructor(options) {
    this.pos = options.pos;
    this.size = options.size;
    this.color = 'red';
    this.count = 0;
    this.vel = [0, -1]
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.size, this.size);
  }


}

export default Block;
