'use strict';

function unique(arr) {
    let res = [];

    for (let str of arr) {
      if (!res.includes(str)) {
        res.push(str);
      }
    }
  
    console.log(res);
  }

  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  unique(strings); 