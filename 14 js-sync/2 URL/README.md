# URL

Цель: Познакомиться с модулем URL, чтобы манипулировать частями адресов, разбирать их, а также собирать обратно.

Цель: Рассмотреть задачу лексического анализа с точки зрения автоматного программирования.

Задание<br/>
×<br/>
solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая обновляет query string в переданном адресе в соответствии с указанными значениями.

Функция принимает на вход два параметра:

адрес, который может содержать query string<br/>
объект с параметрами, которые нужно проставить в query string<br/>
import solution from './solution';<br/>
const address = 'amazon.com/search?page=10&per=5';<br/>
const actual = solution(address, { page: 100, per: 8, order: 'desc' });<br/>
// amazon.com/search?page=100&per=8&order=desc<br/>
Как видно параметры могут встречаться одновременно и в адресе, и в объекте.

const address = 'amazon.com/search?page=10&per=5';<br/>
const actual = solution(address, { order: 'desc', per: null });<br/>
// amazon.com/search?page=10&order=desc<br/>
Правила подстановки следующие:

Если параметра не было, то он добавляется<br/>
Если параметр уже был, то его значение заменяется тем, которое передано в объекте<br/>
Если значение параметра null, то сам параметр должен отсутствовать в адресе, даже если он там был.

