"use strict";
exports.__esModule = true;
exports.validateSchema = void 0;
function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            return res.status(422).send(error.details.map(function (detail) { return detail.message; }));
        }
        next();
    };
}
exports.validateSchema = validateSchema;
;
//# sourceMappingURL=validateSchema.js.map