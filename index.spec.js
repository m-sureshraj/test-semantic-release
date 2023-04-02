const sum = require('./index');

test('adds two numbers', () => {
    expect(sum(10, 20)).toBe(30);
});
