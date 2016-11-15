import Game from './game';
import GameView from './game_view';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  const game = new Game();
  new GameView(game, ctx).start();
});
