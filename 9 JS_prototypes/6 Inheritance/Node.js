// BEGIN (write your solution here)
export default class Node {
  constructor(name, attributes) {
    this.name = name;
    this.attributes = Object.keys(attributes).map(key =>
      ` ${key}="${attributes[key]}"`).join('');
  }

}
// END