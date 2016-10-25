'use strict';

describe('Thermostat', function(){
  var Thermostat = require('../src/Thermostat');
  var thermostat;

  beforeEach(function(){
   thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with up button', function(){
    thermostat.upButton();
    expect(thermostat.temperature()).toEqual(21);
  });
});
