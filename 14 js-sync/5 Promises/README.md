# Promises

Цель: Познакомиться с основным способом управления асинхронным кодом.


Задание<br/>
×<br/>
В этом упражнении необходимо создать библиотеку для работы с http, которая оборачивает встроенный в node.js модуль http в промисы. Интерфейсом библиотеки являются две функции: get и post.

Определение функции get:

export const get = (url, config = {}) =><br/>
  dispatch({ ...config, url, method: 'GET' });
  
Использование:

const host = 'http://ru.hexlet.io';

get('http://ru.hexlet.io').then(response => {<br/>
  console.log(response.status); // 301<br/>
});
Определение функции post:

export const post = (url, data, config = {}) =><br/>
  dispatch({ ...config, url, data, method: 'POST' });<br/>
const data = { nickname: 'scooter' };<br/>
post('https://ru.hexlet.io/users', data).then(response => {<br/>
  console.log(response.status); // 201<br/>
});<br/>
config – это объект со следующей структурой:

method - глагол http<br/>
data - объект содержащий данные, которые будут отправлены в теле запроса<br/>
url - адрес назначения<br/>
params - параметры, которые будут подставлены в адрес как query params<br/>
headers - заголовки<br/>
response – это тоже объект, состоящий из:

status - код ответа<br/>
statusText - текст ответа соответствующий коду<br/>
headers - заголовки<br/>
data - тело ответа<br/>
Дополнительной фишкой библиотеки является автоматическое кодирование данных при выполнении post запроса и установка следующих заголовков:

'Content-Type': 'application/x-www-form-urlencoded'<br/>
'Content-Length': ...<br/>
dispatcher.js<br/>
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход конфигурацию запроса (примеры в solution.js) и возвращает промис. В промисе должен выполняться запрос, соответствующий параметрам из входной конфигурации.

77% пользователей решило эту задачу самостоятельно