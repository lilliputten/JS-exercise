// BEGIN (write your solution here)
const asyncFilter = (coll, fn, callback) => {
  if (coll.length === 0) {
    callback(coll.slice(0, -1));
    return;
  }
  
  const iter = ([head, ...rest], acc) => {
    const newAcc = fn(head) ? [...acc, fn(head)] : acc;
    if (rest.length === 0) {
      callback(newAcc);
      return;
    }
    setTimeout(iter, 0, rest, newAcc);
  };

  return iter(coll, []);
};
export default asyncFilter;
// END