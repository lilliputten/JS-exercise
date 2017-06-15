JS: Прототипы

Абстрактное синтаксическое дерево

Цель: Познакомиться с AST — абстрактным синтаксическим деревом, которое участвует практически в любой программе, занимающейся парсингом. Понять, как использовать идею AST для создания HTML Builder'а.

Задание<br/>
×<br/>
solution.js<br/>

Текущая версия htmlBuilder должна уметь работать с одиночными тегами. Список тегов, которые являются одиночными, находится в singleTagsList.

Пример:

// <br>
['br'];<br/>

// <img src="/path"><br/>
['img', { src: '/path' }];<br/>
solution.js<br/>
Реализуйте и экспортируйте функции parse и render.

Функция render принимает на вход ast и возвращает строковое представление.<br/>
Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.<br/>
const data = ['html', [<br/>
  ['meta', { id: 'uniq-key' }, [<br/>
    ['title', 'hello, hexlet!'],<br/>
  ]],<br/>
  ['body', [<br/>
    ['br'],<br/>
  ]],<br/>
]];

const ast = parse(data);

{ name: 'html', attributes: {}, body: '', children: [<br/>
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [<br/>
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },<br/>
  ]},<br/>
  { name: 'body', attributes: {}, body: '', children: [<br/>
    { name: 'br', attributes: {}, body: '', children: [] },<br/>
  ]},<br/>
]}<br/>
