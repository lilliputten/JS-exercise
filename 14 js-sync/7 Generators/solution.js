import 'babel-polyfill'; // eslint-disable-line

// BEGIN (write your solution here)
export default class Solution {
  nextIndex = 0;

  constructor(start, fun, res = []) {
    this.res = res;
    this.start = start;
    this.value = start;
    this.fun = fun;
  }

  [Symbol.iterator]() {
    const next = () => {
      if (this.nextIndex < this.res.length) {
        const value = this.value;
        this.value = this.fun(this.value);
        this.nextIndex++;
        return { value, done: false };
      }
      return { done: true };
    };
    return { next };
  }

  skip(n) {
    if (n < 1) {
      this.start = this.value;
      return this;
    }
    this.value = this.fun(this.value);
    return this.skip(n - 1);
  }

  take(m) {
    if (m < 2) {
      this.res.push(this.value);
      const tmp = this.res;
      this.res = [];
      this.value = this.start;
      return new Solution(this.start, this.fun, tmp);
    }
    
    this.res.push(this.value);
    this.value = this.fun(this.value);
    return this.take(m - 1);
  }
}
// END

