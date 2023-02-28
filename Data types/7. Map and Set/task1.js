'use strict';

function unique(arr) {
    let values = Array.from(new Set(arr));
    console.log(values);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(values);