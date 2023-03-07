'use strict';

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let res = new WeakMap();
  res.set(messages[0], Date(2023, 3, 5)); 
  //в данной задаче нужно хранить сообщения в WeakMap, чтобы иметь пары сообщение-дата