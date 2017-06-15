JS: Прототипы

Задание<br/>
×<br/>
solution.js<br/>
Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает строковое представление html.

import buildHtml from './solution';

const data = ['html', [<br/>
  ['meta', [<br/>
    ['title', 'hello, hexlet!'],<br/>
  ]],<br/>
  ['body', { class: 'container' }, [<br/>
    ['h1', { class: 'header' }, 'html builder example'],<br/>
    ['div', [<br/>
      ['span', 'span text2'],<br/>
      ['span', 'span text3'],<br/>
    ]],<br/>
  ]],<br/>
]];<br/>

buildHtml(data);<br/>
<html><br/>
  <meta><title>hello, hexlet!</title></meta><br/>
  <body class="container"><br/>
    <h1 class="header">html builder example</h1><br/>
    <div><br/>
      <span>span text2</span><br/>
      <span>span text3</span><br/>
    </div><br/>
  </body><br/>
</html><br/>
Подсказки<br/>
Для объединения массива в строку, используйте метод join(separator).<br/>
82% пользователей решило эту задачу самостоятельно


