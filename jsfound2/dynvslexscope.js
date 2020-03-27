// const a = function () {
//     console.log('a', this);
//     const b = function () {
//         console.log('b', this);
//         const c = {
//             hi: function () {
//                 console.log('c', this)
//             }
//         };
//         c.hi(); // who called me?
//     };
//     b() //window.b()
// };
//
// console.log(a());


// this keyword is dynamically scoped not lexically scoped
// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = function () {
//             // this is not lexically scoped, it doesn't matter where it's written,
//             // it matters how the function was called
//             // obj didn't really call anotherFunc, the sing() did.
//             console.log('b', this);
//         };
//         anotherFunc();
//     }
// };
//
// console.log(obj.sing());


// // solution: arrow function which lexically scoped
// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = () => {
//             console.log('b', this);
//         };
//         anotherFunc();
//     }
// };
//
// console.log(obj.sing());

// // solution: before arrow function
// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = function() {
//             console.log('b', this);
//         };
//
//         return anotherFunc.bind(this);
//     }
// };
//
// console.log(obj.sing()());


// anothersolution: before arrow function
const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var self = this;
        var anotherFunc = function() {
            console.log('b', self);
        };

        return anotherFunc.bind(this);
    }
};

console.log(obj.sing()());
