'use strict';

// 1

if ("0") {
    alert( 'Привет' );
  } // Yes

// 2

let question = prompt('Какое «официальное» название JavaScript?', '');

if (question == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

// 3

let num = +prompt('Введите число', '');

if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}

//4 

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let res = (a + b < 4) ? 'Мало' : 'Много';

// 5

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let mes = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';
