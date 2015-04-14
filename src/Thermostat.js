function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
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
  if (this.temperature > this.maximum) this.temperature = this.maximum;
};

Thermostat.prototype.powerSaveCheck = function() {
  if (this.powerSave === true) return 25;
  return 32;
};

Thermostat.prototype.resetButton = function() {
  this.temperature = this.defaultTemperature;
};