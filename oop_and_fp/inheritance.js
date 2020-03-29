// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// }
//
// const fiona = new Elf('Fiona', 'ninja stars');
// const ogre = {...fiona};
// console.log(ogre);
// console.log(ogre.__proto__);
// console.log(fiona === ogre);
// console.log(ogre.attack()); // how do we extend attack



class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        // console.log('what am i?', this); this gives an error
        super(name, weapon);
        console.log(this); // will run the constructor of parent class
        console.log('what am i?', this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() { // this is like extending our prototype.
        return 'strongest fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
const houseElf = new Elf('Dolby', 'cloth', 'house');
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green');
shrek.makeFort();


//tests
console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));
console.log(dolby instanceof Elf);
console.log(dolby instanceof Ogre);
console.log(dolby instanceof Character);
