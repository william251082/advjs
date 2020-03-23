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

// how hoisting happens
// 1. creation phase
var favouriteFood = undefined;
var foodThoughts = undefined;

// 2. execution phase
var favouriteFood = "grapes";

// 3. make the function
foodThoughts = function () {
    // 7. creation phase
    var favouriteFood = undefined;
    console.log("Originial fav food: " + favouriteFood);

    var favouriteFood = "sushi";

    console.log("New fav food: " + favouriteFood)
};

// 4. run the function
foodThoughts();

// 5. a new execution context is created
// 6. inside this execution context, hoisting happens

