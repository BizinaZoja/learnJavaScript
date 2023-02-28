'use strict';

function random(min, max) {
    let res = Math.trunc(min + (Math.random() * (max - min)));
   
    console.log(res);
}

random(8, 20);
random(8, 20);
random(8, 20);