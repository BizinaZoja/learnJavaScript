'use strict';

// 1

function makeUser() {
    return {
    name: "John",
    ref: this
    };
}

let user = makeUser();

// alert( user.ref.name ); // Выведет ошибку

// 2

let calculator = {
    read() {
        this.first = +prompt('Первое число', ''),
        this.second = +prompt('Второе число', '')
    },

    sum() {
        return this.first + this.second
    },

    mul() {
        return this.first * this.second
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 3

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
  };
  

  ladder.up().up().down().showStep().down().showStep();

// 4

