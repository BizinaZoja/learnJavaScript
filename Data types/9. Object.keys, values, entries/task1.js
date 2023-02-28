'use strict';

function sumSalaries(salaries) {
  console.log(Object.values(salaries).reduce((sum, salary) => sum + salary, 0));
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
 sumSalaries(salaries);