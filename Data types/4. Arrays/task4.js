'use strict';

function sumInput() {
    let arr = [];
    let sum = 0;
    let num;
    while (1) {
        num = prompt('Введите число', '');
        if (isNaN(num) || num === '' || num === null) {
            break;
        };
        console.log(arr);
        arr.push(+num);
    }

    for (let i of arr) {
        sum += i;
    }
    alert(sum);
}

sumInput();