

const newyear = '1 jan 2023';

const daysText = document.getElementById('daysText');
const hourText = document.getElementById('hourText');
const minuText = document.getElementById('minuText');
const scdsText = document.getElementById('scdsText');

function calculate() {
    let today = new Date();
    let newyeardate = new Date(newyear);
    let difference = newyeardate - today;

    console.log(newyear);
    console.log(today);
    console.log(difference);

    let secondsleft = difference / 1000;

    let days = Math.floor(secondsleft / 3600 / 24);
    let hours = Math.floor(secondsleft / 3600) % 24;
    let mins = Math.floor(secondsleft / 60) % 60;
    let seconds = Math.floor(secondsleft) % 60;

    console.log(days);
    console.log(hours);
    console.log(mins);
    console.log(seconds);

    daysText.innerText = days;
    hourText.innerText = hours;
    minuText.innerText = mins;
    scdsText.innerText = seconds;
}

setInterval(calculate, 1000);

