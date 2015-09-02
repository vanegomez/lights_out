function Light() {
  this.turnedOn = false;
  this.x = null;
  this.y = null;
}

Light.prototype.changeStatus = function() {
  if (this.turnedOn) {
    this.turnedOn = false;
  } else {
    this.turnedOn = true;
  }
};

module.exports = Light;
