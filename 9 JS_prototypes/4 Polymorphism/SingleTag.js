// BEGIN (write your solution here)
export default class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = Object.keys(attributes).map(key => 
      ` ${key}="${attributes[key]}"`).join('');
  }
  
  toString() {
    return `<${this.name}${this.attributes}>`;
  }
}
// END
