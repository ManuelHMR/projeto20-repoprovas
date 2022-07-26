"use strict";
exports.__esModule = true;
function errorHandler(error, req, res, next) {
    // console.log(error)
    if (!error.status || !error.message) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
    ;
    return res.status(error.status).send(error.message);
}
exports["default"] = errorHandler;
;
//# sourceMappingURL=errorHandler.js.map