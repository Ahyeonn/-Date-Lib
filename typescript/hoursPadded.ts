function hoursPadded(hours: number): string {

    let strHour: string = ''

    if (hours < 10) {
        strHour = `0${hours}`
    }
    else {
        strHour = hours.toString()
    }
    return strHour
}

export {
    hoursPadded
}