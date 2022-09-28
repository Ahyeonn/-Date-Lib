"use strict";
exports.__esModule = true;
exports.dateSuffix = void 0;
function dateSuffix(date) {
    var dateSuffix = date.toString();
    if (date === 1 || date === 21 || date === 31) {
        dateSuffix = "".concat(dateSuffix, "st");
    }
    else if (date === 2 || date == 22) {
        dateSuffix = "".concat(dateSuffix, "nd");
    }
    else if (date === 3 || date == 23) {
        dateSuffix = "".concat(dateSuffix, "rd");
    }
    else {
        dateSuffix = "".concat(dateSuffix, "th");
    }
    return dateSuffix;
}
exports.dateSuffix = dateSuffix;
