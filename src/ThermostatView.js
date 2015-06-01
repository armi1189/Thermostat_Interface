$(document).ready(function() {
  
  var thermostat = new Thermostat();
  var WorldWeather = 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=London&format=json&key=56b22ed050b5c0012431a90e55ab8'
  var temp;

  $.getJSON(WorldWeather, function(data) {
    temp = data.data.current_condition[0].temp_C;
  }).done(function() {
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
