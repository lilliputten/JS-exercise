// BEGIN (write your solution here)
const search = (doc, tag) => {
  const result = [...doc.getElementsByTagName(tag)];
  //console.log("result=",result);
  return result;
};
export default search;
// END