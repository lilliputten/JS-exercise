class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    const newOperations = this.operations.slice();
    newOperations.push(fn);
    return new Enumerable(this.collection.slice(), newOperations);
  }

  // BEGIN (write your solution here)
  where(...args) {
    return this.build(coll => args.reduce((acc, elem) => {
      if (typeof elem === 'function') {
        return acc.filter(elem);
      } 
      return acc.filter( coll => 
        Object.keys(elem).every( key => elem[key] === coll[key])
      );
    }, coll));
  }
  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
