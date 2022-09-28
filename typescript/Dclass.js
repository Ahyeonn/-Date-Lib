"use strict";
exports.__esModule = true;
exports.D = void 0;
var dateVars_js_1 = require("./dateVars.js");
var datePadded_js_1 = require("./datePadded.js");
var hoursPadded_1 = require("./hoursPadded");
var dateSuffix_js_1 = require("./dateSuffix.js");
var minutesPadded_js_1 = require("./minutesPadded.js");
var secondsPadded_js_1 = require("./secondsPadded.js");
var D = /** @class */ (function () {
    function D() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._date = new Date(args[0], args[1], args[2], args[3], args[4], args[5]);
    }
    Object.defineProperty(D.prototype, "year", {
        get: function () {
            return this._date.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "yr", {
        get: function () {
            return this._date.getFullYear() % 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "month", {
        get: function () {
            return dateVars_js_1.months[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mon", {
        get: function () {
            return dateVars_js_1.shortMonths[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "day", {
        get: function () {
            return dateVars_js_1.days[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "dy", {
        get: function () {
            return dateVars_js_1.shortDays[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "date", {
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "hours", {
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mins", {
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "secs", {
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    D.prototype.format = function (mask) {
        if (mask === void 0) { mask = ''; }
        if (mask === '') {
            return "".concat(this.year, " ").concat(this.month, " ").concat(this.date);
        }
        var dateComponents = {
            'Y': this.year,
            'y': this.yr,
            'M': this.month,
            'm': this.mon,
            'D': (0, datePadded_js_1.datePadded)(this.date),
            'd': this.date,
            '#': (0, dateSuffix_js_1.dateSuffix)(this.date),
            'H': (0, hoursPadded_1.hoursPadded)(this.hours),
            'h': this.hours,
            'I': (0, minutesPadded_js_1.minutesPadded)(this.mins),
            'i': this.mins,
            'S': (0, secondsPadded_js_1.secondsPadded)(this.secs),
            's': this.secs
        };
        var dateStr = '';
        for (var i = 0; i < mask.length; i += 1) {
            var char = mask[i]; // 'm, d, y'
            if (char in dateComponents) {
                dateStr += dateComponents[char];
            }
            else {
                dateStr += char;
            }
        }
        return dateStr;
    };
    D.prototype.when = function () {
        var now = new Date();
        var comparedDate = new Date(this._date);
        var ny = now.getFullYear();
        var nm = now.getMonth();
        var nd = now.getDate();
        var cy = comparedDate.getFullYear();
        var cm = comparedDate.getMonth();
        var cd = comparedDate.getDate();
        if (ny === cy) {
            if (cm > nm) { // sep - jan
                if ((cm - nm) > 1) {
                    return ("The date is ".concat(cm - nm, " months from now on."));
                }
                else {
                    return ("The date is ".concat(cm - nm, " month from now on."));
                }
            }
            else if (nm === cm) {
                if (nd > cd) {
                    if ((nd - cd) > 1) {
                        return ("The date is ".concat(nd - cd, " days ago."));
                    }
                    else {
                        return ("The date is ".concat(nd - cd, " day ago."));
                    }
                }
                else if (nd === cd) {
                    return ('Today');
                }
                else {
                    if ((cd - nd) > 1) {
                        return ("The date is ".concat(cd - nd, " days from now on."));
                    }
                    else {
                        return ("The date is ".concat(cd - nd, " day from now on."));
                    }
                }
            }
            else {
                if ((nm - cm) > 1) {
                    return ("The date is ".concat(nm - cm, " months ago."));
                }
                else {
                    return ("The date is ".concat(nm - cm, " month ago."));
                }
            }
        }
        else if (ny < cy) { // done
            if ((cy - ny) > 1) {
                return ("The date is ".concat(cy - ny, " years from now on."));
            }
            else {
                return ("The date is ".concat(cy - ny, " year from now on."));
            }
        }
        else if (ny > cy) { // 2022 > 2021
            if ((nm - cm) < 11 && nm !== cm && nm > cm) {
                return ("The date was ".concat(ny - cy, " years ").concat(nm - cm, " months ago"));
            }
            else if ((nm - cm) < 11 && nm !== cm && cm > nm) {
                return ("The date was ".concat(ny - cy, " years ").concat(cm - nm, " months ago"));
            }
            else {
                return ("The date was ".concat(ny - cy, " year ago"));
            }
        }
    };
    return D;
}());
exports.D = D;
var d = new D(2017, 0, 2, 3, 4, 5);
