const noop = (...args) => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

// BEGIN (write your solution here)
const concat = (coll, fn, callback = noop) => {
  const oncedCallback = once(callback);
  if (coll.length === 0) { return callback(null); }

  let completed = 0;
  let result = [];

  const cb = (err, el) => {
    if (err) { return oncedCallback(err); }
    completed++;
    result.push(...el); // ...el т.к. el может быть массивом, см. 'set 1'
    if (completed === coll.length) { oncedCallback(null, result); }
  };

  coll.forEach(el => fn(el, cb));
};
export default concat;
// END