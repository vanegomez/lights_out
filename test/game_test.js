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

  xit('should wipeout', function() {
    var game = new Game();
    var targetDiv = $('#test-game');
    game.render(targetDiv);

    game.wipeOut();
    var removedClassBoard = document.getElementsByClassName('.board');
    var removedClassColumn = document.getElementsByClassName('.column');
    var removedClassLight = document.getElementsByClassName('.light');

    //assert.include(removedClassBoard, false);
    assert.notInclude(document,'.board');
    assert.isNotNull(removedClassLight);
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

