logic.js

Экспортируйте тройку True, False, If, используЯ только функции, внутри которых только функции. ;) То есть нельзЯ пользоватьсЯ встроенными в Язык if, а так же true/false.

Пример:

import { If, True, False } from './logic';

If(True)('one')('two'); // one
If(False)('one')('two'); // two
Из вызовов выше можно сразу увидеть, что If это функциЯ, внутри которой матрешка из двух функций.
