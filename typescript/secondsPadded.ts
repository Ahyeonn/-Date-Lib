function secondsPadded(secs: number): string {
    let strSeconds: string = ''        
    if (secs < 10) {
        strSeconds = `0${secs}`
    }
    else {
        strSeconds = secs.toString()
    }
    return strSeconds
}

export{
    secondsPadded
}