"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var testControllers_1 = require("../controllers/testControllers");
var validateSchema_1 = require("../middlewares/validateSchema");
var validateToken_1 = require("../middlewares/validateToken");
var testSchema_1 = __importDefault(require("../schemas/testSchema"));
var testRouter = (0, express_1.Router)();
testRouter.use(validateToken_1.validateToken);
testRouter.post("/tests", (0, validateSchema_1.validateSchema)(testSchema_1["default"]), testControllers_1.postTestController);
testRouter.get("/tests", testControllers_1.getTestController);
exports["default"] = testRouter;
//# sourceMappingURL=testRouters.js.map