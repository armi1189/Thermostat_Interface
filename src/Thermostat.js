function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  this.temperature ++;
};

Thermostat.prototype.decrease = function() {
  this.temperature --;
};