describe("Thermostat", function() {
  
  thermostat = new Thermostat();

  it("has a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });
});