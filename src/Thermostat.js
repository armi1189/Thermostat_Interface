function Thermostat() {
  this.temperature = 20;
  this.minimum = 10;
};

Thermostat.prototype.increase = function() {
  this.temperature ++;
};

Thermostat.prototype.decrease = function() {
  this.temperature --;
};