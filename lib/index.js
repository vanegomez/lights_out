const $    = require('jquery');
const _    = require('lodash-transpose');
const Game = require('./game');

$('document').ready(function(){
  var game = new Game();
  game.randomizeLights();
  game.render();
  game.displayClicks();
  bindLightHandlers(game);
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

function bindLightHandlers(game) {
  $('.light').on('click', generateLightHandler(game))
}
