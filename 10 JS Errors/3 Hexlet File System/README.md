# JS: Обработка ошибок

Файловая система

Цель: Начать работу над файловой системой HexletFS.

Задание<br/>
×<br/>
Файловая система должна корректно обрабатывать пустые пути, делая внутри нормализацию. То есть, если ей передать путь ///etc/config//my///, то он транслируется в /etc/config/my.

HexletFs.js<br/>
Реализуйте следующие части интерфейса типа HexletFs.

isDirectory(path)

isFile(path)

mkdirSync(path)

touchSync(path) - создает пустой файл. На самом деле, в реальной файловой системе, команда touch меняет время последнего обращения к файлу, а побочным эффектом этой команды является создание файла в случае его отсутствия. По этой причине данной командой часто пользуются для создания файлов.

Пример:

files.isDirectory('/etc'); // false

files.mkdirSync('/etc');<br/>
files.isDirectory('/etc'); // true

files.mkdirSync('/etc/nginx');<br/>
files.isDirectory('/etc/nginx'); // true

files.isFile('/file.txt'); // false

files.touchSync('/file.txt');<br/>
files.isFile('/file.txt'); // true

Подсказки<br/>
Реализуйте функцию getPathParts, которая разбивает путь на массив имен. Без этой функции не будет работать метод findNode, осуществляющий глубокий поиск файла (каталога) внутри текущего каталога.<br/>
Для работы с путями используйте возможности встроенного в Node.js модуля Path: https://nodejs.org/api/path.html

