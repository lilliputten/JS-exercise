/* eslint-disable class-methods-use-this */
import Node from './Node'; // eslint-disable-line

export default class extends Node {
  // constructor(name) {
  //   super(name);
  // }

  isFile() {
    return false;
  }

  isDirectory() {
    return true;
  }
}
