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
    light.changeStatus();
    assert.equal(light.turnedOn, true);
    light.changeStatus();
    assert.equal(light.turnedOn, false);
  })
});
