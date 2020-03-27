// function two() {
//     var isValid;
// }
//
// function one() {
//     var isValid = true;
//     two();
// }
//
// var isValid = false;
// one();


function two() {
    var isValid; // 4. undefined
}

function one() {
    var isValid = true;  // 2. local env
    two(); // 3. new execution context
}

var isValid = false;
one();  // 1. made a new execution context


// stack -- after after execution, pop it LIFO
// two()  -- undefined
// one()  -- true  -inside exec context
// global -- false
