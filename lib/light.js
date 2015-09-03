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
  
  targetDiv.append(lightElement);
  lightElement.attr('id', this.x + '-' + this.y);
};

module.exports = Light;
