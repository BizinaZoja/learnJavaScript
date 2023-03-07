'use strict';

function inBetween(a, b) {
    return (item) => item >= a && item <= b;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

let res = arr.filter(inBetween(3, 6));

console.log(res);


function inArray(arr) {
    return (item) => arr.includes(item);
}


console.log( arr.filter(inArray([1, 2, 10])) );