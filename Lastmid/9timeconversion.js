/*
digitalClock(5025)); -> "01:23:45"
digitalClock(61201)); -> "17:00:01"
digitalClock(87000)); -> "00:10:00"
*/

function digitalClock(seconds) {
    let hours = Math.floor(seconds / 3600) % 24;
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
    return `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(remainingSeconds)}`;
}
function padWithZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
}
console.log(digitalClock(5025)); // "01:23:45"
console.log(digitalClock(61201)); // "17:00:01"
console.log(digitalClock(87000)); // "00:10:00"
