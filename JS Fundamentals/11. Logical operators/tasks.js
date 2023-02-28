'use strict';

// 1
alert( null || 2 || undefined ); // выведет 2

// 2 
alert( alert(1) || 2 || alert(3) ); // alert(1) сработает первым, выведет 1

// 3
alert( 1 && null && 2 ); //null

//4
alert( alert(1) && alert(2) ); // 2

//5
alert( null || 2 && 3 || 4 ); // 3

//6

if (age >= 14 && age <= 90)

//7 
if (age < 14 || age > 90)
if (!(age >= 14 && age <= 90))

//8
if (-1 || 0) alert( 'first' );  // yes
if (-1 && 0) alert( 'second' ); //no
if (null || -1 && 1) alert( 'third' ); //yes

//9

let login = prompt('Login','');

if (login === 'Админ') {

    let pass = prompt('Pass', '');

     if (pass === 'Я главный') {
        alert('Здравствуйте!');
     } else if (pass === null || pass === '') {
        alert('Отменено');
     } else {
        alert('Неверный пароль');
     }
} else if (login === null || login === '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}