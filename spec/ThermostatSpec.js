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

  it("has minimum temperature of 10", function() {
    expect(thermostat.minimum).toEqual(10);
  });

  it("cannot go under his minimum temperature", function() {
    var count = 11;
    for (i=0; i < count; i++) {
      thermostat.decrease();
    };
    expect(thermostat.temperature).toEqual(10);
  });

});
