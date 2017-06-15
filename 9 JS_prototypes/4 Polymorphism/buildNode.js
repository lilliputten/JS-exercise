import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const singleTagsList = new Set(['hr', 'img', 'br']);

export default (name, attributes, body, children) => {
  if (singleTagsList.has(name)) {
    return new SingleTag(name, attributes, body, children);
  }
  return new PairedTag(name, attributes, body, children);
};
// END
