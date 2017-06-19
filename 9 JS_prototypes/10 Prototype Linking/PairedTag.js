import Node from './Node';

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

// BEGIN (write your solution here)
PairedTag.prototype = Object.create(Node.prototype);
// END

PairedTag.prototype.toString = function toString() {
  return `<${this.name}${this.attributes}>${this.body}` +
    `${this.children.join('')}</${this.name}>`;
};
