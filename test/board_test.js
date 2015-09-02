const assert = require('chai').assert;
const Board  = require('../lib/board');
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
    assert.equal(board.length, 5);
    board.forEach(function(column) {
      assert.equal(column.length, 5);
    })
  });
  
  it('has columns made up of lights', function() {
    var board = new Board();
    board.forEach(function(column) {
      column.forEach(function(light) {
        assert.instanceOf(light, Light);
      })
    })
  });
});
