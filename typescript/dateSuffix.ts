function dateSuffix(date: number): string {
    let dateSuffix: string = date.toString()

    if (date === 1 || date === 21 || date === 31) {
        dateSuffix = `${dateSuffix}st`
    }
    else if (date === 2 || date == 22 ) {
        dateSuffix = `${dateSuffix}nd`
    }
    else if (date === 3 || date == 23 ) {
        dateSuffix = `${dateSuffix}rd`
    }
    else {
        dateSuffix = `${dateSuffix}th`
    }
    return dateSuffix
}

export {
    dateSuffix
}