import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, elem) => {
  const iter = (item, acc) => {
    if (isEmpty(item)) {
      return reverse(acc);
    }
  
    const current = head(item);
    const tailElem = tail(item);
    if (func(current)) {
      acc = cons(current, acc);
    } 
    return iter(tailElem, acc);
  };
  return iter(elem, l());
};

export const quotes = dom => {
  const allbq = filter(elem => {
   return is('blockquote', elem);
  }, dom);
  return map(elem => {
    if (is('blockquote', elem)) {
      return value(elem);
    }
  }, allbq);
}
// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
