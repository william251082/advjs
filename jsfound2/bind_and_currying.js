// function currying
function multiply(a, b) { return a*b; }
console.log(multiply(2, 2));

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(2));
