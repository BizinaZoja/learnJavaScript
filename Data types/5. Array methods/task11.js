'use strict';

function getAverageAge(users) {
    let sum = users.reduce((sumAge, user) => sumAge + user.age, 0);
    let avr = sum / users.length;
    console.log(avr);
}


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

getAverageAge(arr); 