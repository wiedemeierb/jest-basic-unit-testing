let div = require('./divisible.js')

test('Dividing 9 by 3 returns Fizz', () => {
    expect(div(9, 3)).toBe('Fizz');
})

test('Dividing 10 by 5 returns Buzz', () => {
    expect(div(10, 5)).toBe('Buzz');
})

test('Dividing 15 by 3 & 5 returns FizzBuzz', () => {
    expect(div(15)).toBe('FizzBuzz')
})