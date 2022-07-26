"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authControllers_1 = require("../controllers/authControllers");
var validateSchema_1 = require("../middlewares/validateSchema");
var signInSchemas_1 = __importDefault(require("../schemas/signInSchemas"));
var signUpSchema_1 = __importDefault(require("../schemas/signUpSchema"));
var authRouters = (0, express_1.Router)();
authRouters.post("/sign-up", (0, validateSchema_1.validateSchema)(signUpSchema_1["default"]), authControllers_1.signUp);
authRouters.post("/sign-in", (0, validateSchema_1.validateSchema)(signInSchemas_1["default"]), authControllers_1.signIn);
exports["default"] = authRouters;
//# sourceMappingURL=authRouters.js.map