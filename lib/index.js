const $    = require('jquery');
const _    = require('lodash-transpose');
const Game = require('./game');

$('document').ready(function(){
  var game = new Game();
  game.render();
  manageLights(game);
});

function allLightsOff() {
  var offLights = $('div.light:not(.light-on)');
  
  if(offLights.length === 25){
    alert("You win!");
  }
}

function checkGameOver() {
  if(allLightsOff()) {
    alert('You win!')
  }
}

function manageLights(game) {
  $('.light').click(function(event) {
    var light = event.target;
    var y = $(light).data().y;
    var x = $(light).data().x;
    game.toggleLights(x, y);
    game.wipeOut();
    game.render();
    //$(this).toggleClass('light-on');
    //$(this).next().toggleClass('light-on');
    //$(this).prev().toggleClass('light-on');
    //var lightIndex = $(this).index();
    //$(this).parent().prev().children().eq(lightIndex).toggleClass('light-on');
    //$(this).parent().next().children().eq(lightIndex).toggleClass('light-on');
    //checkGameOver();
  });
}
