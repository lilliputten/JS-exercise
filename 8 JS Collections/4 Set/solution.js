// BEGIN (write your solution here)
const difference = (set1, set2) => {
  //const tmpset = Array.from(set1);
  return Array.from(set1).filter(word => !set2.has(word))
    .reduce((acc, value) => acc.add(value), new Set());
};
export default difference;
// END

