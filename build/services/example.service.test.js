"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var example_service_1 = require("../services/example.service");
test('should correctly add two numbers', function () {
    expect(example_service_1.add(3, 5)).toBe(8);
});
test('should correctly subtract two numbers', function () {
    expect(example_service_1.subtract(10, 4)).toBe(6);
});
test('should correctly multiply two numbers', function () {
    expect(example_service_1.multiply(3, 5)).toBe(15);
});
test('should correctly divide two numbers', function () {
    expect(example_service_1.divide(40, 10)).toBe(4);
});
test('should throw an error on division by 0', function () {
    expect(function () { return example_service_1.divide(40, 0); }).toThrow('Division by 0!');
});
