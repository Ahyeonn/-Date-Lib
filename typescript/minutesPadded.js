"use strict";
exports.__esModule = true;
exports.minutesPadded = void 0;
function minutesPadded(mins) {
    // let minutesPadded: any = mins
    var strMins = '';
    if (mins < 10) {
        strMins = "0".concat(mins);
    }
    return strMins;
}
exports.minutesPadded = minutesPadded;
