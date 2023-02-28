'use strict';

function groupById(arr) {
    let obj = {};
    arr.forEach(item => {
        obj[item.id] = item
    });
    console.log(obj);
}

// или 

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);