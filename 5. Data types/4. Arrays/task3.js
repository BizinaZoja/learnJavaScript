'use strict';

let arr = ["a", "b"];

arr.push(function() {
    alert( this ); // Контекст вызова здесь будет сам массив
});

arr[2](); // Должен вывести массив из 3х элементов ['a', 'b', function()]

