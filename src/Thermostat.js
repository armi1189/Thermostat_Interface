function Thermostat() {
  this.temperature = 20;
  this.powerSave = true;
  this.minimum = 10;
  this.maximum = this.powerSaveCheck();
};

Thermostat.prototype.increase = function() {
  if (this.temperature < this.maximum) this.temperature ++;
};

Thermostat.prototype.decrease = function() {
  if (this.temperature > this.minimum) this.temperature --;
};

Thermostat.prototype.powerSaveSwitch = function() {
  this.powerSave = !(this.powerSave);
  this.maximum = this.powerSaveCheck();
};

Thermostat.prototype.powerSaveCheck = function() {
  if (this.powerSave === true) return 25;
  return 32;
};