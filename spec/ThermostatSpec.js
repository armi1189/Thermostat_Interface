describe("Thermostat default values", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });


  it("has a 'Power Save' mode that's 'on' by default", function() {
    expect(thermostat.powerSave).toBe(true);
  });

  it("has minimum temperature of 10", function() {
    expect(thermostat.minimum).toEqual(10);
  });

  it("has a maximum temperature of 25 if Power Save is on", function() {
    expect(thermostat.maximum).toEqual(25);
  });

  it("has a maximum temperature of 32 if Power Save is off", function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.maximum).toEqual(32);
  });

});

describe("Thermostat features", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("can increase temperature with 'up' button", function() {
    newTemperature = (thermostat.temperature + 1)
    thermostat.increase();
    expect(thermostat.temperature).toEqual(newTemperature);
  });

  it("can decrease temperature with 'down' button", function() {
    newTemperature = (thermostat.temperature - 1)
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(newTemperature);
  });

  it("cannot go under his minimum temperature", function() {
    var decreaseTimes = (thermostat.temperature - thermostat.minimum + 1);
    var count = decreaseTimes;
    for (i=0; i < count; i++) {
      thermostat.decrease();
    };
    expect(thermostat.temperature).toEqual(thermostat.minimum);
  });

  it("cannot go over maximum temperature if Power Save is on", function() {
    var increaseTimes = (thermostat.maximum - thermostat.temperature + 1);
    var count = increaseTimes;
    for (i=0; i < count; i++) {
      thermostat.increase();
    }
    expect(thermostat.temperature).toEqual(thermostat.maximum);
  });

  it("cannot go over maximum temperature if Power Save is off", function() {
    thermostat.powerSaveSwitch();
    var increaseTimes = (thermostat.maximum - thermostat.temperature + 1);
    var count = increaseTimes;
    for (i=0; i < count; i++) {
      thermostat.increase();
    }
    expect(thermostat.temperature).toEqual(thermostat.maximum);
  });

  it("has a switch to change 'Power Save' status", function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSave).toBe(false);
  });

  it("has a reset button to resets the temperature to default temperature", function() {
    thermostat.increase();
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(thermostat.defaultTemperature);
  });


});
