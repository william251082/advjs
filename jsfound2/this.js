// strict mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

//this
// 1. gives method access to their object
// const obj = {
//     name: 'Billy',
//     sing: function() {
//         // this is the object that the function is a property of
//         return 'llala ' + this.name + '!'
//     },
//     singAgain: function() {
//         return this.sing()
//     }
// };
//
// console.log(obj.sing());
// console.log(obj.singAgain());


// 2. execute same code for multiple objects
// 3. this could be referred as to 'who called me?'
function importantPerson() {
    console.log(this.name)
}

const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson: importantPerson};
const obj2 = { name: 'Jacob', importantPerson: importantPerson};

importantPerson();
obj1.importantPerson();
obj2.importantPerson();

// // this is the object that the function is a property of
// function a() { console.log(this) }
// a(); // Window
// window.a(); // Window
//
// function b() { 'use strict'; console.log(this) }
// b(); // undefined
// window.b(); // undefined

