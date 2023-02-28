'use strict';

function filterRange(arr, a, b) {
    let res = arr.filter((item) => ( item >= a && item <= b ));
    console.log(res);

}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
console.log(arr);