"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.validateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validateToken(req, res, next) {
    var authorization = req.headers.authorization;
    var token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '').trim();
    var key = process.env.TOKEN_KEY;
    jsonwebtoken_1["default"].verify(token, key, function (err, result) {
        if (err)
            return res.status(401).send({ err: err });
        if (result) {
            res.locals.userId = result;
            next();
        }
    });
}
exports.validateToken = validateToken;
;
//# sourceMappingURL=validateToken.js.map