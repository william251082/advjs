// const elf = {
//     name: name,
//     weapon: weapon,
//     attack() {
//             return 'attack with ' + elf.weapon
//         }
// };
//
// elf.attack();


// factory function make/create
function createElf(name, weapon) {
    //we can also have closures here to hide properties from being changed.
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}
const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');

sam.attack();
peter.attack();

// problem --methods like attack() should be generic, instead of copying in the memory for every elf



