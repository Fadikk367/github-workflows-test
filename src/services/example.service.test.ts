import { add, subtract, divide, multiply } from '../services/example.service';

test('should correctly add two numbers', () => {
  expect(add(3, 5)).toBe(8);
});

test('should correctly subtract two numbers', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('should correctly multiply two numbers', () => {
  expect(multiply(3, 5)).toBe(15);
});

test('should correctly divide two numbers', () => {
  expect(divide(40, 10)).toBe(4);
});

test('should throw an error on division by 0', () => {
  expect(() => divide(40, 0)).toThrow('Division by 0!');
});