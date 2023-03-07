'use strict';
//1 работают одинаково


//2
//1)
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

//2)

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');

}
//3

function min(a, b) {
    return (a <= b) ? a : b;
}

//4

function pow(x, n) {
    return Math.pow(x, n);
}



