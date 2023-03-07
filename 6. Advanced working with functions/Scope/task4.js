'use strict';

function sum(a) {
    return function(b) {
        a + b;
    };
}

console.log(sum(1)(2));