"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.divide = exports.subtract = exports.add = void 0;
exports.add = function (a, b) {
    return a + b;
};
exports.subtract = function (a, b) {
    return a - b;
};
exports.divide = function (a, b) {
    if (b === 0) {
        throw new Error('Division by 0!');
        console.log('0!');
    }
    return a / b;
};
exports.multiply = function (a, b) {
    return a * b;
};
