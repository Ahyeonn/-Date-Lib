import {months, shortMonths, days, shortDays} from './dateVars'
import {datePadded} from './datePadded'
import {hoursPadded} from './hoursPadded'
import {dateSuffix} from './dateSuffix'
import {minutesPadded} from './minutesPadded'
import {secondsPadded} from './secondsPadded'


class D {
    _date: Date
    constructor(...args: number[]) {
        this._date = new Date (args[0], args[1], args[2], args[3], args[4], args[5])
    }

    get year(): number {
        return this._date.getFullYear()
    }

    get yr(): number {
        return this._date.getFullYear() % 100
    }

    get month(): string {
        return months[this._date.getMonth()]
    }

    get mon(): string {
        return shortMonths[this._date.getMonth()]
    }

    get day(): string {
        return days[this._date.getDay()]
    }

    get dy(): string {
        return shortDays[this._date.getDay()]
    }

    get date(): number {
        return this._date.getDate()
    }

    get hours(): number {
        return this._date.getHours()
    }
    
    get mins(): number {
        return this._date.getMinutes()
    }

    get secs(): number {
        return this._date.getSeconds()
    }

    format(mask = ''): string { // d.format() => 'January 1, 1970'
        if (mask === ''){
            return `${this.year} ${this.month} ${this.date}`
        }

        const dateComponents: any = {
            'Y': this.year,
            'y': this.yr,
            'M': this.month,
            'm': this.mon,
            'D': datePadded(this.date),
            'd': this.date,
            '#': dateSuffix(this.date),
            'H': hoursPadded(this.hours),
            'h': this.hours,
            'I': minutesPadded(this.mins),
            'i': this.mins,
            'S': secondsPadded(this.secs),
            's': this.secs
        }
        let dateStr: string = ''
        for (let i = 0; i < mask.length; i += 1) {
            const char: string = mask[i] // 'm, d, y'
            if (char in dateComponents) {
            dateStr += dateComponents[char]
            }
            else  {
                dateStr += char
            }
        }
        return dateStr
    }

    when(): any {
        const now: Date = new Date()
        const comparedDate: Date = new Date(this._date)
        const ny: number = now.getFullYear()
        const nm: number = now.getMonth()
        const nd: number = now.getDate()
        const cy: number = comparedDate.getFullYear()
        const cm: number = comparedDate.getMonth()
        const cd: number = comparedDate.getDate()

        if (ny === cy) {
            if (cm > nm) { // sep - jan
                if ((cm - nm) > 1) {
                    return(`The date is ${cm - nm} months from now on.`)
                }
                else {
                    return(`The date is ${cm - nm} month from now on.`)
                }
            }
            else if (nm === cm) {
                if (nd > cd) {
                    if ((nd-cd) > 1) {
                        return (`The date is ${nd - cd} days ago.`)
                    }
                    else {
                        return (`The date is ${nd - cd} day ago.`)
                    }
                }
                else if (nd === cd) {
                    return ('Today')
                }
                else {
                    if ((cd-nd) > 1) {
                        return (`The date is ${cd-nd} days from now on.`)
                    }
                    else {
                        return (`The date is ${cd-nd} day from now on.`)
                    }
                }
            }
            else {
                if ((nm-cm) > 1) {
                    return (`The date is ${nm-cm} months ago.`)
                }
                else {
                    return (`The date is ${nm-cm} month ago.`)
                }
            }

        }
        else if (ny < cy) { // done
            if ((cy - ny) > 1){ 
                return (`The date is ${cy-ny} years from now on.`)
            }
            else {
                return (`The date is ${cy-ny} year from now on.`)
            }
        }
        else if (ny > cy ) { // 2022 > 2021
            if ((nm-cm) < 11 && nm !== cm && nm > cm) {
                return(`The date was ${ny-cy} years ${nm-cm} months ago`)
            }
            else if ((nm-cm) < 11 && nm !== cm && cm > nm) {
                return(`The date was ${ny-cy} years ${cm-nm} months ago`)
            }
            else {
                return(`The date was ${ny-cy} year ago`)
            }
        }
    }
}

const d = new D(2017, 0, 2, 3, 4, 5)

export {
        D
    }