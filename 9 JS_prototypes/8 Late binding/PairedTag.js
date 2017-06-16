// BEGIN (write your solution here)
import Node from './Node';

function toString() {
  return `<${this.name}${this.attributes}>`;
}

export default function(name, attributes = {}) {
  Node.apply(this, [name, attributes]); // super
  this.toString = toString;
}
// END
