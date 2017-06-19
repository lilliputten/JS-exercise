// BEGIN (write your solution here)
const iter = (lastkey, obj) => {
  if (Object.keys(obj).length === 1 && 
    !(obj[Object.keys(obj).join()] instanceof Object)) {
    return undefined;
  }
  for (let el in obj) {
    if (obj[el] instanceof Object) {
      return el === lastkey ? obj[el] : iter(lastkey, obj[el]);
    }
  }
};

Object.prototype.hash = function(keys) {
  const arrkey = keys.split('.');
  const lastkey = arrkey[arrkey.length - 1];
  return iter(lastkey, this);
};
// END