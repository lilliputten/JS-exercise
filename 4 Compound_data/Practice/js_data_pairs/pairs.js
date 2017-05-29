// BEGIN (write your solution here)
export const cons = (a, b) => Math.pow(2, a) * Math.pow(3, b);
export const car = pair => {
  return (pair % 2 !== 0) ? 0 : 1 + car(pair / 2);
};
export const cdr = pair => {
  return (pair % 3 !== 0) ? 0 : 1 + cdr(pair / 3);
};
// END