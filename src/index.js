const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
/**
 * if 'date' is less than 10, add 0 in front then return
 * @param {Number} date
 * @returns {String} '0 + Date'
 */

function datePadded(date) {
  // eslint-disable-next-line no-shadow
  let datePadded = date;

  if (date < 10) {
    datePadded = `0${datePadded}`;
  }
  return datePadded;
}
console.log(datePadded(5))
console.log(datePadded(15))
/**
 * if 'hour' is less than 10, add 0 in front then return
 * @param {Number} hours
 * @returns {String} '0 + hours'
 */
function hoursPadded(hours) {
  // eslint-disable-next-line no-shadow
  let hoursPadded = hours;

  if (hoursPadded === hours && hours < 10) {
    hoursPadded = `0${hoursPadded}`;
  }
  return hoursPadded;
}

/**
 * if 'mins' is less than 10, add 0 in front then return
 * @param {Number} mins
 * @returns  {String} '0 + mins'
 */
function minutesPadded(mins) {
  // eslint-disable-next-line no-shadow
  let minutesPadded = mins;

  if (minutesPadded === mins && mins < 10) {
    minutesPadded = `0${minutesPadded}`;
  }
  return minutesPadded;
}

/**
 * if 'secs' is less than 10, add 0 in front then return
 * @param {Number} secs
 * @returns {String} '0 + secs'
 */
function secondsPadded(secs) {
  // eslint-disable-next-line no-shadow
  let secondsPadded = secs;

  if (secondsPadded === secs && secs < 10) {
    secondsPadded = `0${secondsPadded}`;
  }
  return secondsPadded;
}

/**
 // eslint-disable-next-line max-len, max-len, max-len, max-len, max-len, max-len, max-len, max-len
 * if 'date' is 1,21,31 then return date+st. if 'date' is 2,22 then return date+nd.
 if 'date' is 3,23 then return date+rd. Otherwise, return date+th.
 * @param {Number} date
 * @returns {String} 'date + dateSuffix = 1 st or 2nd or 23rd'
 */
function dateSuffix(date) {
  // eslint-disable-next-line no-shadow
  let dateSuffix = date;

  if (date === 1 || date === 21 || date === 31) {
    dateSuffix = `${dateSuffix}st`;
  // eslint-disable-next-line eqeqeq
  } else if (date === 2 || date == 22) {
    dateSuffix = `${dateSuffix}nd`;
  // eslint-disable-next-line eqeqeq
  } else if (date === 3 || date == 23) {
    dateSuffix = `${dateSuffix}rd`;
  } else {
    dateSuffix = `${dateSuffix}th`;
  }
  return dateSuffix;
}

