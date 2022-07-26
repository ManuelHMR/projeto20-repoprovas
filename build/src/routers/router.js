"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var authRouters_1 = __importDefault(require("./authRouters"));
var testRouters_1 = __importDefault(require("./testRouters"));
var router = express_1["default"].Router();
router.use(authRouters_1["default"]);
router.use(testRouters_1["default"]);
exports["default"] = router;
//# sourceMappingURL=router.js.map