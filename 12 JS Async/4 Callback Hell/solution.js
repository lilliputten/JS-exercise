// BEGIN (write your solution here)
export default (num, fn, callback) => {
  const next = () => {
    const cb = (err, res) => {
      if (!err) {
        return callback(err, res);
      }
      if (err < num) next();
      callback(err);
    };
    fn(cb);
  };
  num = num || 5;
  next(num);
};
// END