Задание

Частой задачей при работе с деревьями (особенно html), является необходимость выбрать список узлов по определенному критерию.

Пара примеров из реальной жизни:

XPath

/bookstore/book/price[text()]
price/@exchange/total
book[excerpt]/author[degree]
JQuery

$("ul > li:first-child")
$("p.class1, #p1")
solution.js
Реализуйте и экспортируйте функцию select, которая возвращает список нод в соответствии с запросом. Запрос это список из имен тегов, в котором каждый следующий тег это тег, вложенный в предыдущий.

Предположим, что у нас есть такой html:

<h1>scheme</h1>
<p>is a lisp</p>
<ul>
    <li>item 1</li>
    <li>item 2</li>
</ul>
<ol>
    <li>item 1</li>
    <li>item 2</li>
</ol>
<p>
    is a functional lang
</p>
<ul>
    <li>item</li>
</ul>
<div>
    <p>text</p>
</div>
<div>
    <div>
        <p>text</p>
    </div>
</div>
<h1>prolog</h1>
<p>is about logic</p>
Тогда:

const dom1 = make(); // Список нод, то есть это лес, а не дерево
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children1));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', 'text'))))));

const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

select(l('ul', 'li'), dom);
// [('li', 'item 1'), ('li', 'item 2'), ('li', 'item')]

select(l('div', 'div', 'p'), dom);
// [('p', 'text')]

select(l('p'), dom));
// [('p', 'is a lisp'), ('p', 'is a functional language'),
//  ('p', 'text'), ('p', 'text), ('p', 'is about logic')]
Алгоритм работы функции
Список тегов для поиска будем называть словом query.
query ищется с любого уровня дерева, а не только с верхнего. Например, если наш query это p, то будут найдены все p на всех уровнях.
Производится поиск только подряд идущих тегов, например, если запрос l('ul', 'li'), то будут найдены только те li, которые идут сразу за ul.
Подсказки
hasChildren - функция, которая проверяет, есть ли потомки у элемента
children - функция, которая возвращает список потомков
p.s. В целом, эта функция достаточно сложна и, если вы сможете решить эту задачу самостоятельно, то вас смело можно брать на работу).

58% пользователей решило эту задачу самостоятельно
