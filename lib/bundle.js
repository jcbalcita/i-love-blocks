/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _game_view = __webpack_require__(5);
	
	var _game_view2 = _interopRequireDefault(_game_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var canvas = document.getElementById("canvas");
	  var ctx = canvas.getContext("2d");
	
	  var game = new _game2.default();
	  new _game_view2.default(game, ctx).intro();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _block = __webpack_require__(2);
	
	var _block2 = _interopRequireDefault(_block);
	
	var _bullet = __webpack_require__(3);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	var _cannon = __webpack_require__(4);
	
	var _cannon2 = _interopRequireDefault(_cannon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.blocks = [];
	    this.bullets = [];
	    this.cannon = new _cannon2.default({ game: this });
	    this.score = 0;
	    this.gameOver = false;
	    this.firstSet = true;
	  }
	
	  _createClass(Game, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.clearRect(0, 0, canvas.width, canvas.height);
	      ctx.fillStyle = 'black';
	      ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	      this.blocks.forEach(function (block) {
	        block.draw(ctx);
	      });
	
	      this.cannon.draw(ctx);
	
	      this.bullets.forEach(function (bullet) {
	        bullet.draw(ctx);
	      });
	    }
	  }, {
	    key: 'step',
	    value: function step(delta) {
	      // move objects
	      this.bullets.forEach(function (bullet) {
	        bullet.move(delta);
	      });
	
	      this.blocks.forEach(function (block) {
	        block.move(delta);
	        block.hasHitBottom();
	      });
	
	      //check collisions
	      for (var i = 0; i < this.blocks.length; i++) {
	        for (var j = 0; j < this.bullets.length; j++) {
	          var block = this.blocks[i];
	          var bullet = this.bullets[j];
	
	          if (block) {
	            block.isCollidedWith(bullet);
	          }
	
	          if (bullet.pos[1] - bullet.size[1] < 0) {
	            this.remove(bullet);
	          }
	        }
	      }
	
	      if (this.firstSet) {
	        this.addBlocks();
	        this.firstSet = false;
	      }
	
	      if (this.blocks.length === 0) {
	        if (Math.random() < 0.66) {
	          this.addBossBlock();
	        } else {
	          this.addBlocks();
	        }
	      }
	    }
	  }, {
	    key: 'addBlocks',
	    value: function addBlocks() {
	      var positions = [[50, -20], [200, -20], [350, -20], [500, -20]];
	      var position = Math.floor(Math.random(5));
	
	      for (var i = 0; i < 4; i++) {
	        this.blocks.push(new _block2.default({ pos: positions[i], size: 50, game: this }));
	      }
	    }
	  }, {
	    key: 'addBossBlock',
	    value: function addBossBlock() {
	      this.blocks.push(new _block2.default({ count: 1400, pos: [50, -400], size: 400, vel: [0, 0.48], game: this }));
	    }
	  }, {
	    key: 'addBlock',
	    value: function addBlock() {
	      var positions = [[50, 0], [200, 0], [350, 0], [500, 0]];
	      var position = Math.floor(Math.random(5));
	
	      this.blocks.push(new _block2.default({ pos: positions[position], size: 50, game: this }));
	    }
	  }, {
	    key: 'addBabyBlock',
	    value: function addBabyBlock() {
	      var posX1 = Math.floor(Math.random() * 500);
	      posX1 = posX1 < 50 ? 50 : posX1;
	
	      this.blocks.push(new _block2.default({ pos: [posX1, -20], vel: [0, 1.2], size: 25, game: this, count: 1 }));
	    }
	  }, {
	    key: 'addBullet',
	    value: function addBullet(bullet) {
	      this.bullets.push(bullet);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(object) {
	      if (object instanceof _bullet2.default) {
	        this.bullets.splice(this.bullets.indexOf(object), 1);
	      } else if (object instanceof _block2.default) {
	        this.blocks.splice(this.blocks.indexOf(object), 1);
	      } else {
	        throw "wtf?";
	      }
	    }
	  }, {
	    key: 'backgroundBlocks',
	    value: function backgroundBlocks(ctx) {
	      var _this = this;
	
	      var positions = [[60, 150], [210, 150], [360, 150], [510, 150], [60, 260], [210, 260], [360, 260], [510, 260], [60, 370], [210, 370], [360, 370], [510, 370]];
	
	      var bgBlocks = positions.map(function (position) {
	        return new _block2.default({ pos: position, game: _this, size: 50 });
	      });
	
	      bgBlocks.forEach(function (block) {
	        return block.draw(ctx);
	      });
	    }
	  }]);
	
	  return Game;
	}();
	
	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
	
	var Block = function () {
	  function Block(options) {
	    _classCallCheck(this, Block);
	
	    this.pos = options.pos || [10, 10];
	    this.size = options.size;
	    this.color = this.randomColor();
	    this.count = options.count || 4;
	    this.game = options.game;
	    this.vel = options.vel || [0, 0.5];
	  }
	
	  _createClass(Block, [{
	    key: "randomColor",
	    value: function randomColor() {
	      var hexDigits = "0123456789ABCDEF";
	      var color = "#";
	      for (var i = 0; i < 3; i++) {
	        color += hexDigits[Math.floor(Math.random() * 16)];
	      }
	
	      return color;
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.fillStyle = this.color;
	      ctx.fillRect(this.pos[0], this.pos[1], this.size, this.size);
	    }
	  }, {
	    key: "isCollidedWith",
	    value: function isCollidedWith(bullet) {
	      if (this.pos[0] < bullet.pos[0] + bullet.size && this.pos[0] + this.size > bullet.pos[0] && this.pos[1] + this.size > bullet.pos[1]) {
	        this.count -= 1;
	        this.game.score += 10;
	        document.getElementById("enemy-damage").play();
	
	        if (this.count > 0) {
	          this.color = this.randomColor();
	        } else if (this.count === 0 && this.size >= 50) {
	          this.game.addBabyBlock();
	          if (this.game.score > 10000) {
	            this.game.addBabyBlock;
	          }
	          this.game.remove(this);
	        } else {
	          this.game.remove(this);
	        }
	
	        if (this.count > 50 && this.count % 200 === 0) {
	          this.game.addBabyBlock();
	          this.game.addBabyBlock();
	        }
	
	        if (this.size <= 50) {
	          this.game.remove(bullet);
	        }
	      }
	    }
	  }, {
	    key: "hasHitBottom",
	    value: function hasHitBottom() {
	      if (this.pos[1] + this.size > 420) {
	        document.getElementById("gameplay").pause();
	        document.getElementById("game-over").play();
	        window.setTimeout(3000);
	        this.game.gameOver = true;
	      }
	    }
	  }, {
	    key: "move",
	    value: function move(timeDelta) {
	      //timeDelta is number of milliseconds since last move
	      //if the computer is busy the time delta will be larger
	      //in this case the MovingObject should move farther in this frame
	      //velocity of object is how far it should move in 1/60th of a second
	      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
	          offsetX = this.vel[0] * velocityScale,
	          offsetY = this.vel[1] * velocityScale;
	
	      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
	    }
	  }]);
	
	  return Block;
	}();
	
	exports.default = Block;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
	
	var Bullet = function () {
	  function Bullet(options) {
	    _classCallCheck(this, Bullet);
	
	    this.pos = options.pos;
	    this.vel = [0, -2];
	    this.size = 9;
	    this.game = options.game;
	    this.color = 'white';
	  }
	
	  _createClass(Bullet, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.fillStyle = this.color;
	      ctx.fillRect(this.pos[0], this.pos[1], this.size, this.size);
	    }
	  }, {
	    key: 'move',
	    value: function move(timeDelta) {
	      //timeDelta is number of milliseconds since last move
	      //if the computer is busy the time delta will be larger
	      //in this case the MovingObject should move farther in this frame
	      //velocity of object is how far it should move in 1/60th of a second
	      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
	          offsetX = this.vel[0] * velocityScale,
	          offsetY = this.vel[1] * velocityScale;
	
	      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
	
	      if (this.pos[1] < 0) {
	        this.game.remove(this);
	      }
	    }
	  }]);
	
	  return Bullet;
	}();
	
	exports.default = Bullet;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _bullet = __webpack_require__(3);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cannon = function () {
	  function Cannon(options) {
	    _classCallCheck(this, Cannon);
	
	    this.pos = [320, 400];
	    this.game = options.game;
	  }
	
	  _createClass(Cannon, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      var img = document.getElementById('char');
	      ctx.drawImage(img, this.pos[0], this.pos[1]);
	    }
	  }, {
	    key: 'fireBullet',
	    value: function fireBullet() {
	      var bullet = new _bullet2.default({
	        pos: [this.pos[0] + 35, this.pos[1]],
	        vel: [0, 1],
	        game: this.game
	      });
	
	      document.getElementById("bullet").play();
	      this.game.addBullet(bullet);
	    }
	  }, {
	    key: 'move',
	    value: function move(direction) {
	      this.pos[0] += direction;
	      if (this.pos[0] > canvas.width) {
	        this.pos[0] = 0;
	      } else if (this.pos[0] < 0) {
	        this.pos[0] = canvas.width;
	      }
	    }
	  }]);
	
	  return Cannon;
	}();
	
	exports.default = Cannon;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameView = function () {
	  function GameView(game, ctx) {
	    _classCallCheck(this, GameView);
	
	    this.ctx = ctx;
	    this.game = game;
	    this.cannon = game.cannon;
	  }
	
	  _createClass(GameView, [{
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers() {
	      var _this = this;
	
	      key("space", function () {
	        _this.cannon.fireBullet();
	      });
	      key("a", function () {
	        _this.cannon.move(-20);
	      });
	      key("d", function () {
	        _this.cannon.move(20);
	      });
	    }
	  }, {
	    key: "intro",
	    value: function intro() {
	      var _this2 = this;
	
	      document.getElementById("intro-music").play();
	      this.ctx.fillStyle = "black";
	      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	      this.ctx.font = "48px sans-serif";
	      this.ctx.fillStyle = "white";
	      this.ctx.fillText("Press Enter to Start", 100, 100);
	
	      this.game.backgroundBlocks(this.ctx);
	
	      document.addEventListener("keydown", function (e) {
	        if (e.keyCode === 13) {
	          document.getElementById("intro-music").pause();
	          _this2.game.blocks = [];
	          _this2.start();
	        }
	      });
	    }
	  }, {
	    key: "gameOver",
	    value: function gameOver() {
	      this.ctx.fillStyle = "black";
	      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	      this.ctx.font = "24px sans-serif";
	      this.ctx.fillStyle = "white";
	      this.ctx.fillText("GAME OVER! Enter to restart", 100, 50);
	      this.ctx.fillStyle = "red";
	      this.ctx.fillText("Your score: " + this.game.score, 100, 100);
	
	      document.addEventListener("keydown", function (e) {
	        if (e.keyCode === 13) {
	          location.reload();
	        }
	      });
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      this.ctx.fillStyle = "black";
	      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
	      var gameplay = document.getElementById("gameplay");
	
	      gameplay.addEventListener('ended', function () {
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
	  }, {
	    key: "animate",
	    value: function animate(time) {
	      if (this.game.gameOver) {
	        return this.gameOver();
	      }
	
	      var timeDelta = time - this.lastTime;
	      this.game.step(timeDelta);
	      this.game.draw(this.ctx);
	      this.ctx.font = "16px sans-serif";
	      this.ctx.fillStyle = "white";
	      this.ctx.fillText("" + this.game.score, 500, 40);
	      this.lastTime = time;
	      //every call to animate requests causes another call to animate
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }]);
	
	  return GameView;
	}();
	
	exports.default = GameView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map