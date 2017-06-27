# JS: Асинхронное программирование

Работа с ошибками

Цель: Научиться работать с ошибками в асинхронном коде, понять отличия от обработки ошибок в синхронном коде.

Задание<br/>
×<br/>
solution.js<br/>

Реализуйте и экспортируйте по умолчанию функцию filter.

filter(['file1', 'file2', 'file3'], (filePath, callback) => {<br/>
  fs.access(filePath, err => {<br/>
      callback(null, !err)<br/>
  });<br/>
}, (err, results) => {<br/>
  // results now equals an array of the existing files<br/>
});

