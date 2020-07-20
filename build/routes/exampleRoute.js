"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get('/', controllers_1.exampleGetController);
router.post('/', controllers_1.examplePostController);
exports.default = router;
