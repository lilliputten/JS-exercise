class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const mapped = this.collection.map(fn);
    return new Enumerable(mapped);
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const sorted = this.collection.slice().sort(
      (a, b) => direction === 'desc' ? (fn(b) > fn(a) ? 1 : -1) : 
      (fn(b) >= fn(a) ? -1 : 1)
    );
    return new Enumerable(sorted);
    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
