let timer = document.getElementById("timer");

const startDate = new Date(2020, 1, 13, 0);
const timeTick = 1000;

let leapYearMonthDays, yearMonthDays, yearsMonthDays;
leapYearMonthDays = [31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31];
yearMonthDays = Array.from(leapYearMonthDays);
leapYearMonthDays.unshift(29);
yearMonthDays.unshift(28);
yearsMonthDays = [...leapYearMonthDays, ...yearMonthDays, ...yearMonthDays, ...yearMonthDays];

timer.innerText = getTime();

setInterval(() => {
    timer.innerText = getTime();
}, timeTick)

function getTime() {
    let milliseconds = new Date() - startDate;
    let seconds = milliseconds / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let month = 0;

    for (let i = 0; days >= 28; i++){
        let monthDay = yearsMonthDays[i];
        let differenceDay = days - monthDay;

        if (differenceDay >= 0){
            month++;
            days = differenceDay;
        }

        if (i == yearsMonthDays.length - 1){
            i = 0;
        }
    }

    let year = month / 12;
    month = month % 12;
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    return `${Math.floor(year)}г. ${Math.floor(month)}м. ${Math.floor(days)}д. ${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`;
}