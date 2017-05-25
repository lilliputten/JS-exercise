import { l, isEmpty, head, tail, cons } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const take = (num, list) => {
  if (num === 0 || isEmpty(list)) {
    return l();
  }

  return cons(head(list), take(num - 1, tail(list)));
};

export default take;
// END