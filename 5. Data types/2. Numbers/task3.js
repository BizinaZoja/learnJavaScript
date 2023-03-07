'use strict';

function readNumber() {
    let ask;
    do {
       ask = prompt('Введите число', '');

    } while (isNaN(ask));
    
    if (ask === '' || ask === null) {
        return null;
    }
    return ask;
    
    
    
};
alert(readNumber());
