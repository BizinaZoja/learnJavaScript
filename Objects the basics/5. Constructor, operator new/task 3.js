'use strict';

function Accumulator(startingValue) {
    this.value = startingValue,
    this.read = function() {
        let a = +prompt('Number?', '');
        this.value += a;
    }
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value);