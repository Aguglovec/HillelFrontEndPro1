export function timeMsToMin(time) {
    let ms = time % 1000;
    let s = Math.floor(time/1000) % 60;
    let m = Math.floor(time/60000);
    if (m===0) {
        return `${s}.${ms} sec`
    
    }
    return `${m} min ${s}.${ms} sec`
}