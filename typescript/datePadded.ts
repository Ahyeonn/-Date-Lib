function datePadded(date: number): string {
    let strDate: string = ''
    if (date < 10) {
        strDate = `0${date}`
    }
    else {
        strDate = date.toString()
    }
    return strDate
}        

export {
    datePadded
}