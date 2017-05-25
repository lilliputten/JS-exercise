// eslint-disable-next-line
import { l, isList, isEmpty, head, tail, append, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const select = (query, dom) => {
  const makeChildList = (query, dom) => {
    const reduced = reduce((elem, acc) => {
      return isList(children(elem)) ? append(acc, children(elem)) : acc;
    }, l(), dom);
    return !isEmpty(tail(query)) ? makeChildList(tail(query), reduced) : reduced;
  };

  const filtered = filter(elem => is(head(query), elem), dom);
  if (isEmpty(tail(query))) {
    if (hasChildren(dom)) {
      const reduced = reduce((elem, acc) => {
        return isList(children(elem)) ? append(acc, children(elem)) : acc;
      }, l(), dom);
      const child = select(query, reduced);
      return isList(child) ? append(child, filtered) : filtered;
    }
    return filtered;
  }
  return hasChildren(filtered) ? makeChildList(tail(query), filtered) : filtered;
};
// END

export const countLeaves = (tree) => {
  if (!isList(tree)) {
    return 1;
  }
  if (isEmpty(tree)) {
    return 0;
  }

  return countLeaves(head(tree)) + countLeaves(tail(tree));
};