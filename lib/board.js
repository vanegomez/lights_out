const Light = require('./light');
const _     = require('lodash-transpose');
const $     = require('jquery');

function Board() {
  this.columns = [];
  _.times(5, function(){
    this.columns.push(new Column())
  }.bind(this));
}

function Column() {
  this.lights = [];
  _.times(5, function() {
    this.lights.push(new Light())
  }.bind(this));
}

Board.prototype.render = function(targetDiv) {
  var boardElement = $('<div class="board"></div>');

  targetDiv.append(boardElement);

  this.assignLightsX();
  this.assignLightsY();
  
  this.columns.forEach(function(column) {
    column.render(boardElement);
  });
};

Board.prototype.assignLightsX = function() {
  this.columns.forEach(function(column) {
    column.lights.forEach(function(light, index) {
      light.y = index
    })
  })
};

Board.prototype.assignLightsY = function() {
  this.columns.forEach(function(column, index){
    for(var i = 0; i < column.lights.length; i++) {
      column.lights[i].x = index;
    }
  })
};

Column.prototype.render = function(targetDiv) {
  var columnElement = $('<div class="column"></div>');
  
  targetDiv.append(columnElement);
  
  this.lights.forEach(function(light) {
    light.render(columnElement);
  })
};

module.exports = Board;
