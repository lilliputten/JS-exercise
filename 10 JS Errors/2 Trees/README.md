# JS: Обработка ошибок

Деревья

Цель: Спроектировать и создать библиотеку для работы с произвольными деревьями, которая в последствии будет использоваться для реализации нашей файловой системы.

Задание<br/>
×<br/>
Tree.js<br/>
Реализуйте недостающие части интерфейса типа Tree.

hasChildren()<br/>
hasChild(key)<br/>
getParent()<br/>
removeChild(key)<br/>
getDeepChild(keys)<br/>
getChildren()<br/>
tree = new Tree('/');<br/>
tree.addChild('var')<br/>
  .addChild('lib')<br/>
  .addChild('run');<br/>
tree.addChild('etc');<br/>
tree.addChild('home');<br/>

// example: getDeepChild<br/>
const subtree = tree.getDeepChild(['var', 'lib']);<br/>
subtree.getKey(); // lib<br/>

const parent = subtree.getParent();<br/>
parent.getKey(); // var

tree.removeChild('home'); // true<br/>
tree.removeChild('nonexistentNode'); // false
Подсказки
метод getChildren возвращает массив нод

