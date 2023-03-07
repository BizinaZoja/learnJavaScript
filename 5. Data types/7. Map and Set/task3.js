'use strict';

let map = new Map();

map.set("name", "John");

let keys = map.keys(); // - возвращает объект, а нужен массив, 
// можно получить массив из объекта Array.from(map.keys())

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция

let newKeys = Array.from(map.keys());
newKeys.push("more"); // так нет ошибки