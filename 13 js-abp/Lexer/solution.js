// BEGIN (write your solution here)
export default (text) => {
  let state = 'first';
  let res = [];
  let word = '';
  Array.from(text).forEach((char) => {
    switch(state) {
      case 'first':
        if (char !== ' ' && char !== '\n') {
          word += char;
        } else {
          if (word) {
            state = 'next';
            res.push(word);
            word = '';
          }
        }
        //break;

      case 'next':
        if (char === '\n') {
          state = 'first';
        }
        break;

      default:
        console.log("!!! State Error !!!");
        break;
    }
  });
  return res;
};
// END

