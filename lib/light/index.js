function Light() {
  this.turnedOn = false
}

Light.prototype.changeStatus = function() {
  if (this.turnedOn) {
    this.turnedOn = false;
  } else {
    this.turnedOn = true;
  }
};

module.exports = Light;
