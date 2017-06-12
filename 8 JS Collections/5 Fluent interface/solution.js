class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(f, direction = 'asc') {
    this.collection = this.collection.sort(
      (a, b) => direction === 'desc' ? (f(b) > f(a) ? 1 : -1) : 
      (f(b) >= f(a) ? -1 : 1)
    );
    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;


