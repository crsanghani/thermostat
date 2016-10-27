$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.upButton();
    updateTemperature();
  })

  $('#temperature-down').on('click', function() {
    thermostat.downButton();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-toggle').on('click', function() {
    thermostat.togglePowerSavingMode();
    updatePowerSavingStatus();
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function updatePowerSavingStatus() {
    if (thermostat.powerSavingMode === true){
      $('#power-saving-status').text("ON");
      $('#power-saving-status').attr('class', 'low-usage');
    } else if (thermostat.powerSavingMode === false) {
      $('#power-saving-status').text("OFF");
      $('#power-saving-status').attr('class', 'high-usage');
    };
  }

});
