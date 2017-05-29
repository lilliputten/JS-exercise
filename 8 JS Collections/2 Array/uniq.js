// BEGIN (write your solution here)
const uniq = arr => arr.reduce(
  (acc, val) => acc.includes(val) ? acc : acc.concat(val),
[]);
export default uniq;
// END
