'use strict';

function copySorted(arr) {
    let newArr = arr.slice().sort();
    console.log(newArr);
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
console.log(arr);