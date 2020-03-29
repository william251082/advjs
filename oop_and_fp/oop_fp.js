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



// factory function make/create

// constructor functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// prototype is useless with loose functions but as constructor function, it's pretty useful because it has call, apply and bind
Elf.prototype.attack = function () {
    return 'attack with ' + this.weapon
};

// lexically scoped arrow function, this id defined to where it is written
// Elf.prototype.attack = () => {
//     return 'attack with ' + this.weapon
// }; // undefined

// new keyword automatically returns the object and creates the constructor
// new keyword creates a new execution context --  this is the Object and not window anymore
const peter = new Elf('Peter', 'stones');
console.log(peter);

const sam = new Elf('Sam', 'fire');
console.log(sam.name);
//sam doesn't have an attak() so js engine will go up the prototype chain and look at the method attack()
console.log(sam.attack());



// built-in constructor functions are Object, Function etc. uppercase first letter-best practice
const Elf1 = new Function('name', 'weapon',
    `this.name = name;
    this.weapon = weapon;`);

const sarah = new Elf1('Sarah', 'fireworks');
console.log(sarah.name);





