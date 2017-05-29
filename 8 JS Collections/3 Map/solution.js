import 'babel-polyfill';

// BEGIN (write your solution here)
export const wordsCount = (words, stopWords) => {
  let res = new Map();

  const lower = words.map(str => str.toLowerCase());
  //console.log("lower=", lower);
  
  const stop = new Map();
  stopWords.forEach(key => stop.set(key, key));
  //console.log("stop=", stop);
  
  const removeStop = lower.filter(key => !stop.has(key));
  //console.log("removeStop=",removeStop);
  
  res = removeStop.reduce(
    (acc, key) => acc.has(key) ? 
      acc.set(key, acc.get(key) + 1) : acc.set(key, 1), res);
  //console.log("res=", res);
  return res;
};
// END

