# Fluent interface


Цель: Познакомиться с паттерном проектирования "fluent interface".


Задание<br/>
×<br/>
solution.js<br/>
Select<br/>
Реализуйте метод select, который отображает (принцип работы как у функции map) коллекцию, другими словами, извлекает из элементов коллекции нужные данные и возвращает объект с новой (отображенной) коллекцией из этих данных.

const cars = [<br/>
  { brand: 'bmw', model: 'm5', year: 2014 },<br/>
  { brand: 'bmw', model: 'm4', year: 2013 },<br/>
  { brand: 'kia', model: 'sorento', year: 2014 },<br/>
  { brand: 'kia', model: 'rio', year: 2010 },<br/>
  { brand: 'kia', model: 'sportage', year: 2012 },<br/>
];<br/>
coll = new Enumerable(cars);<br/>

// [car] => [model]<br/>
const result = coll.select(car => car.model);

assert.deepEqual(result.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);<br/><br/>
OrderBy<br/>
Реализуйте метод orderBy, который сортирует коллекцию на основе переданных данных.

Принимаемые параметры:

Функция, возвращающая значение, по которому будет происходить сортировка.<br/>
Направление сортировки: asc - по возрастанию, desc - по убыванию (по-умолчанию asc).<br/>
const cars = [<br/>
  { brand: 'bmw', model: 'm5', year: 2014 },<br/>
  { brand: 'bmw', model: 'm4', year: 2013 },<br/>
  { brand: 'kia', model: 'sorento', year: 2014 },<br/>
  { brand: 'kia', model: 'rio', year: 2010 },<br/>
  { brand: 'kia', model: 'sportage', year: 2012 },<br/>
];<br/>
coll = new Enumerable(cars);<br/>

const result = coll.orderBy(car => car.year, 'desc')<br/>
  .where(car => car.brand === 'bmw')<br/>
  .select(car => car.model);<br/>

assert.deepEqual(result.toArray(), ['m5', 'm4']);<br/><br/>
Подсказки<br/>
Для выполнения сортировки воспользуйтесь встроенной функцией: sort. <br/>https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

