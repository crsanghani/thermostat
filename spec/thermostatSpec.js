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
});