class D {
  constructor(...args) {
    // eslint-disable-next-line no-underscore-dangle
    this._date = new Date(...args);
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return 1997
     * @param {Number}
     * @returns {Number} 'return year'
     */
  get year() {
    // eslint-disable-next-line no-underscore-dangle
    return this._date.getFullYear();
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return 97
     * @param {Number}
     * @returns {Number} 'return the year in short. 1997 => 97'
     */
  get yr() {
    // eslint-disable-next-line no-underscore-dangle
    return this._date.getFullYear() % 100;
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'October'
     * @param {Number}
     * @returns {String} 'return name of the month.'
     */
  get month() {
    // eslint-disable-next-line no-underscore-dangle
    return months[this._date.getMonth()];
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'Oct'
     * @param {Number}
     * @returns {String} 'return name of the month in short.'
     */

  get mon() {
    // eslint-disable-next-line no-underscore-dangle
    return shortMonths[this._date.getMonth()];
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'Thursday'
     * @param {Number}
     * @returns {String} 'return name of the day.'
     */
  get day() {
    // eslint-disable-next-line no-underscore-dangle
    return days[this._date.getDay()];
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'Thur'
     * @param {Number}
     * @returns {String} 'return name of the day in short.'
     */
  get dy() {
    // eslint-disable-next-line no-underscore-dangle
    return shortDays[this._date.getDay()];
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return '30'
     * @param {Number}
     * @returns {Number} 'return the number for date.'
     */
  get date() {
    // eslint-disable-next-line no-underscore-dangle
    return this._date.getDate();
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return '3'
     * @param {Number}
     * @returns {Number} 'return the number for hours.'
     */
  get hours() {
    // eslint-disable-next-line no-underscore-dangle
    return this._date.getHours();
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return '4'
     * @param {Number}
     * @returns {Number} 'return number for minutes.'
     */
  get mins() {
    // eslint-disable-next-line no-underscore-dangle
    return this._date.getMinutes();
  }

  /**
     * If date is 1997, 9, 30, 3, 4, 5, return '5'
     * @param {Number}
     * @returns {Number} 'return the number for seconds.'
     */
  get secs() {
    // eslint-disable-next-line no-underscore-dangle
    return this._date.getSeconds();
  }

  /**
     * if there is no input string, return the year, month, and date.
     *  Else, return dateComponents + any string that is passed into the function'
     * if format('y/m/d') -> year/month/date ,
     *  if format('H:I:S') -> paddedhours/ paddedmonths/ padded seconds.
     * @param {*} mask
     * @returns {String}'return the formatted input string
     */
  format(mask = '') { // d.format() => 'January 1, 1970'
    if (mask === '') {
      return `${this.year} ${this.month} ${this.date}`;
    }

    const dateComponents = {
      Y: this.year,
      y: this.yr,
      M: this.month,
      m: this.mon,
      D: datePadded(this.date),
      d: this.date,
      '#': dateSuffix(this.date),
      H: hoursPadded(this.hours),
      h: this.hours,
      I: minutesPadded(this.mins),
      i: this.mins,
      S: secondsPadded(this.secs),
      s: this.secs,
    };
    let dateStr = '';
    for (let i = 0; i < mask.length; i += 1) {
      const char = mask[i]; // 'm, d, y'
      if (char in dateComponents) {
        dateStr += dateComponents[char];
      } else {
        dateStr += char;
      }
    }
    return dateStr;
  }

  /**
     * if now === (2022, 8, 7, 3, 4, 5), return now - custom date
     * to state how many days, months, or years are from now on or ago.
     * if new_date == (2022, 9, 7, 3, 4, 5) return The date is 1 month from now on.'
     * @param {Number}
     * @returns {String} 'return a statement that indicates
     * how many days, months, or years are from now on or ago.
     */
  // eslint-disable-next-line consistent-return
  when() {
    const now = new Date();
    // eslint-disable-next-line no-underscore-dangle
    const comparedDate = new Date(this._date);
    const ny = now.getFullYear();
    const nm = now.getMonth();
    const nd = now.getDate();
    const cy = comparedDate.getFullYear();
    const cm = comparedDate.getMonth();
    const cd = comparedDate.getDate();

    if (ny === cy) {
      if (cm > nm) { // sep - jan
        if ((cm - nm) > 1) {
          return (`The date is ${cm - nm} months from now on.`);
        }
        return (`The date is ${cm - nm} month from now on.`);
      } if (nm === cm) {
        if (nd > cd) {
          if ((nd - cd) > 1) {
            return (`The date is ${nd - cd} days ago.`);
          }
          return (`The date is ${nd - cd} day ago.`);
        } if (nd === cd) {
          return ('Today');
        }
        if ((cd - nd) > 1) {
          return (`The date is ${cd - nd} days from now on.`);
        }
        return (`The date is ${cd - nd} day from now on.`);
      }
      if ((nm - cm) > 1) {
        return (`The date is ${nm - cm} months ago.`);
      }
      return (`The date is ${nm - cm} month ago.`);
    } if (ny < cy) { // done
      if ((cy - ny) > 1) {
        return (`The date is ${cy - ny} years from now on.`);
      }
      return (`The date is ${cy - ny} year from now on.`);
    } if (ny > cy) { // 2022 > 2021
      if ((nm - cm) < 11 && nm !== cm && nm > cm) {
        return (`The date was ${ny - cy} years ${nm - cm} months ago`);
      } if ((nm - cm) < 11 && nm !== cm && cm > nm) {
        return (`The date was ${ny - cy} years ${cm - nm} months ago`);
      }
      return (`The date was ${ny - cy} year ago`);
    }
  }
}

module.exports = D;
