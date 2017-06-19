// BEGIN (write your solution here)
export default function Node(name, attributes) {
  this.name = name;
  this.attributes = Object.keys(attributes).reduce((acc, key) =>
    `${acc} ${key}="${attributes[key]}"`, '');
}
// END