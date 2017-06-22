import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line

// BEGIN (write your solution here)
function getPathParts(filepath) {
  return filepath.split(path.sep).filter(el => el !== '');
}
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  isDirectory(path) {
    const keys = getPathParts(path);
    const subtree = this.tree.getDeepChild(keys);
    return subtree && subtree.getKey() === keys[keys.length - 1];
  }

  isFile(path) {
    const keys = getPathParts(path);
    const subtree = this.tree.getDeepChild(keys);
    return subtree && subtree.getKey() === keys[keys.length - 1];
  }

  mkdirSync(path) {
    const keys = getPathParts(path);
    const key = keys.pop();
    const subtree = keys.length < 1 ? this.tree : this.tree.getDeepChild(keys);
    subtree.addChild(key);
  }

  touchSync(path) {
    const keys = getPathParts(path);
    const key = keys.pop();
    const subtree = keys.length < 1 ? this.tree : this.tree.getDeepChild(keys);
    subtree.addChild(key);
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
