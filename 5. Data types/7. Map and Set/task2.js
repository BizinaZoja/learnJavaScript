'use strict';

function aclean(arr) {
    let map = new Map();
    arr.forEach(item => {
        let value = item.toLowerCase().split('').sort().join('');
        map.set(value, item);
    })
    console.log(Array.from(map.values()));
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

aclean(arr);