const Board = require('./board');
const _     = require('lodash-transpose');
const $     = require('jquery');

function Game() {
  this.board = new Board();
}

Game.prototype.render = function(targetDiv) {
  var gameElement = $('<div class="game"></div>');
  
  targetDiv.append(gameElement);
  this.board.render(gameElement);
};

module.exports = Game;
