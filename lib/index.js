const $    = require('jquery');
const Game = require('./game');

$('document').ready(function(){
  var game = new Game();
  var lights = _.flatten(game.board);
  renderGame(lights);

  toggleLight();
});

function renderGame(lights) {
  for (var i = 0; i < lights.length; i++) {
    $('#light-' + i).append("I'm light # " + (i + 1));
  }
}

function toggleLight() {
  $('.light').click(function() {
    $(this).toggleClass('light-on')
  });
}
