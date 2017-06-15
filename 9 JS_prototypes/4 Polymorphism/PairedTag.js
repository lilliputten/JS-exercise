// BEGIN (write your solution here)
export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = Object.keys(attributes).map(key => 
      ` ${key}="${attributes[key]}"`).join('');
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
