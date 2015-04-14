describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("can increase temperature with 'up' button", function() {
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it("can decrease temperature with 'down' button", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a 'Power Save' mode that's 'on' by default", function() {
    expect(thermostat.powerSave).toBe(true);
  });

  it("has a switch to change 'Power Save' status", function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSave).toBe(false);
  });

  it("has minimum temperature of 10", function() {
    expect(thermostat.minimum).toEqual(10);
  });

  it("cannot go under his minimum temperature", function() {
    var count = (thermostat.temperature - thermostat.minimum + 1);
    for (i=0; i < count; i++) {
      thermostat.decrease();
    };
    expect(thermostat.temperature).toEqual(thermostat.minimum);
  });

  it("has a maximum temperature of 25 if Power Save is on", function() {
    expect(thermostat.maximum).toEqual(25);
  });

  it("has a maximum temperature of 32 if Power Save is off", function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.maximum).toEqual(32);
  });

  it("cannot go over maximum temperature if Power Save is on", function() {
    var count = (thermostat.maximum - thermostat.temperature + 1);
    for (i=0; i < count; i++) {
      thermostat.increase();
    }
    expect(thermostat.temperature).toEqual(thermostat.maximum);
  });

  it("cannot go over maximum temperature if Power Save is off", function() {
    thermostat.powerSaveSwitch();
    var count = (thermostat.maximum - thermostat.temperature + 1);
    for (i=0; i < count; i++) {
      thermostat.increase();
    }
    expect(thermostat.temperature).toEqual(thermostat.maximum);
  });

  it("has a reset button to resets the temperature to default temperature", function() {
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(thermostat.defaultTemperature);
  });

});
