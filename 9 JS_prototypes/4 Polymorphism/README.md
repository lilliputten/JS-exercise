JS: Прототипы

Полиморфизм подтипов

Цель: Рассмотреть полиморфизм подтипов на примере практического задания из прошлого урока.


Задание<br/>
×<br/>
buildNode.js<br/>
Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа. Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.

PairedTag.js, SingleTag.js<br/>
Реализуйте типы тегов со следующим интерфейсом:

Конструктор, который принимает на вход: name, attributes, body, children.<br/>
Метод toString, который возвращает текстовое представление узла (html) на всю глубину.