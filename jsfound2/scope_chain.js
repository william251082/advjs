
// function findName() { var b = 'b'; return printName() }
// function printName() { var c = 'c'; return 'John Doe' }
// function sayMyName() { var a = 'a'; return findName() }
//
// sayMyName();


// var x = 'x';
// function findName() { console.log(x); var b = 'b'; return printName() }
// function printName() { var c = 'c'; return 'John Doe' }
// function sayMyName() { var a = 'a'; return findName() }
//
// sayMyName();


// function sayMyName() {
//     var a = 'a';
//     return function findName() {
//         var b = 'b';
//         // console.log(c); // reference error: won't be defined not undefined type
//         return function printName() {
//             var c = 'c';
//             // func lex env
//             console.log(c);
//             console.log(b);
//             console.log(a);
//             return 'John Doe'
//         }
//     }
// }
//
// // eval() and with can change how scope works in js, it will break the lexical scope
//
// console.log(sayMyName()); // [Function: findName]
// console.log(sayMyName()()); // [Function: printName]
// console.log(sayMyName()()()); // 'John Doe'
//
// // test on the browser
// function a() {
//
// } // window.a // [[Scopes]] 0: {type: global etc}


function weird() {
    height = 50;
    return height;
}

console.log(weird()); // 50 instead of not defined, solution 'use strict'


// another gotcha
var heyhey = function doodle() {
    // do something
    return 'heyhey'
};

console.log(heyhey());
console.log(doodle()); // doodle() is enclosed in its own scope, it can only be accessed inside itself
