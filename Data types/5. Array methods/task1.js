'use strict';

function camelize(str) {
    
    console.log( str.split('-').map((item, index) => (index != 0) ? item = item[0].toUpperCase() + item.slice(1) : item ).join('') );
}

camelize("background-color");