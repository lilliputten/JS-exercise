import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { name, value, node, is } from 'hexlet-html-tags';
import { reverse as reverseStr } from './strings';

// BEGIN (write your solution here)
export const map = (func, elem) => {
  const iter = (elem, acc) => {
    if (isEmpty(elem)) {
      return reverse(acc);
    }
    const newElem = func(head(elem));

    return iter(tail(elem), cons(newElem, acc));
  }
  return iter(elem, l());
}
export const mirror = dom => map(elem => { 
  return node(name(elem),reverseStr(value(elem)));
}, dom);
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
