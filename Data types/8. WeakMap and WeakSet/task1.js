'use strict';

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let res = new WeakSet();

  res.add(messages[1]); //добавляем прочитанные сообщения, будет хранить только уникальные сообщения, без повторов, если какое-то сообщение из messages удалить, то оно удалится и из res