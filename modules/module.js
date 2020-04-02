// var harry = 'potter';
// var voldemort = 'He who must not be named';
// function fight(char1, char2) {
//     var attack1 = Math.floor(Math.random() * char1.length);
//     var attack2 = Math.floor(Math.random() * char2.length);
//     return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
// }
//
// fight(harry, voldemort);


// Global Scope
    // Module Scope
        //Function Scope
            // Block Scope


// IIFE --function in a module
// Module Pattern
var fightModule = (function () {
    var harry = 'potter';
    var voldemort = 'He who must not be named';
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }
    // revealing module pattern
     return {fight: fight}
})();

console.log(fightModule);
console.log(fightModule.fight('fdwe', 'dsdfsd'));

// // module pattern
// problem --the order of the script tag should be correct, otherwise it won't work
// // jquery and globalSecret is not going to be modified
// <script>
//     var globalSecret ='23434';
//     var fight = 'ewrgf'
// </script>
// <script>
//     var script2 = (function ($, globalSecret) {
//         $('h1').click(function () {
//             $('h1').hide();
//         })
//         $ = undefined;
//         globalSecret = 0;
//     })(jquery, globalSecret)
// </script>

// CommonJs, AMD, UMD
// npm
// problem --module that takes time to load(sync code), would be a problem for browsers
var module1 = require('module1'); // .fight;
var module2 = require('module2'); // .importedFunc2;

function fight() {

}

module.exports = {
    fight: fight
};

// on console-- browserify script.js > bundle.js  // create all dependencies and add it to on a single file
// or webpack


// AMD load script asynchronously
// define(['module1', 'module2'],
//     function () {
//     var module1 = module1Import;  // .fight;
//     var module2 = module2Import;  // .importedFunc2;
//
//         function fight(char1, char2) {
//             var attack1 = Math.floor(Math.random() * char1.length);
//             var attack2 = Math.floor(Math.random() * char2.length);
//             return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
//         }
//     }
// return {fight: fight});
