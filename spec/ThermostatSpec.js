describe("Thermostat", function() {

  thermostat = new Thermostat();

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
});
