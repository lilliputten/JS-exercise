# JS: Обработка ошибок

Исключения

Цель: Познакомиться с механизмом обработки ошибок под названием "исключения", понять, как и в каких случаях их уместно использовать.


Задание<br/>
×<br/>

HexletFs.js<br/>
Реализуйте функцию copySync(src, dest), которая копирует файл из src в dest.

Если dest это путь до папки, то имя файла берется из src<br/>
Если dest это путь до файла (существующего или нет), то его содержимое становится равным src

Возможные ошибки:

EISDIR - возникает в случае, если src это директория, а не файл<br/>
ENOENT - возникает в случае, если src не существует, а так же возникает в случае, если не существует директорий по пути dest (копирование не создает директорий)