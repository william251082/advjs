// in js type checking is done during runtime
// var a = 100;
//
// // for statically typed lang
// int a;
// a = 100;


//pros of statically typed lang
// doc for statically typed lang --self-documenting
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum('hello', null);
// helps with auto complete
// less type related bugs on prod

//cons
// more code, more layer of complexity
// just write better tests
// slower dev process
// less time debugging semantics, more debugging time for logic and errors



// weak typing
var a = 'hiiiii';
console.log(a + 17); // hiiiii17

// strong typing
var a = 'hiiiii';
console.log(a + 17); // error

// @flow

