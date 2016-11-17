import Game from './game';
import GameView from './game_view';



document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "48px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText("Press Enter to Start", 100, 100);

  const game = new Game();
  const gameView = new GameView(game, ctx)

  const drawBlocks = ctx => {
    game.backgroundBlocks(ctx);
  }

  window.setInterval(drawBlocks.bind(this, ctx), 180);


  document.addEventListener("keydown", e => {
    if (e.keyCode === 13) {
      gameView.start();
    }
  });
});
