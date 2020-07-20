"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var exampleRoute_1 = __importDefault(require("./routes/exampleRoute"));
dotenv_1.default.config();
var port = process.env.PORT || 3000;
var app = express_1.default();
app.use(express_2.default.urlencoded({ extended: true }));
app.use(express_2.default.json());
app.use('/example', exampleRoute_1.default);
app.listen(port, function () {
    console.log("Server is running on port: " + port);
});
