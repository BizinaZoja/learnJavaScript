'use strict';

function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    console.log(Math.round((now - today) / 1000)); 
  }
  
getSecondsToday();