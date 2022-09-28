"use strict";
exports.__esModule = true;
exports.hoursPadded = void 0;
function hoursPadded(hours) {
    var strHour = '';
    if (hours < 10) {
        strHour = "0".concat(hours);
    }
    return strHour;
}
exports.hoursPadded = hoursPadded;
