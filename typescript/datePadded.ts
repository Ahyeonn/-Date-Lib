function datePadded(date: number): string {
    let strDate: string = ''
    if (date < 10) {
        strDate = `0${date}`
    }
    return strDate
}        

export {
    datePadded
}