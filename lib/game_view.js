class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.cannon = game.cannon
  }

  bindKeyHandlers() {
    key("space", () => { this.cannon.fireBullet() });
    key("a", () => { this.cannon.move(-20) });
    key("d", () => { this.cannon.move(20) });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    //start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    //every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default GameView;
