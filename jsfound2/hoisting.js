// // how js engine run
// console.log('1--------');
//
// // var teddy = undefined;  // variables are partially hoisted, referenced
//
// // function sing() {        // functions are fully hoisted, it has an allocation in the memory
// //     console.log('oh oh')
// // }
//
// console.log(sing());
//
// var teddy = 'bear';
//
// function sing() {
//     console.log('oh oh')
// }


//
// console.log('1--------');
// console.log(sing());
//
// // var teddy = 'bear';
// let teddy = 'bear'; // teddy will not be defined
//
// (function sing() {console.log('oh oh')}) // sing will no be defined


// console.log('1--------');
// console.log(teddy);
// console.log(sing());
//
// // function expression  // going to be hoisted
// var sing2 = function () {
//     console.log('oh oh oh')
// };
//
// // function declaration
// function sing() {
//     console.log('oh oh oh')
// }


//exr 1
// var one == is hoister
// it will ignore the second declaration
var one = 1;
var one = 2;


a();

function a() {
    console.log('hi');
}
a();
// this will rewrite the other a()'s place in memory, wherever a() is placed
function a() {
    console.log('bye');
}
a();

// next every time a function is called, there'll be a creation phase and an execution phase
