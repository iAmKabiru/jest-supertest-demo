const { add, subtract } = require('../src/math');

describe('Math functions', () => {
  test('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
