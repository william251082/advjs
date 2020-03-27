// // func scope vs block scope
//
// // on js this is possible
// if (5 > 4) {
//     var secret = '12345';
// }
//
// console.log(secret);
//
//
// // func scope
// function a() {
//     var secret2 = '12345';
// }
//
// console.log(secret2); // RE: not defined
//
//
// // block scope in js can be achieved using let and const
// if (5 > 4) {
//     const secret = '12345';
// }
//
// console.log(secret);


// exercise
function loop() {
    for (var i=0; i<5; i++) {
        console.log(i)
    }

    console.log('final', i)
}

loop();  // when let is used, ReferenceError: i is not defined



// too much global vars pollutes the global namespace, having too much data, limited memory
// issue with variable collision
var z = 1;
var z = 11;
var z = 11;
var z = 111;
