'use strict';

describe('Thermostat', function(){
  var Thermostat = require('../src/Thermostat');
  var thermostat;

  beforeEach(function(){
   thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // You can increase the temperature with the up button

  it('increases temperature with up button', function(){
    thermostat.upButton();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  // You can decrease the temperature with the down button

  it('decreases temperature with down button', function(){
    thermostat.downButton();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  // The minimum temperature is 10 degrees

  it('has a minimum temperature of 10 degrees', function(){
    thermostat.temperature = 10;
    expect( function(){ thermostat.downButton(); } ).toThrow(new Error("Thermostat at minimum"));
  });

  // If power saving mode is on, the maximum temperature is 25 degrees

  it('has power saving mode', function() {
    expect( thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has a maximum temperature of 25', function() {
    thermostat.temperature = 25;
    expect( function(){ thermostat.upButton(); } ).toThrow(new Error("Thermostat at maximum"));
  });
});
