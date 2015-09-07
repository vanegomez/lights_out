const $    = require('jquery');
const _    = require('lodash-transpose');
const Game = require('./game');

$('document').ready(function(){
  var game = new Game();
  game.randomizeLights();
  game.render();
  game.displayClicks();
  bindLightHandlers(game);
  bindNewGameHandlers(game);
});

function generateLightHandler(game) {
  return function(event) {
    var light = event.target;
    var y = $(light).data().y;
    var x = $(light).data().x;
    game.toggleLights(x, y);
    game.wipeOut();
    game.render();
    game.checkGameOver();
    bindLightHandlers(game);
    game.incrementClicks();
  }
}

function generateNewGameHandler(game) {
  return function(event) {
    event.preventDefault();
    game.wipeOut();
    var newGame = new Game();
    newGame.randomizeLights();
    newGame.render();
    newGame.displayClicks();
    bindLightHandlers(newGame);
    bindNewGameHandlers(newGame);
  };
}

function bindLightHandlers(game) {
  $('.light').on('click', generateLightHandler(game));
}

function bindNewGameHandlers(game) {
  $('#new-game').on('click', generateNewGameHandler(game));
}
