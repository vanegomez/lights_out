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

  it('has five rows when created', function() {
    var board = new Board();
    assert.equal(board.matrix.length, 5)
  });

  it('has rows made up of lights', function() {
    var board = new Board();
    var row = board.matrix[0];
    row.forEach(function(light) {
      assert.instanceOf(light, Light)
    });
  });
});
