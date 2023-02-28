'use strict';

function sortByAge(users) {
   
    users.sort((a, b) => a.age > b.age ? 1 : -1);
   
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);
console.log(users);
// теперь: [vasya, masha, petya]
console.log(arr[0].name); 
console.log(arr[1].name); 
console.log(arr[2].name); 