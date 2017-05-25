import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const zip = (l1, l2) => {
  // const iter = (l1, l2, acc) => {
  //   if (isEmpty(l1) || isEmpty(l2)) {
  //     return reverse(acc);
  //   }
  //   acc = cons(l(head(l1), head(l2)), acc);
  //   return iter(tail(l1), tail(l2), acc);
  // }
  // return iter(l1, l2, l());

  if (isEmpty(l1) || isEmpty(l2)) {
      return l();
  }
  return cons(l(head(l1), head(l2)), zip(tail(l1), tail(l2)));

}
// END
