// BEGIN (write your solution here)
const magic = (...arg) => {
  let currsum = arg.reduce((acc, curr) => acc + curr, 0);
  
  function fn(...newargs) {
    currsum += newargs.reduce((acc, curr) => acc + curr, 0);
    return fn;
  }

  fn.valueOf = () => currsum;

  console.log("...arg", ...arg, "sum=", currsum);
  return fn;
  
};

export default magic;
// END