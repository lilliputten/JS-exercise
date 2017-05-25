Задание
x
html-tags.js

Реализуйте функцию filter для библиотеки html-tags, используя итеративный процесс:

import { node, append, make, filter } from 'hexlet-html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = filter((element) =>
  !is('h1', element), html3);

//<p>content</p>
toString(processedHtml);

Реализуйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат.

import { toString } from 'hexlet-pairs-data';
import { make, append, node } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is live'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

toString(quotes(dom5)); // ('i am sexy, and i know it', 'live is live');

