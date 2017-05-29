import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const filter = (func, elem) => {
    if (isEmpty(elem)) {
      return l();
    }
    return func(head(elem)) ? cdr(cdr(head(elem))) : filter(func, tail(elem));
  };
  return filter( elem => car(elem) === car(obj) &&
    car(cdr(elem)) === methodName, methods);
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };
