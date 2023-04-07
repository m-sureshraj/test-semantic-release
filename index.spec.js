const { sum, subtract } = require('./index');

describe('sum', () => {
    test('adds 10 + 20', () => {
        expect(sum(10, 20)).toBe(30);
    });
    
    test('adds 1 + 3', () => {
        expect(sum(1,3)).toBe(4);
    });
})

describe('subtract', () => {
    test('subtracts 10 - 5', () => {
        expect(subtract(10, 5)).toBe(5)
    });
});
