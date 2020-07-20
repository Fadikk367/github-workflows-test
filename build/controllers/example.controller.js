"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.examplePostController = exports.exampleGetController = void 0;
var example_service_1 = require("../services/example.service");
exports.exampleGetController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("\n    <div>\n      <h1>Hi there, It seems to work :D</h1>\n      <form action=\"/example\" method=\"POST\">\n        <input name=\"num1\" type=\"number\" placeholder=\"number a\"><br />\n        <input name=\"num2\" type=\"number\" placeholder=\"number b\"> <br />\n        <button type=\"submit\">SUBMIT</button>\n      </form>\n    </div>\n  ");
        return [2 /*return*/];
    });
}); };
exports.examplePostController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, num1, num2, a, b, addition, subtraction, multiplication, division;
    return __generator(this, function (_b) {
        _a = req.body, num1 = _a.num1, num2 = _a.num2;
        a = Number(num1);
        b = Number(num2);
        console.log("a: " + a + ", b: " + b);
        try {
            addition = example_service_1.add(a, b);
            subtraction = example_service_1.subtract(a, b);
            multiplication = example_service_1.multiply(a, b);
            division = example_service_1.divide(a, b);
            res.send("\n      <div>\n        <h1>Result:</h1>\n        <span>a + b: " + addition + "</span><br />\n        <span>a - b: " + subtraction + "</span><br />\n        <span>a * b: " + multiplication + "</span><br />\n        <span>a / b: " + division + "</span><br />\n      </div>\n    ");
        }
        catch (err) {
            console.log(err.message);
            res.send("<h2>Sorry, something broke</h2>");
        }
        return [2 /*return*/];
    });
}); };
