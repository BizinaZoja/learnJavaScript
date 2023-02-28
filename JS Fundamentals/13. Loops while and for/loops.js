'use strict';

//1 
// let i = 3;

// while (i) {
//   alert( i-- );
// }             // последнее значение 1

//2
//1) 1, 2, 3, 4
//2) 1, 2, 3, 4, 5

//3
//оба раза 0, 1, 2, 3, 4


//4 
for( let j = 2; j <= 10; j++) {
    if (j % 2 == 0) {
        console.log(j);
    } else {
        continue;
    }
}

//5
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

  let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

//6 
let answ;
do {
    answ = +prompt('number?','');
} while (answ <= 100 && answ)

//7

let n = 100;
prime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i%j == 0) continue prime;
    }
    console.log(i);
}
