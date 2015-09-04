const $     = require('jquery');

function Light() {
  this.turnedOn = false;
  this.x = null;
  this.y = null;
}

Light.prototype.toggleStatus = function() {
  if (this.turnedOn) {
    this.turnedOn = false;
  } else {
    this.turnedOn = true;
  }
};

Light.prototype.render = function(targetDiv) {
  var lightElement = $('<div class="light"></div>');
  
  lightElement.attr('data-x', this.x);
  lightElement.attr('data-y', this.y);
  
  if (this.turnedOn) {
    $(lightElement).addClass('light-on');
  } else {
    $(lightElement).removeClass('light-on');
  }
  
  targetDiv.append(lightElement);
};

module.exports = Light;
