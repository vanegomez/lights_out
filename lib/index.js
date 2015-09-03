const $    = require('jquery');
const _    = require('lodash-transpose');
const Game = require('./game');

$('document').ready(function(){
  var game = new Game();
  game.render();
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
  }
}

function bindLightHandlers(game) {
  $('.light').on('click', generateLightHandler(game))
}
