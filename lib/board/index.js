const Light = require('../light');
const _     = require('lodash');

function Board() {
  var board = this.matrix = [];
  _.times(5, function() {
    board.push(createRow())
  });
}

function createRow() {
  var row = [];
  _.times(5, function() {
    row.push(new Light());
  });
  return row
}

module.exports = Board;
