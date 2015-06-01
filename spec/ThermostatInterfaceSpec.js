describe('Thermostat web view',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('home.html');
    $.holdReady(false);
  });

  it('displays default temperature', function() {
    expect('#view').toContainText('20');
  });

  it('can increase temperature by clicking Up button', function() {
    $('#buttonUp').click();
    expect('#view').toContainText('21');
  });

  it('can decrease temperature by clicking Down button', function() {
    $('#buttonDown').click();
    expect('#view').toContainText('19');
  });

  it('can reset temperature to default by clicking Reset button', function() {
    $('#buttonUp').click();
    $('#buttonReset').click();
    expect('#view').toContainText('20');
  });

  it('can switch power save mode by clicking Power save button', function() {
    $('#powerSaveSwitch').click();
    expect('#powerSave').toContainText('Off');
  });

  it('cannot increase temperature over 25 with Power Save switched on', function() {
    count = 6
    for (i=0; i < count; i ++) {
      $('#buttonUp').click()};
    expect('#view').toContainText('25');
  });

  it('cannot increase temperature over 32 with Power Save switched off', function() {
    $('#powerSaveSwitch').click();
    count = 13
    for (i=0; i < count; i ++) {
      $('#buttonUp').click()};
    expect('#view').toContainText('32');
  });

  it('cannot decrease temperature below 10', function() {
    count = 11
    for (i=0; i < count; i ++) {
      $('#buttonDown').click()};
    expect('#view').toContainText('10');
  });

  it('resets temperature maximum if is over it and power saver switch is clicked', function() {
    $('#powerSaveSwitch').click();
    count = 12
    for (i=0; i < count; i ++) {
      $('#buttonUp').click()};
    $('#powerSaveSwitch').click();
    expect('#view').toContainText('25');
  });

  it('temperature has gold color if is between 19 and 24', function() {
    expect('#view').toHaveCss({color: "rgb(255, 215, 0)"});
  });

  it('temperature has gold color if is over 24', function() {
    count = 5
    for (i=0; i < count; i ++) {
      $('#buttonUp').click()};
    expect('#view').toHaveCss({color: "rgb(178, 34, 34)"});
  });

  it('temperature has gold color if is below 19', function() {
    count = 3
    for (i=0; i < count; i ++) {
      $('#buttonDown').click()};
    expect('#view').toHaveCss({color: "rgb(27, 152, 27)"});
  });

});