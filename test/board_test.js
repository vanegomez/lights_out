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

  it('is empty when created', function() {
    var board = new Board();
    assert.equal(board.rows.length, 0)
  });
  
  it('compiles to five rows', function() {
    var board = new Board();
    board.compileBoard();
    assert.equal(board.rows.length, 5)
  });

  it('has rows made up of lights', function() {
    var board = new Board();
    board.compileBoard();
    var row = board.rows[0];
    row.forEach(function(light) {
      assert.instanceOf(light, Light)
    });
  });
});
