export function calculateDuration(date) {
    date = Number(date);
    let h = Math.floor(date / 3600);
    let m = Math.floor((date % 3600) / 60);
    let newDate = `${h}h ${m}m`;

    return newDate;
}