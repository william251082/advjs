// Compose --any sort of data transformation that we do should be obvious
// data --> fn --> data --> fn -->
// composability is a system design principle that deals with the relationship of components

// compose 2 things at a time, product and absolute value of 2 numbers
// the best library for f p in js is ramda

const compose = (fn1, fn2) => (data) => fn1(fn2(data));
//create pure functions
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-5));


// compose is evaluating from right to left
// pipe is evaluating from left to right
// compose(f1,f2,f3,f4)(50);
// pipe(f4,f3,f2,f1)(50);


//arity
// the fewer the param int he function the better
