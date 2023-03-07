'use strict';

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); //! будет ошибка, так как функция задана внутриблока и не видна