import { isEmpty, head, tail } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const reduce = (func, acc, elem) => {
    if (isEmpty(elem)) {
      return acc;
    }

    const item = head(elem);
    const newAcc = func(item, acc);
    return reduce(func, newAcc, tail(elem));
}

export const emptyTagsCount = (tag, dom) => {
  return reduce((elem, acc) => {
    return is(tag, elem) && value(elem) === '' ? acc + 1 : acc;
  }, 0, dom);
}
// END
