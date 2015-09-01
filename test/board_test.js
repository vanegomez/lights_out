const assert = require('chai').assert;
const Board  = require('../lib/board');

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
});
