// no side effects
// input --> output
// // using shared states can have side effects
//
// const array = [1,2,3];
// function mutateArray(arr) {
//     arr.pop()
// }
//
// function mutateArray2(arr) {
//     arr.forEach(item => {
//         arr.push(1)
//     })
// }
// // mutateArray(array);
// mutateArray2(array);
// console.log(array);

// write something that has no side effects
const array = [1,2,3];
function removeLastItem(arr) {
    // make a new copy instead of modifying the existing
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item*2)
}

// all these functions have no side effects, it doesn't affect anything in the outside world
const array2 = removeLastItem(array);
const array_orig = removeLastItem(array);
const array_m_2 = multiplyBy2(array);
console.log(array2);
console.log(array_orig);
console.log(array_m_2);

// console.log is modifying something outside of global scope
// not a pure function
function a() {console.log('hi')}
a();


// input --> output   --input should always result in the same output -- referential transparency
function func1(num1, num2) {
    return num1 + num2;
}
func1(1,2);
function func2(num1) {
    return num1*2;
}
// the return of func1
func2(func1(1,2));


