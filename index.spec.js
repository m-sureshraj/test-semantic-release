const sum = require('./index');

test('adds 10 + 20', () => {
    expect(sum(10, 20)).toBe(30);
});

test('adds 1 + 3', () => {
    expect(sum(1,3)).toBe(4);
})
