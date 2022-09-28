"use strict";
exports.__esModule = true;
exports.secondsPadded = void 0;
function secondsPadded(secs) {
    var strSeconds = '';
    if (secs < 10) {
        strSeconds = "0".concat(secs);
    }
    return strSeconds;
}
exports.secondsPadded = secondsPadded;
