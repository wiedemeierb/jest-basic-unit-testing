let leapyear = require('./leapyear.js');

test('Year 2000 is a leap year', () => {
    expect(leapyear(2000)).toBe(true);
})

test('Year 2003 is not a leap year', () => {
    expect(leapyear(2003)).toBe(false);
})