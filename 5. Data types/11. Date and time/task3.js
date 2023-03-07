'use strict';

function getLocalDay(date) {
    let weekDay = date.getDay();
    if (weekDay == 0) {
        weekDay = 7;
    }
    console.log(weekDay);
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
getLocalDay(date);