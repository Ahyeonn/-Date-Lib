function secondsPadded(secs: number): string {
    let strSeconds: string = ''        
    if (secs < 10) {
        strSeconds = `0${secs}`
    }
    return strSeconds
}

export{
    secondsPadded
}