'use strict';

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let weekDay = days[date.getDay()];
    console.log(weekDay);
}

let date = new Date(2014, 0, 3);
getWeekDay(date);  