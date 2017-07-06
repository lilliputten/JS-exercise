// BEGIN (write your solution here)
export default (gen, ...args) => {
  //let args = [...arguments];

  return new Promise((resolve, reject) => {

    const next = (res) => {
      const value = res.value;
      if (res.done) { return resolve(value); }
      if (value && 'function' == typeof value.then) {
        return value.then(onFulfilled, onRejected);
      }
      return onRejected(new TypeError('You may only yield a promise'));
    };

    const onFulfilled = (res) => {
      let ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
      return null;
    };

    const onRejected = (err) => {
      let ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    };

    if (typeof gen === 'function') gen = gen(...args);//gen.apply(this, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();
  });
};
// END
