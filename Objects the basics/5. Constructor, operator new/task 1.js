'use strict';

let x = {};

function A() { return x; }
function B() { return x; }

let a = new A();
let b = new B();

console.log(a == b);