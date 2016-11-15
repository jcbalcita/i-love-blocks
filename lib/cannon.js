import Bullet from './bullet';

class Cannon {
  constructor() {
    this.angle = [];
    this.pos = [320, 450];
    this.size = 30;
  }

  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.pos[0], this.pos[1], this.size, this.size);
  }

  // fireBullet() {
  // const norm = Util.norm(this.vel);
  //
  // if (norm == 0) {
  //   // Can't fire unless moving.
  //   return;
  // }
  //
  // const relVel = Util.scale(
  //   Util.dir(this.vel),
  //   Bullet.SPEED
  // );
  //
  // const bulletVel = [
  //   relVel[0] + this.vel[0], relVel[1] + this.vel[1]
  // ];
  //
  // const bullet = new Bullet({
  //   pos: this.pos,
  //   vel: bulletVel,
  //   color: this.color,
  //   game: this.game
  // });
  //
  //   this.game.add(bullet);
  // }

}

export default Cannon;
