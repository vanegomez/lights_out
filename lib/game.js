const Board = require('./board');
const _     = require('lodash');

function Game() {
  this.board = new Board().compileBoard();
}

module.exports = Game;
