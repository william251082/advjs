// const elf = {
//     name: name,
//     weapon: weapon,
//     attack() {
//             return 'attack with ' + elf.weapon
//         }
// };
//
// elf.attack();


// // factory function make/create
// function createElf(name, weapon) {
//     //we can also have closures here to hide properties from being changed.
//     return {
//         name: name,
//         weapon: weapon,
//         attack() {
//             return 'attack with ' + weapon
//         }
//     }
// }
// const sam = createElf('Sam', 'bow');
// const peter = createElf('Peter', 'bow');
//
// sam.attack();
// peter.attack();
//
// // problem --methods like attack() should be generic, instead of copying in the memory for every elf


// // factory function make/create
//
// // Object.create()
// const elfFunctions = {
//     attack() {
//         return'attack with ' + this.weapon
//     }
// };
//
// function createElf(name, weapon) {
//     // true prototypal inheritance
//     let newElf = Object.create(elfFunctions);
//     console.log(newElf.__proto__);
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf;
// }
// const peter = createElf('Peter', 'stones');
// // peter.attack = elfFunctions.attack;  // instead of creating prop manually, use Object.create()
// console.log(peter.attack());
//
// const sam = createElf('Sam', 'fire');
// // sam.attack = elfFunctions.attack
// console.log(sam.attack());



// // factory function make/create
//
// // constructor functions
// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }
//
// // prototype is useless with loose functions but as constructor function, it's pretty useful because it has call, apply and bind
// Elf.prototype.attack = function () {
//     return 'attack with ' + this.weapon
// };
//
// // lexically scoped arrow function, this id defined to where it is written
// // Elf.prototype.attack = () => {
// //     return 'attack with ' + this.weapon
// // }; // undefined
//
// // new keyword automatically returns the object and creates the constructor
// // new keyword creates a new execution context --  this is the Object and not window anymore
// const peter = new Elf('Peter', 'stones');
// console.log(peter);
//
// const sam = new Elf('Sam', 'fire');
// console.log(sam.name);
// //sam doesn't have an attak() so js engine will go up the prototype chain and look at the method attack()
// console.log(sam.attack());
//
//
//
// // built-in constructor functions are Object, Function etc. uppercase first letter-best practice
// const Elf1 = new Function('name', 'weapon',
//     `this.name = name;
//     this.weapon = weapon;`);
//
// const sarah = new Elf1('Sarah', 'fireworks');
// console.log(sarah.name);



// More constructor functions
// constructor functions
function Elf(name, weapon) {
    console.log('this', this);
    this.name = name;
    this.weapon = weapon;
    console.log('this', this);
}
console.log('Elf.prototype before adding the prototype', Elf.prototype);
Elf.prototype.attack = function () {
    return 'attack with ' + this.weapon
};

// Elf.prototype.build = function () {
//     function building() {
//         // this is assigned to window
//         return this.name +  ' builds a house';
//     }
//     return building.bind(this);
// };
// or
Elf.prototype.build = function () {
    const self = this;
    function building() {
        return self.name +  ' builds a house';
    }
    return building();
};

const peter = new Elf('Peter', 'stones');
console.log(peter.prototype); // undefined, peter is an object not a function
console.log(peter.build());
console.log(peter.attack());
console.log('__proto__', peter.__proto__);  // points to Elf.prototype
console.log('Elf.prototype', Elf.prototype);

const sam = new Elf('Sam', 'fire');
console.log(sam.name);
console.log(sam.attack());

var a =new Number(5);
// typeof a // object

//internally js attached function constructor Number(), so you have access to all props like toString etc.
var b = 5;
// typeof  b // number
// a == b //true
// a === b //false
b.toString();


// everything has constructor functions except null and undefined
