import { reduce, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString, filter, node, map } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
export const extractHeaders = html => {
  const html2 = filter(elem => is('h2', elem), html);
  return map(elem => {
    if (is('h2', elem)) {
      return node('p', value(elem));
    }
    return elem;
  }, html2);
};

export const wordsCount = (tag, word, dom) => {
  const dom1 = filter(elem => is(tag, elem), dom);
  return reduce((elem, acc) => {
    acc += wc(word, value(elem));
    return acc;
  }, 0, dom1);
};
// END
