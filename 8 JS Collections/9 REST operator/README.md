JS: Коллекции

Операция rest<br/>
Цель: Рассмотреть интересную особенность, позволяющую передавать разное количество параметров в функцию.

Задание<br/>
×<br/>
solution.js<br/>
Реализуйте метод where, основываясь на следующем интерфейсе:

Функция может принимать любое количество параметров, каждый из которых может быть либо функцией, либо объектом. Для функций должна осуществляться простая фильтрация, для объектов нужно проверять соответствие элемента коллекции значениям по тем же ключам, что и в переданном объекте.

const cars = [<br/>
  { brand: 'bmw', model: 'm5', year: 2014 },<br/>
  { brand: 'bmw', model: 'm4', year: 2013 },<br/>
  { brand: 'kia', model: 'sorento', year: 2014 },<br/>
  { brand: 'kia', model: 'rio', year: 2010 },<br/>
  { brand: 'kia', model: 'sportage', year: 2012 },<br/>
];<br/>
coll = new Enumerable(cars);

const result = coll<br/>
  .where(car => car.brand === 'kia')<br/>
  .where(car => car.year > 2011);<br/>

result.toArray();<br/>
// [<br/>
//   { brand: 'kia', model: 'sorento', year: 2014 },<br/>
//   { brand: 'kia', model: 'sportage', year: 2012 },<br/>
// ]<br/>

const result2 = coll.where({ brand: 'bmw' });<br/>
result2.toArray();<br/>
// [<br/>
//   { brand: 'bmw', model: 'm5', year: 2014 },<br/>
//   { brand: 'bmw', model: 'm4', year: 2013 },<br/>
// ]<br/>

const result3 = coll.where({ brand: 'kia', model: 'sorento' });<br/>
result3.toArray();<br/>
// [<br/>
//   { brand: 'kia', model: 'sorento', year: 2014 },<br/>
// ]<br/>

const result4 = coll.where({ brand: 'kia' }, car => car.year < 2013);<br/>
result4.toArray();<br/>
// [<br/>
//   { brand: 'kia', model: 'rio', year: 2010 },<br/>
//   { brand: 'kia', model: 'sportage', year: 2012 },<br/>
// ]<br/>
Подсказки<br/>
Извлечь ключи из объекта можно функцией Object.keys.<br/>
Проверка на функцию: typeof <value> === 'function'.<br/>
Функция every проверяет то, что все элементы коллекции удовлетворяют переданному предикату.<br/>
79% пользователей решило эту задачу самостоятельно

