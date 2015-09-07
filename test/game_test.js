const assert = require('chai').assert;
const $      = require('jquery');
const Game   = require('../lib/game');

describe('game', function() {
  it('should exist', function() {
    assert(Game);
  });

  it('is an object', function() {
    assert(new Game());
  });

  it('should render itself', function() {
    var game = new Game();
    var targetDiv = $('#test-game');
    game.render(targetDiv);

    var renderedGame = document.getElementsByClassName('.board')
    assert.isNotNull(renderedGame);
  });

  it('should wipeout', function() {
    var game = new Game();
    var targetDiv = $('#test-game');
    game.render(targetDiv);
    var lightsCount = document.getElementsByClassName('light').length;
    var columnsCount = document.getElementsByClassName('column').length;
    var boardCount = document.getElementsByClassName('board').length;
    game.wipeOut();
    var remainingBoardCount = document.getElementsByClassName('board').length;
    var remainingColumnsCount = document.getElementsByClassName('column').length;
    var remainingLightsCount = document.getElementsByClassName('light').length;

    assert.notEqual(boardCount, remainingBoardCount);
    assert.equal(remainingBoardCount, 0);
    assert.notEqual(columnsCount, remainingColumnsCount);
    assert.equal(remainingColumnsCount, 0);
    assert.notEqual(lightsCount, remainingLightsCount);
    assert.equal(remainingLightsCount, 0);
  });

  it("should toggle it's lights", function() {
    var game = new Game();
    var targetDiv = $('#test-game');
    game.render(targetDiv);

    game.toggleLights(0, 0);

    var lights = [];
    game.board.columns.forEach(function(column) {
      lights.push(column.lights)
    });

    var testedLight = _.flatten(lights)[0];
    var secondTestedLight = _.flatten(lights)[1];
    var sixthTestedLight = _.flatten(lights)[5];

    assert.equal(testedLight.turnedOn, true);
    assert.equal(secondTestedLight.turnedOn, true);
    assert.equal(sixthTestedLight.turnedOn, true);

    game.toggleLights(0, 0);

    assert.equal(testedLight.turnedOn, false);
    assert.equal(secondTestedLight.turnedOn, false);
    assert.equal(sixthTestedLight.turnedOn, false);
  });

  it('checks if game is over by having all lights off', function() {
    var game = new Game();
    var targetDiv = $('#test-game');
    game.render(targetDiv);

    assert.equal(game.allLightsOff(), true)
  });

  it("should randomize it's lights", function() {
    var game = new Game();
    var targetDiv = $('#test-game');
    game.render(targetDiv);

    game.randomizeLights();

    var lights = game.getAllLights();

    var lightsOn = _.map(lights, function(light) {
      return light.turnedOn === true
    });

    assert.notEqual(lightsOn.length, 0)
  });
});

