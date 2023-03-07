'use strict';

function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);
    console.log(str);
}

ucFirst('hello');