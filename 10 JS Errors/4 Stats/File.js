/* eslint-disable class-methods-use-this */
import Node from './Node'; // eslint-disable-line

// BEGIN (write your solution here)
export default class extends Node {
  constructor(name) {
    super(name);
  }

  isFile() {
    return true;
  }

  isDirectory() {
    return false;
  }
}

//export default File;
// END