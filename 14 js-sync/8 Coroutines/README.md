# Корутины

Цель: Познакомиться с идеей сопрограммы - сущности, которая не только генерирует данные, но и потребляет их.


Задание<br/>
×<br/>
co.js

Реализуйте и экспортируйте по умолчанию функцию co. Она должна принимать на вход генератор и возвращать promise. Функция co опирается на то, что внутри генератора yield используется только для promise.

co(function* () {<br/>
  const a = yield Promise.resolve(1);<br/>
  const b = yield Promise.resolve(2);<br/>
  const c = yield Promise.resolve(3);<br/>

  return [a, b, c]; // [1, 2, 3]<br/>
}).then(data => console.log(data));<br/>
// [1, 2, 3]<br/>

В случае, если promise внутри генератора переходит в состояние rejected, то co трансформирует возникшую ошибку в исключение.

co(function* () {<br/>
  try {<br/>
    yield Promise.reject(new Error('boom'));<br/>
  } catch (err) {<br/>
    console.log(err.message);<br/>
  }<br/>
});<br/>
// boom

83% пользователей решило эту задачу самостоятельно

