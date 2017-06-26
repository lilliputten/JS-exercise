import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // BEGIN (write your solution here)
  const lines = lines1.length >= lines2.length ? lines1 : lines2;
  const res = lines.reduce((acc, el, i) =>{
    if (lines1[i] === undefined) {
      acc.push([null, lines2[i]]);
      return acc;
    } else if (lines2[i] === undefined) {
      acc.push([lines1[i], null]);
      return acc;
    }
    if (acc === undefined) acc = [];
    if (lines1[i] !== lines2[i]) {
      acc.push([lines1[i], lines2[i]]);
      return acc;
    }
  },[]);

  return res;
  // END
};

// BEGIN (write your solution here)
export default (path1, path2, callback) => {
  fs.readFile(path1, (err1, data1) => {
    if (err1)  { callback(err1); return; }
    fs.readFile(path2, (err2, data2) => {
      if (err2) { callback(err2); return; }
      const data = compare(data1.toString(), data2.toString());
      callback(err2, data);
    });
  });
};
// END