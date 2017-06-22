// BEGIN (write your solution here)
Object.prototype.hash = function(keys) {
  const arrkey = keys.split('.');
  return arrkey.reduce((acc, key) => {
    return acc instanceof Object ? acc[key] : undefined;
  }, this);
};
// END