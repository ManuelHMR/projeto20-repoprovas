"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createToken(id) {
    var key = process.env.TOKEN_KEY;
    var token = jsonwebtoken_1["default"].sign("".concat(id), key);
    return token;
}
exports["default"] = createToken;
;
//# sourceMappingURL=createToken.js.map