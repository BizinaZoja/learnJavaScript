'use strict';

function getLastDayOfMonth(year, month) {
    
        let date = new Date(year, month + 1, 0);
        console.log(date.getDate());
      
}

getLastDayOfMonth(2012, 1);