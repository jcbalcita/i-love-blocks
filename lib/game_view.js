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

  intro() {
    document.getElementById("intro-music").play();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.font = "48px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Press Enter to Start", 100, 100);

    const drawBlocks = () => {
      this.game.backgroundBlocks(this.ctx);
    }

    window.setInterval(drawBlocks.bind(this, this.ctx), 180);

    document.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        document.getElementById("intro-music").pause();
        this.game.blocks = [];
        this.start();
      }
    });
  }

  gameOver() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.font = "24px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("GAME OVER! Enter to restart", 100, 50);
    this.ctx.fillStyle = "red";
    this.ctx.fillText(`Your score: ${this.game.score}`, 100, 100);

    document.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        location.reload();
      }
    });
  }

  start() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    const gameplay = document.getElementById("gameplay")

    gameplay.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    gameplay.play();

    this.game.gameOver = false;
    this.bindKeyHandlers();
    this.lastTime = 0;
    //start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    if (this.game.gameOver) {
      return this.gameOver();
    }

    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.ctx.font = "16px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.game.score}`, 500, 40);
    this.lastTime = time;
    //every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default GameView;
