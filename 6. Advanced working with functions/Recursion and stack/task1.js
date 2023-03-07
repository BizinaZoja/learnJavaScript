'use strict';

// через рекурсию
function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
    
}


// через цикл

function sumTo(n) {
    let sum = 0;
    for( let i = 0; i < n; i++ ) {
        sum += i + 1;
    }
    return sum;
}

// через фомулу

function sumTo(n) {
    return n * (n + 1) / 2;
  }

  console.log( sumTo(8) );
