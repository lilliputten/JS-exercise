import { l, isEmpty, reverse, toString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const flatten = list => {
  const append = (list1, list2) => {
    if (isEmpty(list1)) {
      return list2;
    }
    return cons(head(list1), append(tail(list1), list2));
  };

  if (isEmpty(list)) {
    return l();
  }
  return isList(head(list)) ? append(flatten(head(list)), flatten(tail(list))) 
    : cons(head(list), flatten(tail(list)));
};
// END
