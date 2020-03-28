// // invoking function
// function one() { return 1; }
// one();
//
//
// // as a method
// // var obj = { two: function () { return 2; }};
// // ecma
// var obj = { two() { return 2; }};
// obj.two();
//
//
// // call()
// function three() { return 1; }
// three.call();
//
//
// // function constructor  --creates functions
// const four = new Function('num', 'return num');
// four(4);
//
//
// // adding property to function
// function woohoo() { console.log('woohoo')}
// woohoo().yell  = 'ahhhh';
// // under the hood
// // js creates a special type of object
// const specialObj = {
//     yell: 'ahhhhhhh',
//     name: 'woohooo',
//     (): console.log('woohoo');
// };

// functions are just objects, that means it can be passed around




// Functions are 1st class citizens in js
// Functions can be passed around like data
// 1
var stuff = function () {};
// 2
function a(fn) { fn() }
a(function () { console.log('hi there') });
// 3
function b() { return function c() {console.log('bye')} }

console.log(b());
console.log(b()());

var d = b;
console.log(d()());


// be careful with initializing function inside a loop
function a() {}
for (let i = 0; i < 5; i++) {
    // function a() {}  // this initialization should outside the loop
    a()
}

// functions that returns params
// give a default param value
function a(param=0) {
    return param;
}
a();
