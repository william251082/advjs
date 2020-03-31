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
// function a() {console.log('hi')}
// a();


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

// not everything can be pure functions
// the goal of fp is to minimize side effect not make only pure functions
// goal is to organize code the organize the side-effects
// at the end of the day, there's always going to be a global state
// build very small reusable and predictable functions


// Idempotence: --function always doing what is expected
function notGood(num) {
    // return Math.random(num);
    // still idempotent
    console.log(num);
}
notGood(5);

// idempotent:
// deleting the user from db, even if you use it multiple time, it still going to return the empty field
// http GET request --api call, given a parameter will always return the same results
// being able to call yourself inside of yourself
Math.abs(Math.abs(-50)); // always be 50


// Imperative vs Declarative
// imperative --a computer needs to know how to do things
// declarative --humans are declarative
// the higher the level the language the more declarative it's can be

// imperative
for (let i=0; i < 10; i++) {
    console.log(i);
}
// jquery


// declarative
[1,2,3].forEach(item => console.log(item));
// react
// functional programming help to be more declarative
// tell the programs what to do instead of how to do it.


// Immutability  --not changing the state
const obj = {name: 'Andrei'};
function clone(obj) {
    return {...obj}; // this is pure but with a lot of immutability i.e. change the name value
}
obj.name = 'Nana';


// maintain immutability --don't change the state
function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana';
    return obj2;
}

const updatedObj = updateName(obj);
console.log(updatedObj, obj);

// question: is it memory expensive to keep updating
// answer: structural sharing, in fp a lot of space is empty
// the idea is that if obj or arr is created,
// it's not entirely copied, it store it under the hood and only the changes are copied


// HOF --it either takes another func as arg or return another function
const hof = () => () => 5;
const hof2 = (fn) => fn(5);

hof2(function a(x) { return x; });


// Closure
// const closure = function () {
//     let count = 0;
//     // increment has access to the recent count var
//     // increment() is modifying the state of closure(), count
//     return function increment() {
//         count++;
//         return count;
//     }
// };
//
// const incrementFn = closure();
// incrementFn();
// incrementFn();
// incrementFn();

// fp not modifying counter
// closures only make a function impure if it modifies the closed over variable, count
// as long as closures don't modify and mutate the the data outside, it's still pure
const closure = function () {
    let count = 55;
    // private var, count
    return function getCounter() {
        return count;
    }
};

const getCounter = closure();
getCounter();
getCounter();
getCounter();


//currying --translating the evaluation of a function that can take multiple args,
// into currying to modify it into taking one param at a time
const multiply = (a, b) => a*b;
// multiply(3,4);
const curriedMultiply = (a) => (b) => a*b;
// now I can create multiple utility functions out of this
// curriedMultiply(2)(3);
// since it's already created, this the only place the this function run
const curriedMultiplyBy5 = curriedMultiply(5);


// 10 years from now, this is still reusable
curriedMultiplyBy5(4);
curriedMultiplyBy5(4);
curriedMultiplyBy5(4);
