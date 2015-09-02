const Board = require('./board');
const _     = require('lodash-transpose');

function Game() {
  this.board = new Board().compileBoard();
}

module.exports = Game;
