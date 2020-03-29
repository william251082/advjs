// // test on the browser console
// const array = [];
// // constructor
// console.log(array.__proto__); // push, pop etc.
// // base object
// console.log(array.__proto__.__proto__);  // toString etc
//
//
// function a() {}
// // constructor
// console.log(a.__proto__);
// // base object
// console.log(a.__proto__.__proto__);
//
//
// const obj1 = {};
// // constructor // base object
// console.log(obj1.__proto__);



// basic
// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//         return 5;
//     },
//     sing() {
//         return `I am ${this.name}, the breather of fire.`
//     }
// };
//
// console.log(dragon.fight());
// console.log(dragon.sing());
//
//
// let lizard = {
//   name: 'Kiki',
//   fight() {
//       return 1;
//   }
// };
//
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());


// complex
let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        if (this.fire) return `I am ${this.name}, the breather of fire.`
    }
};

console.log(dragon.fight());
console.log(dragon.sing());


let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
};

// const singLizard = dragon.sing.bind(lizard);
// // can't inherit fire attr
// console.log(singLizard());
// // inherit everything
// lizard.__proto__ = dragon;
// console.log(dragon);
// console.log(dragon.__proto__); // base object {}
// console.log(dragon.isPrototypeOf(lizard));
// // js will go up the prototype chain to find sing()
// console.log(lizard.sing());


// props that are inherited are not copied
// js engine automatically looks up for the props
// scope chain is different from the prototype chain
// never manually use __proto__
// lizard.__proto__ = dragon;
// for (let prop in lizard) {
//     if (lizard.hasOwnProperty(prop))
//     console.log(prop)
// }
//
// const obj = {};
// obj.__proto__; // base object constructor
// obj.__proto__.__proto__;  // null


const obj = {name: 'John'};
obj.hasOwnProperty('name'); // true
obj.hasOwnProperty('hasOwnProperty'); // false

function a() {}
// properties aren't in func(), it's up the prototype chain
a.hasOwnProperty('call'); //false
a.hasOwnProperty('apply'); //false
a.hasOwnProperty('bind'); //false

a.hasOwnProperty('name'); //name


function multiplyBy5(num) { return num*5; }
// base function -- function constructor
// multiplyBy5.__proto__ // f() {[native code]}
// capture as global var in the browser console -- to temp1
// temp1 will have usual object props

// multiplyBy5.__proto__ is Function.prototype
// Object.prototype.__proto__ // null    // proto is a pointer to prototype


const array = [];
array.hasOwnProperty('map'); // false // map should live only in one place in memory
array.__proto__.hasOwnProperty('map'); //true
// Array.prototype
// array.__proto__ is pointing to the parent Array.prototype

