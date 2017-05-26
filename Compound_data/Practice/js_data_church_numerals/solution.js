// BEGIN (write your solution here)
export const Zero = f => x => x;
export const  Succ = n => f => x => f(n(f)(x));
// END