// JS Engine
// const isHappy = true;

// list of ECMAscript engines
// https://en.wikipedia.org/wiki/List_of_ECMAScript_engines
// v8 is written in c++, ex. for google maps // fastest
// spider monkey, used by firefox

// astexplorer.net

// function jsengine(code) {
//     return code.split(/\s+/)
// }
//
// console.log(jsengine('var a = 5'));

// // interpreter vs compiler
// function someCalculation(x, y) {
//     return x + y;
// }
//
// for (let i = 0; i < 1000; i++) {
//     someCalculation(5, 4);
// }

// combine interpreter and compiler == JIT compiler


// // hoisting happens on every execution context
// change to var to const to not rely on hoisting
// var favouriteFood = "grapes";
//
// var foodThoughts = function () {
//     console.log("Originial fav food: " + favouriteFood);
//
//     var favouriteFood = "sushi";
//
//     console.log("New fav food: " + favouriteFood)
// };
//
// foodThoughts();

// // how hoisting happens
// // 1. creation phase
// var favouriteFood = undefined;
// var foodThoughts = undefined;
//
// // 2. execution phase
// var favouriteFood = "grapes";
//
// // 3. make the function
// foodThoughts = function () {
//     // 7. creation phase
//     var favouriteFood = undefined;
//     console.log("Originial fav food: " + favouriteFood);
//
//     var favouriteFood = "sushi";
//
//     console.log("New fav food: " + favouriteFood)
// };
//
// // 4. run the function
// foodThoughts();
//
// // 5. a new execution context is created
// // 6. inside this execution context, hoisting happens

// call(), apply(), bind() to borrow methods
// function a() {
//     console.log('hi')
// }
//
// a();
// a.call();
// a.apply();
//
// const wizard = {
//     name: 'Merlin',
//     health: 50,
//     heal(num1, num2) {
//         return this.health += num1 + num2;
//     }
// };

// const archer = {
//     name: 'Robin',
//     health: 30
// };
//
// console.log('1', archer);
// // call takes params
// wizard.heal.call(archer, 50, 30);
// // apply takes array
// wizard.heal.apply(archer, [50, 30]);
// console.log('2', archer);

// bind returns but not run a new function
// bind can store the this keyword
// console.log('1', archer);
// const healArcher = wizard.heal.bind(archer, 50, 30);
// healArcher();
// console.log('2', archer);

// // compile c++ code
// ~/Desktop g++ program.cpp -o program

// Writing optimized code

// hidden classes
// https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html

// managing arguments
// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
// eval(); // problematic
// arguments // use parameter destructuring instead
// for in // use Object.keys instead
// with
// delete


// inline caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'John',
    lastName: 'Doe'
};

// use inline caching
findUser(userData);

// hidden classes
function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// this will be slow
// instantiate object properties in the same order so
// the hidden classes in the compiler wouldn't think it came from different objects
// solution add the properties in the constructor or create the properties in order
obj1.a = 30;
obj1.b = 100;
obj2.b = 100;
obj2.a = 100;

delete obj1.x = 30;
