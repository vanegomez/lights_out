const assert = require('chai').assert;
const $      = require('jquery');
const Board  = require('../lib/board');
const Column  = require('../lib/board');
const Light  = require('../lib/light');

describe('board', function() {
  it('should exist', function() {
    assert(Board);
  });

  it('is an object', function() {
    assert(new Board());
  });

  it('has five columns when created', function() {
    var board = new Board();
    assert.equal(board.columns.length, 5);
    board.columns.forEach(function(column) {
      assert.equal(column.lights.length, 5);
    })
  });
  
  it('has columns made up of lights', function() {
    var board = new Board();
    board.columns.forEach(function(column) {
      column.lights.forEach(function(light) {
        assert.instanceOf(light, Light);
      })
    })
  });

  it('should render', function() {
    var board = new Board();
    var targetDiv = $('#test-game');
    board.render(targetDiv);
    var renderedBoard = document.getElementsByClassName('board');

    assert.isNotNull(renderedBoard);
  });

  it('assigns lights to y coordinates', function() {
    var board = new Board();
    var lights = [];
    board.columns.forEach(function(column) {
      lights.push(column.lights)
    });
    var light = _.flatten(lights)[0];
    board.assignLightsY();

    assert.equal(light.y, 0);
  });

  it('assigns lights to x coordinates', function() {
    var board = new Board();
    var lights = [];
    board.columns.forEach(function(column) {
      lights.push(column.lights)
    });
    var light = _.flatten(lights)[0];
    board.assignLightsX();

    assert.equal(light.x, 0);
  });

  it("should toggle it's lights", function() {
    var board = new Board();
    var targetDiv = $('#test-game');

    board.render(targetDiv);
    board.toggleLights(0, 0);

    var lights = [];
    board.columns.forEach(function(column) {
      lights.push(column.lights)
    });

    var testedLight = _.flatten(lights)[0];
    var secondTestedLight = _.flatten(lights)[1];
    var sixthTestedLight = _.flatten(lights)[5];

    assert.equal(testedLight.turnedOn, true);
    assert.equal(secondTestedLight.turnedOn, true);
    assert.equal(sixthTestedLight.turnedOn, true);

    board.toggleLights(0, 0);

    assert.equal(testedLight.turnedOn, false);
    assert.equal(secondTestedLight.turnedOn, false);
    assert.equal(sixthTestedLight.turnedOn, false);
  });

  it('columns should render', function() {
    var column = new Column();
    var targetDiv = $('#test-game');
    column.render(targetDiv);

    var renderedColumn = document.getElementsByClassName('column');
    assert.isNotNull(renderedColumn);
  });

  xit("columns should toggle it's lights", function() {
    var column = new Column();
    var targetDiv = $('#test-game');
    column.render(targetDiv);

    var light = column.forEach(function(column) {
      column.toggleLight(0);
    });

    assert.equal(light.y, true);
  });

  it('should get all Lights in one column', function() {
    var board = new Board();
    var targetDiv = $('#test-game');
    board.render(targetDiv);

    var lights = [];
    board.columns.forEach(function(column) {
      lights.push(column.getLights());
    });
    assert.equal(lights.length, 5);
  });
});

