'use strict';

function Calculator() {
    this.read = function() {
        this.first = +prompt('Первое число', ''),
        this.second = +prompt('Второе число', '')
    },

    this.sum = function() {
        return this.first + this.second
    },

    this.mul = function() {
        return this.first * this.second
    }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );