describe("Thermostat", function() {

  thermostat = new Thermostat();

  it("has a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("can increase temperature with 'up' button", function() {
    thermostat.increase
    expect(thermostat.temperature).toEqual(21);
  });
});
