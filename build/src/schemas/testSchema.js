"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var testSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    pdfUrl: joi_1["default"].string().uri().required(),
    categoryId: joi_1["default"].number().required(),
    teacherId: joi_1["default"].number().required(),
    disciplineId: joi_1["default"].number().required()
});
exports["default"] = testSchema;
//# sourceMappingURL=testSchema.js.map