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

Game.prototype.checkGameOver = function() {
  if(this.allLightsOff()){
    alert("You win!");
  }
};

Game.prototype.allLightsOff = function() {
  var lights = this.getAllLights();
  return _.every(lights, function(light) {return light.turnedOn === false})
};

Game.prototype.getAllLights = function() {
  var allLights = [];
  this.board.columns.forEach(function(column) {
    allLights.push(column.getLights());
  });
  return _.flatten(allLights);
};

module.exports = Game;
