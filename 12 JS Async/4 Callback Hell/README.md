# JS: Асинхронное программирование

Callback hell

Цель: Познакомиться с пугающей ситуацией "callback hell", которая может возникнуть при наличии зависимых асинхронных вызовов и нескольких функций обратного вызова. Научиться справляться с этой проблемой, рассмотреть технику waterfall.

Задание<br/>
×<br/>
solution.js<br/>
Реализуйте и экспортируйте по умолчанию функцию retry. Задача функции состоит в том, чтобы в случае ошибки повторять вызовы, так, чтобы в сумме, функция была вызвана столько раз, сколько передано первым параметром. Если передан 0, то ставит значение попыток равным 5, что является значением по умолчанию.

В примере ниже, в худшем случае, функция будет вызвана три раза.

retry(3, callback =><br/>
  fs.readFile('file.txt', (err, body) => {<br/>
    callback(err, body);<br/>
  }), (err, result) => {<br/>
    console.log(result);<br/>
});<br/>
80% пользователей решило эту задачу самостоятельно

