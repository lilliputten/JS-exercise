// BEGIN (write your solution here)
export const True = x => y => x;
// export const True =  x => { 
//   return y => {
//      return x; 
//   };
// };
export const False = x => y => y;

export const If = f => x => y => f(x)(y);
// END