'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.upButton = function () {
  this.temperature += 1;
};

Thermostat.prototype.downButton = function () {
  if (this._isMinimumTemperature()){
    throw new Error("Thermostat at minimum")
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype._isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

module.exports = Thermostat;
