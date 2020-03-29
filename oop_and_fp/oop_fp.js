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


// factory function make/create

// Object.create()
const elfFunctions = {
    attack() {
        return'attack with ' + this.weapon
    }
};

function createElf(name, weapon) {
    // true prototypal inheritance
    let newElf = Object.create(elfFunctions);
    console.log(newElf.__proto__);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}
const peter = createElf('Peter', 'stones');
// peter.attack = elfFunctions.attack;  // instead of creating prop manually, use Object.create()
console.log(peter.attack());

const sam = createElf('Sam', 'fire');
// sam.attack = elfFunctions.attack
console.log(sam.attack());




