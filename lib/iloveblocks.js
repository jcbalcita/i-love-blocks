import Game from './game';
import GameView from './game_view';



document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  const game = new Game();
  new GameView(game, ctx).intro()
});
