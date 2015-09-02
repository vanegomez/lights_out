const Light = require('./light');
const _     = require('lodash-transpose');

function Board() {
  this.rows = [];
}

function Row() {
  var row = [];
  _.times(5, function() {
    row.push(new Light())
  });
  return row;
}

Board.prototype.compileBoard = function() {
  var board = this.rows;
  _.times(5, function(){
    board.push(new Row())
  });
  return board;
};

module.exports = Board;
