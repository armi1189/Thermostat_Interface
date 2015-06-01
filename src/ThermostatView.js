$(document).ready(function() {
  
  var thermostat = new Thermostat();
  var OpenWeather = 'api.openweathermap.org/data/2.5/weather?q=London,uk'

  $.getJSON(OpenWeather, function(data) {
    getTemp = data.main.temp;
    temp = temperatureConverter(getTemp);
    $('#outsideTemperature').html(temp);
  });

  function changeColor(swap){
    $('.view').css("color", swap);
  };

  function color(){
    var temperature = thermostat.temperature
    if (temperature < 19) changeColor("rgb(27, 152, 27)");
    if (temperature > 18 && temperature < 25) changeColor("rgb(255, 215, 0)");
    if (temperature > 24) changeColor("rgb(178, 34, 34)");
  };

  function view(){
    color()
    $('.view').html(thermostat.temperature);
  };

  function SwitchStatus(swap){
    $('#powerSave').html(swap);
  }

  function PowerSaveSwitch(){
    if (thermostat.powerSave) SwitchStatus('On')
    else SwitchStatus('Off')
  };

  function temperatureConverter(temp){
    temp = temp - 273.15
    return temp.toFixed(1);
  }

  view()
  PowerSaveSwitch()

  $('.buttonUp').click (function() {
    thermostat.increase();
    view();
  });

  $('.buttonDown').click (function() {
    thermostat.decrease();
    view();
  });

  $('#buttonReset').click (function() {
    thermostat.resetButton();
    view();
  });

  $('#powerSaveSwitch').click (function() {
    thermostat.powerSaveSwitch();
    PowerSaveSwitch();
    view();
  });

});
