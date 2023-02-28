'use strict';


let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask(
    'Вы согласны?', 
    () => alert('yes'),
    () => alert('no')
);
