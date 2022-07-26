"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var router_1 = __importDefault(require("./routers/router"));
var errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(router_1["default"]);
app.use(errorHandler_1["default"]);
exports["default"] = app;
//# sourceMappingURL=app.js.map