'use strict';

function Calculator() {

    this.operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b
    }
  
    this.calculate = function(str) {
  
      let arrStr = str.split(' '),
          a = +arrStr[0],
          oper = arrStr[1],
          b = +arrStr[2]
  
      if ( isNaN(a) || isNaN(b) || !this.operations[oper] ) {
        return NaN;
      }
  
      return this.operations[oper](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.operations[name] = func;
    }
  }

  let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );