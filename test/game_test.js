const assert = require('chai').assert;
const $      = require('jquery');
const Game   = require('../lib/game');

describe('game', function() {
  it('should render itself', function() {
    var game = new Game();
    var targetDiv = $('#test-game');
    game.render(targetDiv);

    var renderedGame = document.querySelector('.game')

    assert.isNotNull(renderedGame);
  });
});
