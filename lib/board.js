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

Board.prototype.toggleLights = function(x, y) {
  this.columns.forEach(function(column, index) {
    if (index === x) {
      var north = y-1;
      var south = y+1;
      column.toggleLight(north);
      column.toggleLight(y);
      column.toggleLight(south);
    } else if (index === x-1) {
      column.toggleLight(y);
    } else if (index === x+1) {
      column.toggleLight(y);
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

Column.prototype.toggleLight = function(y) {
  this.lights.forEach(function(light) {
    if (light.y === y){
      light.toggleStatus();
    }
  })
};

Column.prototype.getLights = function() {
  return this.lights
};

module.exports = Board;
