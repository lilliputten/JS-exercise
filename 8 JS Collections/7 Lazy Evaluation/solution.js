class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }
  
  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection, newOps);
  }

  orderBy(fn, direction = 'asc') {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.slice().sort(
      (a, b) => direction === 'desc' ? (fn(b) > fn(a) ? 1 : -1) :
      (fn(b) >= fn(a) ? -1 : 1)
    ));
    return new Enumerable(this.collection, newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection, newOps);
  }

  toArray() {
    const clone = this.collection.slice();
    return  this.operations.reduce(
      (acc, operation) => operation(acc),
      clone
    );
  }
  // END
}

export default Enumerable;
