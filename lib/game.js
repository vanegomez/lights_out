const Board = require('./board');
const _     = require('lodash-transpose');
const $     = require('jquery');

function Game() {
  this.board = new Board();
}

Game.prototype.render = function() {
  var startDiv = $('.container');

  this.board.render(startDiv);
};

Game.prototype.wipeOut = function() {
  $('.board').remove();
  $('.column').remove();
  $('.light').remove();
};

Game.prototype.toggleLights = function(x, y) {
  this.board.toggleLights(x, y)
};

//Game.prototype.render = function(targetDiv) {
//  var gameElement = $('<div class="game"></div>')
//
//  targetDiv.append(gameElement);
//};


module.exports = Game;
