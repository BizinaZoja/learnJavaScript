'use strict';

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    console.log(dateCopy.getDate());
}

let date = new Date(2015, 0, 2);

getDateAgo(date, 1); 
getDateAgo(date, 2); 
getDateAgo(date, 365);