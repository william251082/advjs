// IIFE  --immediately invoked func expression

console.log('iife', (function () {})());
console.log('anon', function () {}());

console.log('iife', (function () {var a=1;})());
console.log('iife', (function () {var a=1;}()));


// // problem
// var z = 1;
// // got polluted
// var z = 'hahahaha';
// console.log(z);
//
// // solution before module, iife
// var script1 = (function () {
//     function a() {
//         return 5;
//     }
//     return { a: a };
// })();
//
// function a() {
//     return 'hahaha'
// }
//
// console.log(a());
// // access a() by having iife
// console.log(script1.a());

// with jQuery
var script1 = (function ($) {
    $('h1').click(function () {
        $('h1').hide();
    });
    return { $: 'hi' };
})(jQuery); // added jQuery to the global namespace, doesn't have to go up the chain to find $

// script1.$  // 'hi'
