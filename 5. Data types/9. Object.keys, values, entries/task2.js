'use strict';

function count(obj) {
    console.log(Object.keys(obj).length);
}
let user = {
    name: 'John',
    age: 30
  };
  
 count(user);