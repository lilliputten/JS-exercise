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
export default (coll, fn, callback = noop) => {
  let completed = 0;
  let result = [];
  const oncedCallback = once(callback);
  if (coll.length === 0) { return oncedCallback(null, result); }

  const cb = (err, el) => {
    if (err) { return oncedCallback(err); }
    el ? result.push(coll[completed]) : result;
    completed++;
    if (completed === coll.length) { oncedCallback(null, result); }
  };

  coll.forEach(el => fn(el, cb));
};
// END
