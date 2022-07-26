"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("../src/app"));
var supertest_1 = __importDefault(require("supertest"));
var database_1 = require("../src/config/database");
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE users RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE users RESTART IDENTITY CASCADE"])))];
            case 1:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE categories RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE categories RESTART IDENTITY CASCADE"])))];
            case 2:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE"])))];
            case 3:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["TRUNCATE TABLE teachers RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE teachers RESTART IDENTITY CASCADE"])))];
            case 4:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["TRUNCATE TABLE \"teachersDisciplines\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"teachersDisciplines\" RESTART IDENTITY CASCADE"])))];
            case 5:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["TRUNCATE TABLE \"terms\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"terms\" RESTART IDENTITY CASCADE"])))];
            case 6:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["TRUNCATE TABLE \"tests\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"tests\" RESTART IDENTITY CASCADE"])))];
            case 7:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$disconnect()];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var USER = {
    email: "teste@teste.com",
    password: "1234567890"
};
var TEST = {
    name: "test",
    pdfUrl: "https://bootcampra.notion.site/Projeto-20-RepoProvas-27d678dab2584fc980f1686285d1d04c",
    categoryId: 1,
    teacherId: 2,
    disciplineId: 4
};
var token;
describe("POST /signup", function () {
    it("create user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-up").send(USER)];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("create a user with an email already in use", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-up").send(USER)];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(409);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("POST /signin", function () {
    it("login with valid a credentials", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(USER)];
                case 1:
                    response = _a.sent();
                    token = response.body.token;
                    expect(token).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it("login without a valid credentials", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(__assign(__assign({}, USER), { password: "0000000000" }))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("POST /tests", function () {
    it("post a test with a valid data", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/tests").set('Authorization', "Bearer ".concat(token)).send(TEST)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("post a test without a valid teacher", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/tests").set('Authorization', "Bearer ".concat(token)).send(__assign(__assign({}, TEST), { teacherId: 99999 }))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("post a test without a valid category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/tests").set('Authorization', "Bearer ".concat(token)).send(__assign(__assign({}, TEST), { categoryId: 9999 }))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("post a test without a valid discipline", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/tests").set('Authorization', "Bearer ".concat(token)).send(__assign(__assign({}, TEST), { disciplineId: 9999 }))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("post a test without a valid url", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/tests").set('Authorization', "Bearer ".concat(token)).send(__assign(__assign({}, TEST), { pdfUrl: "not a valid url" }))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(422);
                    return [2 /*return*/];
            }
        });
    }); });
    it("post a test without a valid name", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/tests").set('Authorization', "Bearer ".concat(token)).send(__assign(__assign({}, TEST), { name: "" }))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(422);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("GET /tests", function () {
    it("get tests with a valid disciplines query", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get("/tests?groupBy=disciplines").set('Authorization', "Bearer ".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it("get tests with a valid teachers query", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get("/tests?groupBy=teachers").set('Authorization', "Bearer ".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it("get tests without a valid query", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get("/tests?groupBy=teste").set('Authorization', "Bearer ".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=all.test.js.map