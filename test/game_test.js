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

    var renderedGame = document.querySelector('.board')
    assert.isNotNull(renderedGame);
  });
});

