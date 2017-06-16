// BEGIN (write your solution here)
import Node from './Node';

export default class PairedTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    return `<${this.name}${this.attributes}>` +
      `${this.body}${this.children.join('')}` +
      `</${this.name}>`;
  }
}
// END
