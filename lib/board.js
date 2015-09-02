const Light = require('./light');
const _     = require('lodash-transpose');

function Board() {
  var board = [];
  _.times(5, function(){
    board.push(new Column())
  });
  return board;
}

function Column() {
  var column = [];
  _.times(5, function() {
    column.push(new Light())
  });
  return column;
}

module.exports = Board;
