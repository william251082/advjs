// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://dorey.github.io/JavaScript-Equality-Table/
// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
console.log(1 == '1');

if(1) {console.log(5)}

console.log(Object.is(-0, +0));

console.log(NaN === NaN);

console.log(false == "");
console.log(false == []);
console.log(false == {});
console.log("" == 0);
console.log("" == []);
console.log("" == {});
console.log(0 == []);
console.log(0 == {});
console.log(0 == null);
