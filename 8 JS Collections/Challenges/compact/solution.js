import 'babel-polyfill';

// BEGIN (write your solution here)
const compact = arr => arr.reduce((acc, elem) => elem ? [...acc, elem] : acc, [] );
  
export default compact;
// END


// BEGIN Решение учителя
// const set = new Set([false, null, 0, '', undefined]);

export default array =>
  array.filter(value => !!value);
// END