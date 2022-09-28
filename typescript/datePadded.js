"use strict";
exports.__esModule = true;
exports.datePadded = void 0;
function datePadded(date) {
    var strDate = '';
    if (date < 10) {
        strDate = "0".concat(date);
    }
    return strDate;
}
exports.datePadded = datePadded;
