'use strict';

function printNumber(from, to) {
    let start = from;

    let timer = setInterval(() => {
        console.log(start);
      if (start == to) {
        clearInterval(timer);
      }
      start++;
    }, 1000);
  
}
printNumber(5, 10);

function printNumbers(from, to) {
    let start = from;
  
    setTimeout(function print() {
      console.log(start);
      if (start < to) {
        setTimeout(print, 1000);
      }
      start++;
    }, 1000);
  }
  
 
