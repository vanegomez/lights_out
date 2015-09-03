const assert = require('chai').assert;
const Light = require('../lib/light');

describe('light', function() {
  
  it('should exist', function() {
    assert(Light);
  });
  
  it('is an object', function() {
    assert(new Light());
  });
  
  it('should default to a status of off', function() {
    var light = new Light();
    assert.equal(light.turnedOn, false);
  });
  
  it('can be turned on', function() {
    var light = new Light();
    assert.equal(light.turnedOn, false);
    light.toggleStatus();
    assert.equal(light.turnedOn, true);
    light.toggleStatus();
    assert.equal(light.turnedOn, false);
  });

  it('should render', function() {
    var light = new Light();
    var targetDiv = $('#test-game');
    light.render(targetDiv);

    assert.equal(light.turnedOn, false);

  });
});

//describe('game', function() {
//  it('should render itself', function() {
//    var game = new Game();
//    var targetDiv = $('#test-game');
//    game.render(targetDiv)
//
//    var renderedGame = document.querySelector('.game')
//
//    assert.isNotNull(renderedGame);
//  });
