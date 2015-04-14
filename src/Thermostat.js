function Thermostat() {
  this.temperature = 20;
  this.powerSave = true;
  this.minimum = 10;
};

Thermostat.prototype.increase = function() {
  this.temperature ++;
};

Thermostat.prototype.decrease = function() {
  if (this.temperature > this.minimum) this.temperature --;
};

Thermostat.prototype.powerSaveSwitch = function() {
  this.powerSave = !(this.powerSave);
};