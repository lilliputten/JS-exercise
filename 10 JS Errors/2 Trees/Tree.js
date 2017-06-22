class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  hasChildren() {
    return this.children.size > 0;
  }
  hasChild(key) {
    return this.getChild(key) ? true : false;
  }
  getParent() {
    return this.parent;
  }
  removeChild(key) {
    this.children.delete(key);
  }
  getDeepChild(keys) {
    return keys.reduce((node, key) => node ? node.getChild(key) : undefined, this);
  }
  getChildren() {
    let res = [];
    let key;
    let akeys = this.children.keys();

    while ((key = akeys.next().value)) {
      res.push(this.getChild(key));
    }
    return res;
  }
//getChildren() {
//    return [...this.children.values()];
  // END
}

export default Tree;
