const assert = require('chai').assert;
const $      = require('jquery');
const Light   = require('../lib/light');

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
    var renderedLight = document.getElementsByClassName('light');

    assert.isNotNull(renderedLight);
    assert.equal(light.turnedOn, false);
  });

  it('when rendered adds light-on class', function() {
    var light = new Light();
    var targetDiv = $('#test-game');

    light.render(targetDiv);
    light.toggleStatus();

    var lightOn = document.getElementsByClassName('light-on');
    assert.isNotNull(lightOn);
    assert.equal(light.turnedOn, true);
  });

  it('when rendered removes light-on class ', function() {
    var light = new Light();
    var targetDiv = $('#test-game');

    light.render(targetDiv);
    light.toggleStatus();
    light.toggleStatus();

    var lightOff = document.getElementsByClassName('light-on');
    assert.isNotNull(lightOff);
    assert.equal(light.turnedOn, false);
  });
});

