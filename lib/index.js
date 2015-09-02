const $    = require('jquery');
const _    = require('lodash-transpose');
const Game = require('./game');

$('document').ready(function(){
  var game = new Game();
  var lights = _.flatten(game.board);
  assignX(game.board);
  assignY(game.board);
  renderGame(lights);

  toggleLight();
});

function renderGame(lights) {
  for (var i = 0; i < lights.length; i++) {
    $('#light-' + i).attr('x', lights[i].x);
    $('#light-' + i).attr('y', lights[i].y);
  }
}

function assignY(gameboard) {
  gameboard.forEach(function(row){
    row.forEach(function(light, index) {
      light.y = index
    })
  })
}

function assignX(gameboard) {
  _.transpose(gameboard).forEach(function(row){
    row.forEach(function(light, index){
      light.x = index
    })
  })
}

function toggleLight() {
  $('.light').click(function() {
    $(this).toggleClass('light-on');
    $(this).next().toggleClass('light-on');
    $(this).prev().toggleClass('light-on');
    var lightIndex = $(this).index();
    $(this).parent().prev().children().eq(lightIndex).toggleClass('light-on');
    $(this).parent().next().children().eq(lightIndex).toggleClass('light-on');
  });
}
