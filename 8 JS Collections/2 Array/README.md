Цель: Познакомиться с самой распространенной структурой данных — массивом, и посмотреть на общее описание и особенности работы с массивом в JavaScript.

Задание

×

uniq.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый массив, полученный из исходного удалением повторяющихся элементов.

uniq([2, 1, 2, 3]); // [2, 1, 3]

Подсказки

Для формирования новой коллекции (другой конфигурации) из старой подходит reduce.

Метод arr.includes(value) проверяет, входит ли элемент в коллекцию.

Метод arr.concat(value) объединяет исходный массив (на котором вызван метод) с другими массивами и/или значениями (переданными в качестве аргументов). Метод иммутабелен, возвращает новый массив. Примеры и подробности использования см. в документации: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


